import React from 'react'
import PassportNav from '../../components/PassportNav/PassportNav';

const Passport = (props) => {
    props.funNav(false);

    return (
        <div>
            <PassportNav />
        </div>
    )
}

export default Passport;
