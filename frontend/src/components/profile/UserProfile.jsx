import React from 'react';
import '../../styles/UerProfile.css';

const UserProfile = ({ name, surname }) => {
    return (
        <div className="user-profile">
            <div className="user-avatar">
                <span className="user-icon">👤</span>
            </div>
            <div className="user-info">
                <div className="user-name">{name}</div>
                <div className="user-surname">{surname}</div>
            </div>
        </div>
    );
};

export default UserProfile;
