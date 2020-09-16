import React from 'react';
import Navigation from '../Navigation/Navigation';
import Section from '../Section/Section';
import './Home.css';

const Home = () => {
    return (
        <div className='home' >
         <div className='darken-background'>
         <div className='main-container'>
           <Navigation></Navigation>
           <Section></Section>
            <h1>this is homepage.</h1>
            </div>
         </div>
        </div>
    );
};

export default Home;