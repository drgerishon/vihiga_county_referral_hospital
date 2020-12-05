import React from "react";
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import {Carousel}from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Corousel = () => {
    return (
       <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                    <img src={image3} alt='jj' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2}  alt='kk'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image1} alt='mmm'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
};

export default Corousel;