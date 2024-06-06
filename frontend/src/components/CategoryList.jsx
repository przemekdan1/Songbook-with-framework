import React from 'react';
import '../styles/CategoryList.css';

const CategoryList = () => {
    const categories = [
        'Piosenki turystyczne',
        'Wolna Grupa Bukowina',
        'Stare dobre małżeństwo',
        'Piosenki nieobciążające intelektualnie',
        'Piosenki różne'
    ];

    return (
        <div className="categories-container">
            <div className="category-title">CATEGORIES</div>
            <ul className="category-list">
                {categories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryList;
