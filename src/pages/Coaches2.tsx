import React from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import Explore from '../components/features/Explore.tsx';
import { Advantages, Coach, Diagram, FeatureHero, Ponder, Usage, Customers } from '../components/features/feature.ts';
import Hero from '../components/coaches2/Hero.tsx';
import NewYorkSwiper from '../components/features/NewYorkSwiper.tsx';
import Question from '../components/features/Question.tsx';
import FindMore from '../components/features/FindMore.tsx';
import Sponsor from '../components/features/Sponsor.tsx';
import "../styles/main.scss";
import Coaches from '../components/coaches2/Coaches.tsx';
import "../styles/reset.css";
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