import React from 'react';
import '../../styles/UserPanel.css';
import { useNavigate } from 'react-router-dom';

const UserPanel = () => {
    const navigate = useNavigate();

    const handleNavigation = (page) => {
        if (page === 'Profile') {
            navigate('/profile');
        }
        // Add more navigation logic if needed
    };

    const pages = [
        'Profile',
        'Sign out'
    ];

    return (
        <div className="categories-container">
            <div className="category-title">ACCOUNT</div>
            <ul className="category-list">
                {pages.map((page, index) => (
                    <li key={index} onClick={() => handleNavigation(page)} className="category-list-item">
                        {page}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default UserPanel;
