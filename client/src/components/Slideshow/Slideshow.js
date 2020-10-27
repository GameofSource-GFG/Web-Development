import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            
            <Carousel infiniteLoop width="100%" useKeyboardArrows autoPlay>
                <div>
                    
                    <img src="https://images.pexels.com/photos/5255412/pexels-photo-5255412.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=640&w=426" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/4857726/pexels-photo-4857726.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/5324749/pexels-photo-5324749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/5463564/pexels-photo-5463564.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3746279/pexels-photo-3746279.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/5022494/pexels-photo-5022494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </div>
            </Carousel>
        </div>
    );
}