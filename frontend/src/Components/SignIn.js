// src/components/SignIn.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../Services/authService";
import { useAuth } from "../Context/authContext";
import "./Auth.css";


function SignIn() {
    const navigate = useNavigate();
    const { setToken } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await signin(form);

           /*
            const token = response.data.token || response.data.accessToken || response.data;
            localStorage.setItem("token", token);
            setToken(token);
            setSuccess("Login successful!");
            setTimeout(() => navigate("/dashboard"), 1500);
            */

            const token = response.data.jwt || response.data.token || response.data.accessToken;
            if (token) {
                localStorage.setItem("token", token); // ✅ store only the string
                setToken(token);
                console.log("Token string stored:", localStorage.getItem("token"));
                navigate("/dashboard");
            } else {
                console.error("Token missing in response:", response.data);
                setError("Login succeeded, but no token was returned.");
            }



        } catch (err) {
            console.error("Login failed:", err);

            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else if (err.message) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred");
            }
        }
    };


    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
                <p>
                    Don't have an account?{" "}
                    <span className="link" onClick={() => navigate("/signup")}>
                        Sign Up
                    </span>
                </p>
            </form>
        </div>
    );
}

export default SignIn;
