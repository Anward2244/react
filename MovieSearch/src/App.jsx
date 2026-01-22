import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Watchlist from "./pages/Watchlist";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { WatchlistProvider } from "./context/WatchlistContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <WatchlistProvider>
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/watchlist" element={<Watchlist />} />
              </Routes>
            </div>
          </BrowserRouter>
        </WatchlistProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;