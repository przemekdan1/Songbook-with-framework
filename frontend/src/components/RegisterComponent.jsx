import React from 'react';
import '../styles/LoginComponent.css';

function RegisterComponent() {
    return (
        <div className="login-content">
            <img src="./public/hkoliba_logo3.svg" alt="Logo" className="login-logo" />
            <h1>REGISTER</h1>
            <p>Hello there! Please enter your details.</p>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <div className="form-group">
                    <label>Repeat password</label>
                    <input type="password" placeholder="Repeat your password" />
                </div>
                <button type="submit" className="login-button">Sign up</button>
            </form>
        </div>
    );
}

export default RegisterComponent;
