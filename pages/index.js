import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // You can keep or modify this for additional styles

const App = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f4' }}>
            <h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
            <h3>Using subject Header Only</h3>
            <a 
                className="email-link" 
                href="mailto:review-team@geeksforgeeks.org?subject=Hello GeeksforGeeks"
                style={{
                    color: '#3498db',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    border: '2px solid #3498db',
                    borderRadius: '5px',
                    display: 'inline-block',
                    marginTop: '20px',
                    transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#5bdb34';
                    e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#3498db';
                }}
            >
                Send Email with Subject
            </a>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

