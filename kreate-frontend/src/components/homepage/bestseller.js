import React from "react"
import Slider from "react-slick";
import "../../assets/css/homepage/bestseller.css"

const BestSeller = () => {

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

  return (
      <div className="container__bestseller">
        <div className="container__bestseller__header">
            <div className="container__bestseller__header__title">
               <h2>Best Sellers</h2>
            </div>
            <div className="container__bestseller__header__viewall">
                 <h3>View more</h3> 
            </div>
        </div>
           <Slider {...settings} >
               <div className="container__bestseller__card">
                <img alt="" className="container__bestseller__card__image" src="https://kreate.sgp1.cdn.digitaloceanspaces.com/images/original/17b11e21-fa5f-46b7-9e41-f5506f98eb92.webp"/>
                  <h6 className="container__bestseller__card__productname">Mamra Almonds (1Kg)</h6>
                  <p className="container__bestseller__card__brand">by KashmirBowl™ Store</p>
                  <p className="container__bestseller__card__price">₹1000</p>
                </div>
                <div className="container__bestseller__card">
                <img alt="" className="container__bestseller__card__image" src="https://kreate.sgp1.cdn.digitaloceanspaces.com/images/original/b2baa263-28d8-4173-a96e-f3959774fb00.webp"/>
                  <h6 className="container__bestseller__card__productname">Mango Zing Fruit Bar</h6>
                  <p className="container__bestseller__card__brand">by Smartika Home Essentials</p>
                  <p className="container__bestseller__card__price">₹100</p>
                </div>
                <div  className="container__bestseller__card">
                <img alt="" className="container__bestseller__card__image" src="https://kreateworld.in/_next/image?url=https%3A%2F%2Fkreate.sgp1.cdn.digitaloceanspaces.com%2Fimages%2Fh512%2Fb028a3ac-fe0c-4d33-ace2-cc7f52c408e5.webp&w=3840&q=75"/>
                  <h6 className="container__bestseller__card__productname">Mamra Almonds (1Kg)</h6>
                  <p className="container__bestseller__card__brand">by KashmirBowl™ Store</p>
                  <p className="container__bestseller__card__price">₹1000</p>
                </div>
                <div  className="container__bestseller__card">
                <img alt="" className="container__bestseller__card__image" src="https://kreateworld.in/_next/image?url=https%3A%2F%2Fkreate.sgp1.cdn.digitaloceanspaces.com%2Fimages%2Fh512%2Fb028a3ac-fe0c-4d33-ace2-cc7f52c408e5.webp&w=3840&q=75"/>
                  <h6 className="container__bestseller__card__productname">Mamra Almonds (1Kg)</h6>
                  <p className="container__bestseller__card__brand">by KashmirBowl™ Store</p>
                  <p className="container__bestseller__card__price">₹1000</p>
                </div>
                <div className="container__bestseller__card">
                <img alt="" className="container__bestseller__card__image" src="https://kreateworld.in/_next/image?url=https%3A%2F%2Fkreate.sgp1.cdn.digitaloceanspaces.com%2Fimages%2Fh512%2Fb028a3ac-fe0c-4d33-ace2-cc7f52c408e5.webp&w=3840&q=75"/>
                  <h6 className="container__bestseller__card__productname">Mamra Almonds (1Kg)</h6>
                  <p className="container__bestseller__card__brand">by KashmirBowl™ Store</p>
                  <p className="container__bestseller__card__price">₹1000</p>
                </div>
                <div className="container__bestseller__card">
                <img alt="" className="container__bestseller__card__image" src="https://kreateworld.in/_next/image?url=https%3A%2F%2Fkreate.sgp1.cdn.digitaloceanspaces.com%2Fimages%2Fh512%2F9dd2201d-12d0-4cca-8a6d-896334aead3f.webp&w=3840&q=75"/>
                  <h6 className="container__bestseller__card__productname">Spotify Keychain</h6>
                  <p className="container__bestseller__card__brand">by Vintage Shabby</p>
                  <p className="container__bestseller__card__price">₹200</p>
                </div>
                <div className="container__bestseller__card">
                <img alt="" className="container__bestseller__card__image" src="https://kreate.sgp1.cdn.digitaloceanspaces.com/images/original/c62941e5-a789-4fa0-9e1f-47a7e3a65c27.webp"/>
                  <h6 className="container__bestseller__card__productname">Mamra Almonds (1Kg)</h6>
                  <p className="container__bestseller__card__brand">by KashmirBowl™ Store</p>
                  <p className="container__bestseller__card__price">₹1000</p>
                </div>
                <div className="container__bestseller__card">
                <img alt="" className="container__bestseller__card__image" src="https://kreate.sgp1.cdn.digitaloceanspaces.com/images/original/c62941e5-a789-4fa0-9e1f-47a7e3a65c27.webp"/>
                  <h6 className="container__bestseller__card__productname">Mamra Almonds (1Kg)</h6>
                  <p className="container__bestseller__card__brand">by KashmirBowl™ Store</p>
                  <p className="container__bestseller__card__price">₹1000</p>
                </div>
                
           </Slider>
      </div>
  )
}

export default BestSeller