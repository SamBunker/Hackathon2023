import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './SecondPageStyles.css';
import BoxBackgroundOne from './assets/Icons/Box-Background 1.png';
import BoxBackgroundTwo from './assets/Icons/Box-Background 2.png';
import BoxBackgroundThree from './assets/Icons/Box-Background 3.png';
import RedSmile from './assets/Icons/Red-Smile.png';
import GraySmile from './assets/Icons/Gray-Smile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faPuzzlePiece, faMapSigns } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/Logo.svg';

const SecondPage = () => {
    return (
        <Container fluid className="second-container">
            <div className="header-container">
                <h1 className="header-text">WE LOVE HUNTINGDON, PA.
                    WE LOVE YOU.</h1>
            </div>
            <div className="things-we-do">
                <div className="my-box" style={{marginLeft: '30px', marginRight: '30px'}}>
                    <FontAwesomeIcon icon={faPizzaSlice} size="3x" />
                    <span>We provide a <br />daily meal.</span>
                    <img className="Red-Smile" src={RedSmile} alt="A Red Smiling Circle Person."/>
                    <img className="background-block" src={BoxBackgroundOne} alt="Box Background" />
                </div>
                <div className="my-box" style={{marginLeft: '30px', marginRight: '30px'}}>
                    <FontAwesomeIcon icon={faPuzzlePiece} size="3x" />
                    <span>There are many <br />activities to do.</span>
                    {/*<img className="icons" src={Cards} alt="Deck of Cards with Ace of Spades on the front."/>*/}
                    <img className="background-block" src={BoxBackgroundTwo} alt="Box Background" />
                </div>
                <div className="my-box" style={{marginLeft: '30px', marginRight: '30px'}}>
                    <FontAwesomeIcon icon={faMapSigns} size="3x" />
                    <span>We travel <br />together.</span>
                    <img className="background-block" src={BoxBackgroundThree} alt="Box Background" />
                </div>
            </div>
            <div className="JoinTheFamilyButton">
                <a href="#">
                    <Button><img src={logo} alt="Huntingdon County Drop-In Center Logo"/>Join our Family</Button>
                </a>
            </div>
            <div className="Gray-Smile">
                <img src={GraySmile} alt="Gray Smile Triangle Person at the bottom right of the screen." />
            </div>
        </Container>
    );
};

export default SecondPage;