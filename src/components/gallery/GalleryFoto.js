import Slider from 'react-slick';
import React from 'react';
import './GalleryFoto.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Lanfeng from '../../images/lanfeng1.jpg'
import Lanfeng4 from '../../images/lanfeng4.jpg'
import TekhnoProject from '../../images/tekhnoproject.jpg'
import PkElektroniks from '../../images/pk-elektroniks.jpg'
import Gilbarco from '../../images/gilbarco.webp'

function GalleryFoto ({ forwardedRef }){
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    speed:500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return(
    <Slider className='gallery' {...settings} ref={forwardedRef}>
          <div>
              <h3>Lanfeng1</h3>
              <img src={Lanfeng} alt="Lanfeng1" />
          </div>
          <div >
              <h3>Lanfeng4</h3>
              <img src={Lanfeng4} alt="Lanfeng4" />
          </div>
          <div >
              <h3>Технопроект</h3>
              <img src={TekhnoProject} alt="Технопроект" />
          </div>
          <div > 
              <h3>ПК-Электроникс</h3>
              <img src={PkElektroniks} alt="ПК-Электроникс" />
          </div>
          <div >
              <h3>Gilbarco</h3>
              <img src={Gilbarco} alt="Gilbarco" />
          </div>
  </Slider>
  )
}



export default React.forwardRef((props, ref) => <GalleryFoto {...props} forwardedRef={ref} />);