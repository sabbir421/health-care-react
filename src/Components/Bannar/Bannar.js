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
      <h3>SAS Hospitol ltd.</h3>
      <p>SAS Hospital is a Privet organization in Bangladesh</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
         
        </div>
    );
};

export default Bannar;