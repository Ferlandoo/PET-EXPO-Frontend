import AnimationText from '../components/AnimationText.jsx';
import { BirdBackgroundSlider, CatBackgroundSlider, DogBackgroundSlider } from '../components/BackgroundSliders.jsx';

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 relative ml-14 border-r-4">
        <BirdBackgroundSlider />
        <div className='absolute inset-0 bg-primary-deep opacity-20'></div>
      </div>
      <div className="flex-1 relative">
        <DogBackgroundSlider />
        <div className='absolute inset-0 bg-primary-deep opacity-20'></div>
        <main className="absolute top-0 left-0 flex flex-col justify-between items-center h-full w-full">
          <h1 className="text-6xl font-bold font-poppins text-white bg-primary-deep/80 hover:bg-primary-deep transition mt-12 py-4 px-6 ">PET EXPO</h1>
          <AnimationText />
        </main>
      </div>
      <div className="flex-1 relative border-l-4">
        <CatBackgroundSlider />
        <div className='absolute inset-0 bg-primary-deep opacity-20'></div>
      </div>
    </div>
  );
};

export default HomePage;
