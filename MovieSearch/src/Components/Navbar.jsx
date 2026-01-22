import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/" className="logo"><img src="/logo.png" alt="" style={{width:'50px', transform:"translateY(18px)"}} />Movie Mania</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/watchlist">My Watchlist</Link>
            <button onClick={logout} className="btn-primary">Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <button onClick={toggleTheme} className="theme-toggle">
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;