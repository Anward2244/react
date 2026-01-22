import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    
    if (users.find(u => u.email === email)) {
      setError("User already exists!");
      return;
    }

    const newUser = { email, password };
    localStorage.setItem("registeredUsers", JSON.stringify([...users, newUser]));
    login(newUser);
    navigate("/");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const validUser = users.find(u => u.email === email && u.password === password);

    if (validUser) {
      login(validUser);
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={isRegister ? handleRegister : handleLogin}>
        <h2>{isRegister ? "Register" : "Login"}</h2>
        {error && <p style={{color: '#ef4444', marginBottom: '1rem'}}>{error}</p>}
        
        <input 
          type="email" placeholder="Email" value={email} 
          onChange={(e) => setEmail(e.target.value)} required 
        />
        <input 
          type="password" placeholder="Password" value={password} 
          onChange={(e) => setPassword(e.target.value)} required 
        />
        
        <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '1rem'}}>
          {isRegister ? "Sign Up" : "Sign In"}
        </button>
        
        <p style={{marginTop: '1rem', cursor: 'pointer', color: 'var(--accent)'}} onClick={() => {
            setIsRegister(!isRegister); setError("");
        }}>
          {isRegister ? "Already have an account? Login" : "New here? Register"}
        </p>
      </form>
    </div>
  );
};

export default Login;