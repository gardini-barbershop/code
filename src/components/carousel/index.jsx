import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide><img alt="Imagem de fundo" src="./swiper-1.jpeg"></img></SwiperSlide>
      <SwiperSlide><img alt="Imagem de fundo" src="./swiper-2.jpeg"></img></SwiperSlide>
      <SwiperSlide><img alt="Imagem de fundo" src="./swiper-3.jpeg"></img></SwiperSlide>
    </Swiper>
    )
};

export default Carousel;