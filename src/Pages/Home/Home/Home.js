import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation'
import AppointBanner from '../AppointBanner/AppointBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppointBanner></AppointBanner>
        </div>
    );
};

export default Home;