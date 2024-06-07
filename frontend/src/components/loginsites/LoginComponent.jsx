import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/LoginComponent.css';

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:8080/api/auth/authenticate', {
                email,
                password
            });
            const token = response.data.token;
            localStorage.setItem('jwtToken', token); // Save the token to localStorage
            console.log(token);
            navigate('/home'); // Redirect to home page after successful login
        } catch (err) {
            setError('Authentication failed');
            console.error(err);
        }
    };

    return (
        <div className="login-content">
            <img src="./public/hkoliba_logo3.svg" alt="Logo" className="login-logo"/>
            <h1>LOGIN</h1>
            <p>Please enter your email and password.</p>
            <form onSubmit={handleLogin}>
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
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-button">Login</button>
                <p>Dont have an account? <a href="/register">Sign up</a></p>
            </form>
        </div>
    );
}

export default LoginComponent;
