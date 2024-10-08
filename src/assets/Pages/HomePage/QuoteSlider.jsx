import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    { img: 'carouImg1.png' },
    { img: 'carouImg2.png' },
    { img: 'carouImg3.png' },
    { img: 'carouImg4.png' },
    { img: 'carouImg5.png' },
];

export default function QuoteSlider() {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <div className=" mx-5 mb-5 py-20 drop-shadow-2xl transition duration-300">
            <Slider {...settings}>
                {data.map((d) => (
                    <img src={d.img} className="rounded-xl"></img>
                ))}
            </Slider>
        </div>
    )
}