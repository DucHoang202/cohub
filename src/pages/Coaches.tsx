import React from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import Explore from '../components/features/Explore.tsx';
import { Advantages, Coach, Diagram, FeatureHero, Ponder, Usage, Customers } from '../components/features/feature.ts';
import NewYorkSwiper from '../components/features/NewYorkSwiper.tsx';
import Question from '../components/features/Question.tsx';
import FindMore from '../components/features/FindMore.tsx';
import Sponsor from '../components/features/Sponsor.tsx';
const Coaches: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <FeatureHero />
                <Explore />
                <Ponder />
                <Diagram />
                <Coach />
                <Advantages />
                <Usage />
                <Sponsor />
                <div className="background--black">

                    <Customers />
                    <NewYorkSwiper />
                    <Question />
                    <FindMore />
                </div>

            </main>
            <Footer />
        </div>
    );
}


export default Coaches;