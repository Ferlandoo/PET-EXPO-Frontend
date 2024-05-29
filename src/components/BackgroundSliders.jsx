import { Carousel } from 'react-responsive-carousel';
import firstBird from '../assets/images/birds/1.jpg';
import secondBird from '../assets/images/birds/2.jpg';
import thirdBird from '../assets/images/birds/3.jpg';
import firstDog from '../assets/images/dogs/1.jpg';
import secondDog from '../assets/images/dogs/2.jpg';
import thirdDog from '../assets/images/dogs/3.jpg';
import firstCat from '../assets/images/cats/1.jpg';
import secondCat from '../assets/images/cats/2.jpg';
import thirdCat from '../assets/images/cats/3.jpg';

export const BirdBackgroundSlider = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      renderIndicator={false}
      transitionTime={1000}
      controlDots={false}>
      <div className='w-full h-screen'>
        <img src={firstBird} alt="first bird" className='w-full h-full object-cover' />
      </div>
      <div className='w-full h-screen'>
        <img src={secondBird} alt="second bird" className='w-full h-full object-cover' />
      </div>
      <div className='w-full h-screen'>
        <img src={thirdBird} alt="third bird" className='w-full h-full object-cover' />
      </div>
    </Carousel>
  );
};

export const DogBackgroundSlider = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      renderIndicator={false}
      interval={4000}
      transitionTime={1000}
    >
      <div className='w-full h-screen'>
        <img src={firstDog} alt="first dog" className='w-full h-full object-cover' />
      </div>
      <div className='w-full h-screen'>
        <img src={secondDog} alt="second dog" className='w-full h-full object-cover' />
      </div>
      <div className='w-full h-screen'>
        <img src={thirdDog} alt="third dog" className='w-full h-full object-cover' />
      </div>
    </Carousel>
  );
}

export const CatBackgroundSlider = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      renderIndicator={false}
      interval={5000}
      transitionTime={1000}>
      <div className='w-full h-screen'>
        <img src={firstCat} alt="first cat" className='w-full h-full object-cover' />
      </div>
      <div className='w-full h-screen'>
        <img src={secondCat} alt="second cat" className='w-full h-full object-cover' />
      </div>
      <div className='w-full h-screen'>
        <img src={thirdCat} alt="third cat" className='w-full h-full object-cover' />
      </div>
    </Carousel>
  );
}
