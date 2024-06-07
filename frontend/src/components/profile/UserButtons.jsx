import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserButtons = ({ userId }) => {
    const navigate = useNavigate();

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
