// HomePage.js
import React from 'react';
import CategoryList from '../home/CategoryList.jsx';
import UserPanel from "../home/UserPanel.jsx";
import LogoComponent from "../home/LogoComponent.jsx";
import '../../styles/HomePage.css';
import UserProfile from "./UserProfile.jsx";
import FavoriteSongs from "./FavouriteSongList.jsx";
import {useNavigate} from "react-router-dom";

const ProfilePage = () => {

    const navigate = useNavigate();

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
                <div className="back-button" onClick={() => navigate('/home')}>
                    ←
                </div>
                <UserProfile name="Name" surname="Surname"/>
                <FavoriteSongs/>
            </div>
        </div>
    );
};

export default ProfilePage;
