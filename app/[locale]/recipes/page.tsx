'use client';

import React from "react";
import "./page.css";
import Footer from "@/components/molecules/Footer/Footer";
import { Header } from "@/components/molecules/Header/Header";
import { useTranslations } from 'next-intl';

const purchasedRecipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    image: "https://leitesculinaria.com/wp-content/uploads/2024/04/spaghetti-carbonara-1-2.jpg",
    ingredients: 6,
    cookingTime: "30 min",
    difficulty: "Medium"
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    image: "https://www.allrecipes.com/thmb/sqGWwlpv8YYeoyVzkGoqkEkP2OY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/239867chef-johns-chicken-tikka-masala-ddmfs-3X4-0572-e02a25f8c7b745459a9106e9eb13de10.jpg",
    ingredients: 10,
    cookingTime: "45 min",
    difficulty: "Hard"
  },
  {
    id: 3,
    name: "Caesar Salad",
    image: "https://feelgoodfoodie.net/wp-content/uploads/2020/04/Caesar-Salad-06.jpg",
    ingredients: 7,
    cookingTime: "15 min",
    difficulty: "Easy"
  }
];

const PurchasedRecipes: React.FC = () => {
  const t = useTranslations('purchasedRecipes');

  return (
    <>
      <Header />
      <div className="purchased-recipes">
        <div className="purchased-recipes__container">
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
          {purchasedRecipes.length === 0 ? (
            <p>{t('noRecipes')}</p>
          ) : (
            <div className="recipe-grid">
              {purchasedRecipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card">
                  <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                  <h3>{recipe.name}</h3>
                  <div className="recipe-details">
                    <p>{t('recipeCard.ingredients')}: {recipe.ingredients}</p>
                    <p>{t('recipeCard.cookingTime')}: {recipe.cookingTime}</p>
                    <p>{t('recipeCard.difficulty')}: {recipe.difficulty}</p>
                  </div>
                  <button className="view-recipe-button">{t('recipeCard.viewRecipe')}</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PurchasedRecipes;

