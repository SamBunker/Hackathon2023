import "./HeroStyles.css";
import {Component} from "react";
import logo from './assets/Mascots.png';
// import wave from './assets/wave.svg';
import {Container, Button} from "react-bootstrap";

class Hero extends Component {
    render() {
        return (
            <Container fluid className="my-container">
                <img src={logo} alt="Example Image" className="my-image" />
                <div className="my-text-container">
                    <h1 className="my-subtitle">Welcome to the</h1>
                    <h2 className="my-title">Huntingdon County <br/>Drop-In Center.</h2>
                    <div className="SeeOurFamilyButton">
                        <a href="#">
                            <Button variant="primary">See our Family</Button>
                        </a>
                    </div>
                </div>
                <svg class="svg-container top-half" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F7A655" fill-opacity="1" d="M0,160L120,170.7C240,181,480,203,720,218.7C960,235,1200,245,1320,250.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            </Container>
        );
    }
}

export default Hero;