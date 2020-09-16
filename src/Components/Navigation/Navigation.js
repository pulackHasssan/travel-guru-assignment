import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className='navigation'>
            <img src="https://i.ibb.co/SKnF2fm/Logo.png" alt="Logo"/>
            <input type="text" placeholder='Search your destination'/>
            <a href='/news'>News</a>
            <a href='/destination'>Destination</a>
            <a href='/blog'>Blog</a>
            <a href='/contact'>Contact</a>
            <a href="/login">Log in</a>
        </div>
    );
};

export default Navigation;