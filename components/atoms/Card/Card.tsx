import React, { useState } from 'react';
import '../Card/Card.css'; // Asegúrate de que la ruta es correcta

interface DishCardProps {
    title: string;
    price: number;
    image: string;
    isTrending: boolean;
    description: string;  // Añadimos la descripción
}

const Card = ({ title, price, image, isTrending, description }: DishCardProps) => {
    const [showDescription, setShowDescription] = useState(false);

    // Función para manejar el botón de "More Info"
    const handleMoreInfoClick = () => {
        setShowDescription(!showDescription);  // Alterna la visibilidad de la pestaña
    };

    return (
        <div className="dish-card">
            <img src={image} alt={title} className="dish-card__image" />
            <div className="dish-card__info">
                <h3 className="dish-card__title">{title}</h3>
                {price && <p className="dish-card__price">${price.toFixed(2)}</p>}
                <div className="dish-card__actions">
                    {isTrending ? (
                        <>
                            <button className="info-btn" onClick={handleMoreInfoClick}>More Info</button>
                            <button className="cart-btn">
                                <i className="cart-icon">🛒</i> Add to Cart
                            </button>
                        </>
                    ) : (
                        <button className="info-btn" onClick={handleMoreInfoClick}>More Info</button>
                    )}
                </div>
            </div>
            
            
            {showDescription && (
                <div className="dish-card__description">
                    <p>{description}</p>
                    <button className="close-btn" onClick={handleMoreInfoClick}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Card;
