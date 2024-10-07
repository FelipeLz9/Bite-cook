import React from 'react';
import '../Card/Card.css'; // Asegúrate de que la ruta es correcta

interface DishCardProps {
    title: string;
    price: number;
    image: string;
    isTrending: boolean;
}

const Card = ({ title, price, image, isTrending }: DishCardProps) => {
    return (
        <div className="dish-card">
            <img src={image} alt={title} className="dish-card__image" />
            <div className="dish-card__info">
                <h3 className="dish-card__title">{title}</h3>
                {price && <p className="dish-card__price">${price}</p>}
                <div className="dish-card__actions">
                    {isTrending ? (
                        <>
                            <button className="info-btn">More Info</button>
                            <button className="cart-btn">
                                <i className="cart-icon">🛒</i> Add to Cart
                            </button>
                        </>
                    ) : (
                        <button className="info-btn">More Info</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
