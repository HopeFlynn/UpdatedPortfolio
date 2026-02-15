import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();

    // Helper to check if link is active
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="navbar-container" style={{
            position: 'fixed',
            top: '20px',
            left: 0,
            width: '100%',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 2rem',
            pointerEvents: 'none',
            boxSizing: 'border-box'
        }}>
            {/* Centered Navigation Pill */}
            <div className="nav-links-container" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '0.5rem 1rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.8rem',
                pointerEvents: 'auto'
            }}>
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
                <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link>
                <Link to="/certificates" className={`nav-link ${isActive('/certificates') ? 'active' : ''}`}>Certificates</Link>
                <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>Gallery</Link>
            </div>


        </nav>
    );
};

export default Navbar;
