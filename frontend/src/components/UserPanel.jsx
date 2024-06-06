import React from 'react';
import '../styles/UserPanel.css';

const UserPanel = () => {
    const pages = [
        'Profile',
        'Sign out'
    ];

    return (
        <div className="categories-container">
            <div className="category-title">ACCOUNT</div>
            <ul className="category-list">
                {pages.map((page, index) => (
                    <li key={index}>{page}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserPanel;
