import React from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

import Hero from '../components/coaches2/Hero.tsx';

import "../styles/reset.css";
import "../styles/main.scss";
import Coaches from '../components/coaches2/Coaches.tsx';
import "../components/coaches2/coaches2.scss";

const Coaches2: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <Coaches />
            </main>
            <Footer />
        </div>
    );
}


export default Coaches2;