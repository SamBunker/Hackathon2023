import {Button, Container} from "react-bootstrap";
import './WhatWeLoveStyles.css';
import ImageOne from './assets/Building/building3.jpg';
import ImageTwo from './assets/Community/community6.jpg';
import ImageThree from './assets/Food/food5.jpg';
import ImageFour from './assets/Community/community2.jpg';
import ImageFive from './assets/Community/community4.jpg';
import ImageSix from './assets/Food/food2.jpg';
import OrangeSmile from './assets/Icons/Orange Smile.png';
import facebook from "./assets/facebook.png";
import React from "react";

const WhatWeLove = () => {
    return (
        <Container fluid className="content-container" style={{background: '#f7a655', paddingBottom: '100px'}}>
            <div className="header-container">
                <h1 className="header-text">WHAT WE LOVE.</h1>
            </div>
            <div className="things-we-do">
                <div className="my-box" style={{marginLeft: '10px', marginRight: '10px', background: 'red', borderTopLeftRadius: '30px'}}>
                    <img src={ImageOne} alt="The front-face building of the Huntingdon County Drop-In Center." style={{borderTopLeftRadius: '30px'}} />
                </div>
                <div className="my-box" style={{marginLeft: '10px', marginRight: '10px', background: 'red'}}>
                    <img src={ImageTwo} alt="The Community holding balloons for a trip they traveled to." />
                </div>
                <div className="my-box" style={{marginLeft: '10px', marginRight: '10px', background: 'red', borderTopRightRadius: '30px'}}>
                    <img src={ImageThree} alt="Food on a table outside of the Drop-In center." style={{borderTopRightRadius: '30px'}} />
                </div>
            </div>
            <div className="things-we-do">
                <div className="my-box" style={{marginLeft: '10px', marginRight: '10px', background: 'red', borderBottomLeftRadius: '30px'}}>
                    <img src={ImageFour} alt="The Drop-In dining at the Muddy Run Tavern in Downtown Huntingdon." style={{borderBottomLeftRadius: '30px'}} />
                </div>
                <div className="my-box" style={{marginLeft: '10px', marginRight: '10px', background: 'red'}}>
                    <img src={ImageFive} alt="The Drop-In at Walmart collecting money for the Salvation Army." />
                </div>
                <div className="my-box" style={{marginLeft: '10px', marginRight: '10px', background: 'red', borderBottomRightRadius: '30px'}}>
                    <img src={ImageSix} alt="Delicious homemade pizza from the Drop-In." style={{borderBottomRightRadius: '30px'}} />
                </div>
            </div>
            <div className="Orange-Smile">
                <img src={OrangeSmile} alt="Orange Smile man at the bottom right of the screen." />
            </div>
            <div className="JoinTheFamilyButton">
                <a href="#">
                    <Button><img src={facebook} alt="Facebook Logo"/>More Images</Button>
                </a>
            </div>
        </Container>
    );
};

export default WhatWeLove;
