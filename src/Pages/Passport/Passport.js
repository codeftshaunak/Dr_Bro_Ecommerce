import React from 'react'
import PassportNav from '../../components/PassportNav/PassportNav';
import PassportHero from '../../components/PassportComp/PassportHero';
import Footer from '../../components/Footer/Footer';

const Passport = (props) => {
    props.funNav(false);

    return (
        <div>
            <PassportNav />
            <PassportHero />
            <Footer />
        </div>
    )
}

export default Passport;
