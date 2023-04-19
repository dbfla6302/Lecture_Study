import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aboutpage = () => {
    const navigate = useNavigate();
    const gotoHomepage = () => {
        navigate("/")
    }
    return (
        <div>
            <h1>About page!</h1>
            <button onClick={gotoHomepage}>Go to Homepage</button>
        </div>
    );
};

export default Aboutpage;