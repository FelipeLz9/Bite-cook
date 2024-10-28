'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import '../Card/Card.css';

interface DishCardProps {
    title: string;
    price: number;
    image: string;
    isTrending: boolean;
    description: string;
}

const Card = ({ title, price, image, isTrending, description }: DishCardProps) => {
    const [showDescription, setShowDescription] = useState(false);
    const t = useTranslations('Card');

    const handleMoreInfoClick = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className="dish-card">
            <img src={image} alt={title} className="dish-card__image" />
            <div className="dish-card__info">
                <h3 className="dish-card__title">{title}</h3>
                {price && <p className="dish-card__price">{t('price', { price: price.toFixed(2) })}</p>}
                <div className="dish-card__actions">
                    {isTrending ? (
                        <>
                            <button className="info-btn" onClick={handleMoreInfoClick}>{t('moreInfo')}</button>
                            <button className="cart-btn">
                                <i className="cart-icon">🛒</i> {t('addToCart')}
                            </button>
                        </>
                    ) : (
                        <button className="info-btn" onClick={handleMoreInfoClick}>{t('moreInfo')}</button>
                    )}
                </div>
            </div>
            
            {showDescription && (
                <div className="dish-card__description">
                    <p>{description}</p>
                    <button className="close-btn" onClick={handleMoreInfoClick}>{t('close')}</button>
                </div>
            )}
        </div>
    );
};

export default Card;