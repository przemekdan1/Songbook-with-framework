// HomePage.js
import React from 'react';
import CategoryList from './CategoryList';
import UserPanel from "./UserPanel";
import LogoComponent from "./LogoComponent.jsx";
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="container">
            <div className="left-side">
                <div className="top-section">
                    <LogoComponent />
                    <CategoryList />
                </div>
                <div className="bottom-section">
                    <UserPanel />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
