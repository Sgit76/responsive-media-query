import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound/404.jpg';
const NotFound = () => {
    return (
        <div>
            <img style={{width: '100%' , height: '100%'}} src={notfound} alt="NOTFOUND-404"/>
            <Link to="/"><button className="btn btn-outline-warning">Go Back</button></Link>
        </div>
    );
};

export default NotFound;