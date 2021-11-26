import React from 'react';
import { Row } from 'react-bootstrap';
import mechanic1 from '../../../images/mechanic/1.jpg';
import mechanic2 from '../../../images/mechanic/2.jpg';
import mechanic3 from '../../../images/mechanic/3.jpg';
import mechanic4 from '../../../images/mechanic/4.jpg';
import mechanic5 from '../../../images/mechanic/5.jpg';
import mechanic6 from '../../../images/mechanic/6.jpg';
import mechanic7 from '../../../images/mechanic/7.jpg';
import mechanic8 from '../../../images/mechanic/8.jpg';
import mechanic9 from '../../../images/mechanic/9.jpg';

import Expert from '../Expert/Expert';
const experts = [
    {
        img: mechanic1,
        name: 'Mr.X0X0',
        expertize:'-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'Mr.Y0X0',
        expertize:'-Engine Expert-'
    },
    {
        img: mechanic3,
        name: 'Mr.Z0X0',
        expertize:'-Hydrolic Expert-'
    },
    {
        img: mechanic4,
        name: 'Mr.S0S0',
        expertize:'-Break Expert-'
    },
    {
        img: mechanic5,
        name: 'Mr.K0K0',
        expertize:'-Design Expert-'
    },
    {
        img: mechanic6,
        name: 'Mr.Y0Y0',
        expertize:'-Oil Expert-'
    },
    {
        img: mechanic7,
        name: 'Mr.M0M0',
        expertize:'-Color Expert-'
    },
    {
        img: mechanic8,
        name: 'Mr.L0L0',
        expertize:'-Polish Expert-'
    },
    {
        img: mechanic9,
        name: 'Mr.H0H0',
        expertize:'-Car Wash Expert-'
    },

]
const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary my-3">Our Experts</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    experts.map(expert => <Expert
                    key={expert.name}
                    expert={expert}
                    ></Expert>)
                }
            </Row>
        </div>
    );
};

export default Experts;