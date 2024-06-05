import AnimationText from '../components/AnimationText.jsx';
import Meta from '../components/Meta.jsx';
import { BirdBackgroundSlider, CatBackgroundSlider, DogBackgroundSlider } from '../components/BackgroundSliders.jsx';

const HomePage = () => {
  return (
    <>
      <Meta title='Home - PET EXPO' />
      <div className="flex flex-col sm:flex-row h-screen ml-12 sm:ml-14">
        <div className="relative sm:h-full border-b-4 sm:border-r-4">
          <BirdBackgroundSlider />
          <div className='absolute inset-0 bg-primary-deep opacity-20'></div>
        </div>
        <div className="relative sm:h-full border-b-4 sm:border-r-4">
          <DogBackgroundSlider />
          <div className='absolute inset-0 bg-primary-deep opacity-20'></div>
        </div>
        <div className="relative sm:h-full">
          <CatBackgroundSlider />
          <div className='absolute inset-0 bg-primary-deep opacity-20'></div>
        </div>
        <main className="fixed top-0 left-0 flex flex-col justify-between items-center h-full w-full ml-6">
          <h1 className="text-4xl sm:text-6xl font-bold text-center font-poppins text-white bg-primary-deep/80 hover:bg-primary-deep transition mt-8 sm:mt-12 py-4 px-6 ">PET EXPO</h1>
          <AnimationText />
        </main>
      </div>

    </>
  );
};

export default HomePage;
