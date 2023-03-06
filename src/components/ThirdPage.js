import {Container} from "react-bootstrap";
import React, { useState } from 'react';
import './ThirdPageStyles.css';
import Slider from './slider';
import 'bootstrap/dist/css/bootstrap.min.css';

const ThirdPage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Container fluid className="third-container">
            <div className="header-container">
                <h1 className="header-text">OUR COMMUNITY.</h1>
            </div>
            <div className="slider-container">
                <Slider />
            </div>
        </Container>
    );
};

export default ThirdPage;