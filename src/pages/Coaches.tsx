import React from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

import Hero from '../components/coaches/Hero.tsx';

import "../styles/main.scss";
const Coaches: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />


            </main>
            <Footer />
        </div>
    );
}


export default Coaches;