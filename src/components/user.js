import React from 'react';
import '../styling/user.css';
import Sidebar from './sidebar';
import Container from './userContainer';
import Footer from './footer';

export default function User({ spotify }) {
    return (
        <div className="user">
            <div className="user-container">
                <Sidebar />
                <Container spotify={spotify} />
            </div>

            <Footer/>
        </div>
    );
}