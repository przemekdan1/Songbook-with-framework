// HomePage.js
import React from 'react';
import CategoryList from './CategoryList';
import UserPanel from "./UserPanel";
import LogoComponent from "./LogoComponent";
import SongList from "./SongList"; // Correctly import SongList
import '../../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="container-home">
            <div className="left-side">
                <div className="top-section">
                    <LogoComponent />
                    <CategoryList />
                </div>
                <div className="bottom-section">
                    <UserPanel />
                </div>
            </div>
            <div className="right-side">
                <SongList /> {/* Use the imported SongList component */}
            </div>
        </div>
    );
};

export default HomePage;
