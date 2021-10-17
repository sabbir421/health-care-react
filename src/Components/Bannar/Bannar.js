import React from 'react';
import { Carousel } from 'react-bootstrap';
import Bannar1 from'../../../src/img/bannar-1.jpg'
import Bannar2 from'../../../src/img/bannar-2.jpg'
import Bannar3 from'../../../src/img/bannar-3.jpg'

const Bannar = () => {
    return (
        <div>
            <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Bannar1}
      alt="First slide"
      height='450px'
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Bannar2}
      alt="Second slide"
      height='450px'
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Bannar3}
      alt="Third slide"
      height='450px'
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          <h1 className='d-flex justify-content-center text-warning my-3'>Services</h1>
        </div>
    );
};

export default Bannar;