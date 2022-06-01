import React from "react"
import Slider from "react-slick";
import "../../assets/css/homepage/banner.css"

const Banner = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
      <div className="container__banner">
           <Slider {...settings} >
               <div className="container__banner__image">
                <img alt="" src="https://kreateworld.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskincare.ff43f68e.jpg&w=1200&q=75"/>
                </div>
                <div className="container__banner__image">
                    <img alt="" src="https://kreateworld.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood.f4219a64.jpg&w=1200&q=75" />
                </div>
                <div className="container__banner__image">
                    <img alt="" src="https://kreateworld.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsummer-sales.efe25dea.jpeg&w=1200&q=75" />
                </div>
                
           </Slider>
      </div>
  )
}

export default Banner