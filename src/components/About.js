import React from 'react';
import {Container} from "react-bootstrap";
import './AboutStyles.css';
import Red from './assets/Icons/Red-Smile.png';
import logo from './assets/Logo.svg';

const About = () => {
    return (
        <Container fluid className="about-container">
            <div className="header-container">
                <h1 className="header-text"><img src={logo} alt="Huntingdon County Drop-In Ceter Logo" />WHO ARE WE?</h1>
            </div>
            <div className="about-text">
                <p><span>We're a welcoming Drop-In</span> for individuals with mild mental health issues. Our <u>clubhouse</u> atmosphere offers social interaction, TV viewing areas, and card games. <img src={Red} alt="A red smile person."/>We organize outings to exciting places like Gettysburg and offer free daily meals. <i>Though we don't provide mental health services</i>, we have partnerships with other providers for emergency interventions. Come join our warm and supportive community.</p>
            </div>
        </Container>
    );
};

export default About;