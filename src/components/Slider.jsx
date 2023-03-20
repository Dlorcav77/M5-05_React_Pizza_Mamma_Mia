import { Carousel } from "react-bootstrap";

export default function Slider() {
    return (
    <Carousel>
        <Carousel.Item>
        <div className="overlay"></div>
        <img
            className="d-block w-100 img_slider"
            src="/img/slider_1.jpg"
            alt="primera foto pizza"
        />
        <Carousel.Caption>
            <h3>Pizzaria Mamma Mia!</h3>
            <p>Tenemos las mejores pizzas que podras encontrar! </p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="overlay"></div>
        <img
            className="d-block w-100 img_slider"
            src="/img/slider_2.jpg"
            alt="Second slide"
        />
        <Carousel.Caption>
            <h3>Directo a tu Casa</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="overlay"></div>
        <img
            className="d-block w-100 img_slider"
            src="/img/slider_3.jpg"
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3>Con los mejores ingredientes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
};
