import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserButtons = ({ userId }) => {
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            const base64Url = token.split('.')[1]; // Get the payload part
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            const decodedToken = JSON.parse(jsonPayload);
            setRole(decodedToken.roles); // Assuming the role is stored in 'roles'
        }
    }, []);

    const handleEditUsers = () => {
        navigate('/users');
    };

    const handleEditOwnData = () => {
        navigate(`/update-user/${userId}`);
    };

    const handleDeleteAccount = () => {
        navigate(`/delete/${userId}`);
    };

    return (
        <div className="user-action-buttons">
            <p>Your role: {role}</p>
            <button className="btn btn-primary me-2" onClick={handleEditUsers}>
                Edit Users
            </button>
            <button className="btn btn-secondary me-2" onClick={handleEditOwnData}>
                Edit My Data
            </button>
            <button className="btn btn-danger" onClick={handleDeleteAccount}>
                Delete Account
            </button>
        </div>
    );
};

export default UserButtons;
