import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function AboutPage() {
    return (
        <div className="page-wrapper">
            <Header />
            <h1>A little about me</h1>
            {/* <InformationCard /> */}
            <Footer />
        </div>
    );
}

export default AboutPage;