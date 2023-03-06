import Carousel from 'react-bootstrap/Carousel';
import ImageOne from './assets/Community/community1.jpg';
import ImageTwo from './assets/Community/community3.jpg';
import ImageThree from './assets/Community/community8.jpg';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ImageOne}
                    alt="First Slide"
                />
                {/*<Carousel.Caption>*/}
                {/*    <h3>First Slide Label</h3>*/}
                {/*    <p>Sample Text</p>*/}
                {/*</Carousel.Caption>*/}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ImageTwo}
                    alt="Second Item"
                />
                {/*<Carousel.Caption>*/}
                {/*    <h3>Second Slide Label</h3>*/}
                {/*    <p>Sample Text</p>*/}
                {/*</Carousel.Caption>*/}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ImageThree}
                    alt="First Slide"
                />
                {/*<Carousel.Caption>*/}
                {/*    <h3>Third Slide Label</h3>*/}
                {/*    <p>Sample Text</p>*/}
                {/*</Carousel.Caption>*/}
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;