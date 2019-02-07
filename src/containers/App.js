import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as foodsActions from '../actions/foods';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (foods, filterBy) => {
    switch (filterBy) {
        case 'price_high':
            return orderBy(foods, 'price', 'desc');
        case 'price_low':
            return orderBy(foods, 'price', 'asc');
        case 'manufacturer':
            return orderBy(foods, 'manufacturer', 'asc');
        default:
            return foods;
    }
};

const filterFoods = (foods, searchQuery) =>
    foods.filter(
        o =>
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.manufacturer.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    );

const searchFoods = (foods, filterBy, searchQuery) => {
    return sortBy(filterFoods(foods, searchQuery), filterBy);
};

const mapStateToProps = ({ foods, filter }) => ({
    foods: foods.items && searchFoods(foods.items, filter.filterBy, filter.searchQuery),
    isReady: foods.isReady,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(foodsActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
