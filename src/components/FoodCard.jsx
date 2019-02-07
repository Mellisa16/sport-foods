import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const FoodCard = food => {
    const { title, manufacturer, price, image, addToCart, addedCount } = food;
    return (
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className="date">{manufacturer}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name="grn" />
                    {price}
                </a>
            </Card.Content>
            <Button onClick={addToCart.bind(this, food)}>
                Add to Cart {addedCount > 0 && `(${addedCount})`}
            </Button>
        </Card>
    );
};

export default FoodCard;
