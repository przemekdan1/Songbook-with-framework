import React from 'react';
import '../styles/LoginComponent.css';
import '../styles/LoginPage.css';

function LoginComponent() {
    return (
        <div className="login-content">
            <img src="./public/hkoliba_logo3.svg" alt="Logo" className="login-logo" />
            <h1>SIGN IN</h1>
            <p>Welcome back! Please enter your details.</p>
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <div className="form-group">
                    <input type="checkbox" /> Remember me
                    <a href="/forgot-password" className="forgot-password">Forgot password?</a>
                </div>
                <button type="submit" className="login-button">Sign in</button>
            </form>
            <p>Dont have an account? <a href="/register">Sign up</a></p>
        </div>
    );
}

export default LoginComponent;
