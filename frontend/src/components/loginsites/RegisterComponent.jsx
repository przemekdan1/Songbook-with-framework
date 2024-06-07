import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/LoginComponent.css';

function RegisterComponent() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== repeatPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', {
                username,
                email,
                password
            });
            setToken('JWT Token: ' + response.data.token);
            console.log(response.data.token);
            navigate('/login'); // Redirect to login page after successful registration
        } catch (err) {
            setError('Registration failed');
            console.error(err);
        }
    };

    return (
        <div className="login-content">
            <img src="./public/hkoliba_logo3.svg" alt="Logo" className="login-logo" />
            <h1>REGISTER</h1>
            <p>Hello there! Please enter your details.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Repeat password</label>
                    <input
                        type="password"
                        placeholder="Repeat your password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                {token && <p className="token-message">{token}</p>}
                <button type="submit" className="login-button">Sign up</button>
                <p>Already have an account? <a href="/login">Sign in</a></p>
            </form>
        </div>
    );
}

export default RegisterComponent;
