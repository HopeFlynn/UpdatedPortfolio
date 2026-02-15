import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ width: '100%', padding: '2rem', textAlign: 'center', background: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.6)' }}>
            <p>&copy; {new Date().getFullYear()} Hope Mwangi. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
