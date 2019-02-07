import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import FoodCard from '../containers/FoodCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import { Card } from 'semantic-ui-react';

class App extends Component {
    componentWillMount() {
        const { setFoods } = this.props;
        axios.get('/foods.json').then(({ data }) => {
            setFoods(data);
        });
    }

    render() {
        const { foods, isReady } = this.props;
        return (
            <Container>
                <Menu />
                <Filter />
                <Card.Group itemsPerRow={4}>
                    {!isReady
                        ? 'Loading...'
                        : foods.map((food, i) => <FoodCard key={i} {...food} />)}
                </Card.Group>
            </Container>
        );
    }
}

export default App;
