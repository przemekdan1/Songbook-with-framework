import React, { useEffect, useState } from 'react';
import '../../styles/UerProfile.css';

const UserProfile = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            const base64Url = token.split('.')[1]; // Get the payload part
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            const decodedToken = JSON.parse(jsonPayload);
            setUsername(decodedToken.sub); // Assuming the username is stored in 'sub'
        }
    }, []);

    return (
        <div className="user-profile">
            <div className="user-avatar">
                <span className="user-icon">👤</span>
            </div>
            <div className="user-info">
                <div className="user-name">{username}</div>
            </div>
        </div>
    );
};

export default UserProfile;