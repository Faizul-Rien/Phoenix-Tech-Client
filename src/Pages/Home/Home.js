import React from 'react';
import Footer from '../Shared/Footer';
import Articles from './Articles';
import Banner from './Banner';
import Feedback from './Feedback';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
            <Articles></Articles>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;