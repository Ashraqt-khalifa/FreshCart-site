import slide1 from "/src/assets/slider-image-1.jpeg";
import slide2 from "/src/assets/slider-image-2.jpeg";
import slide3 from "/src/assets/slider-image-3.jpeg";
import slide4 from "/src/assets/slider-2.jpeg";
import slide5 from "/src/assets/grocery-banner-2.jpeg";

import styles from "./mainSlider.module.css";
import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="row my-5">
        <div className="w-3/4">
          <Slider {...settings}>
            <img
              src={slide1}className="w-full h-[400px] object-cover"alt=""/>
            <img src={slide4} className="w-full h-[400px]" alt="" />
            <img src={slide5} className="w-full h-[400px]" alt="" />
          </Slider>
        </div>
        <div className="w-1/4">
          <img src={slide2} className="w-full h-[200px]" alt="" />
          <img src={slide3} className="w-full h-[200px]" alt="" />
        </div>
      </div>

      <Slider {...settings}></Slider>
    </>
  );
}
