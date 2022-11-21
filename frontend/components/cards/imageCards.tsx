// Import Swiper React components
import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

const ImageCards = () => {
  const images = [
    'https://imgur.com/XJbwMFI.jpg',
    'https://imgur.com/FNTRZxi.jpg',
    'https://imgur.com/K0gAfSh.jpg',
    'https://imgur.com/Zxzidsu.jpg',
    'https://imgur.com/wldOdf8.jpg',
    'https://imgur.com/voHVGC1.jpg',
    'https://imgur.com/sOF4XHb.jpg',
    'https://imgur.com/2hHrJMN.jpg',
    'https://imgur.com/V0QKJDU.jpg',
    'https://imgur.com/RV0PNfs.jpg',
    'https://imgur.com/ga8NMR9.jpg',
    'https://imgur.com/LTtiWZS.jpg',
    'https://imgur.com/P5Gyluh.jpg',
    'https://imgur.com/3b1lhu2.jpg',
    'https://imgur.com/8mqJCn0.jpg',
    'https://imgur.com/XJbwMFI.jpg',
    'https://imgur.com/FNTRZxi.jpg',
    'https://imgur.com/K0gAfSh.jpg',
    'https://imgur.com/Zxzidsu.jpg',
    'https://imgur.com/wldOdf8.jpg',
    'https://imgur.com/voHVGC1.jpg',
    'https://imgur.com/sOF4XHb.jpg',
    'https://imgur.com/2hHrJMN.jpg',
    'https://imgur.com/V0QKJDU.jpg',
    'https://imgur.com/RV0PNfs.jpg',
    'https://imgur.com/ga8NMR9.jpg',
    'https://imgur.com/LTtiWZS.jpg',
    'https://imgur.com/P5Gyluh.jpg',
    'https://imgur.com/3b1lhu2.jpg',
    'https://imgur.com/8mqJCn0.jpg',
    'https://imgur.com/XJbwMFI.jpg',
    'https://imgur.com/FNTRZxi.jpg',
    'https://imgur.com/K0gAfSh.jpg',
    'https://imgur.com/Zxzidsu.jpg',
    'https://imgur.com/wldOdf8.jpg',
    'https://imgur.com/voHVGC1.jpg',
    'https://imgur.com/sOF4XHb.jpg',
    'https://imgur.com/2hHrJMN.jpg',
    'https://imgur.com/V0QKJDU.jpg',
    'https://imgur.com/RV0PNfs.jpg',
    'https://imgur.com/ga8NMR9.jpg',
    'https://imgur.com/LTtiWZS.jpg',
    'https://imgur.com/P5Gyluh.jpg',
    'https://imgur.com/3b1lhu2.jpg',
    'https://imgur.com/8mqJCn0.jpg',
    'https://imgur.com/XJbwMFI.jpg',
    'https://imgur.com/FNTRZxi.jpg',
    'https://imgur.com/K0gAfSh.jpg',
    'https://imgur.com/Zxzidsu.jpg',
    'https://imgur.com/wldOdf8.jpg',
    'https://imgur.com/voHVGC1.jpg',
    'https://imgur.com/sOF4XHb.jpg',
    'https://imgur.com/2hHrJMN.jpg',
    'https://imgur.com/V0QKJDU.jpg',
    'https://imgur.com/RV0PNfs.jpg',
    'https://imgur.com/ga8NMR9.jpg',
    'https://imgur.com/LTtiWZS.jpg',
    'https://imgur.com/P5Gyluh.jpg',
    'https://imgur.com/3b1lhu2.jpg',
    'https://imgur.com/8mqJCn0.jpg',
  ];
  return (
    <div className='m-10 p-10'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className='h-64 w-96'>
        {images.map((img) => (
          <SwiperSlide className='' key={img}>
            <img
              className='object-cover h-96'
              src={img}
              title={img}
              alt='Illustration of Open-source Software'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCards;
