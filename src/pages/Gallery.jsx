import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import birdImg from '../assets/images/birds/1.jpg'
import catImg from '../assets/images/cats/1.jpg'
import dogImg from '../assets/images/dogs/2.jpg'


const Gallery = () => {
  return (
    <>
      <Meta title='Gallery - PET EXPO' />
      <div className="flex justify-center items-center bg-gray-100 min-h-screen py-10 sm:mt-[-30px] ml-12 sm:ml-14">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-center text-white bg-primary-deep px-2 py-1 mx-auto rounded-md w-fit mb-8">PET GALLERY</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <Link to="/gallery/birds">
              <div className="relative overflow-hidden group rounded-xl">
                <img
                  src={birdImg}
                  alt="Birds"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 shadow-lg hover:shadow-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col transition-opacity duration-300">
                  <span className="text-white font-poppins text-xl sm:text-2xl font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 30 30">
                      <path className='fill-white' d="M 19.78125 3.0039062 C 16.53025 3.1189063 14 5.8905312 14 9.1445312 L 14 11 C 14 12.828 12.991937 13.752266 11.710938 14.197266 C 10.323937 14.680266 8.7436094 15.151187 8.4746094 15.242188 C 7.7236094 15.494188 7.8609688 16.113859 8.0429688 16.380859 C 9.1239687 17.961859 10.94 19 13 19 C 14.014 19 14.859453 18.815578 15.564453 18.517578 C 16.336453 18.191578 16.914187 19.244141 16.242188 19.744141 C 15.237188 20.489141 13.868 21 12 21 C 9.622 21 7.5238125 19.812 6.2578125 18 L 4.2714844 18 C 3.5954844 18 3.1618437 18.546938 3.5898438 19.335938 C 4.5578388 21.115997 6.8840054 24.123284 11.769531 24.841797 C 11.411786 25.14062 11.189453 25.414063 11.189453 25.414062 A 1.0001549 1.0001549 0 1 0 12.810547 26.585938 C 12.810547 26.585937 13.246466 26 14 26 C 14.376767 26 15.056925 26.195127 15.587891 26.419922 C 16.118857 26.644717 16.498047 26.865234 16.498047 26.865234 A 1.0002933 1.0002933 0 1 0 17.501953 25.134766 C 17.501953 25.134766 17.136469 24.93781 16.662109 24.71875 C 24.182971 23.047054 25.755449 14.372336 25.953125 10.039062 L 27.648438 9.40625 C 28.079437 9.24625 28.125609 8.6546875 27.724609 8.4296875 L 25.757812 7.3300781 C 25.014298 4.7643166 22.609843 2.9036544 19.78125 3.0039062 z M 23 7 C 23.6 7 24 7.4 24 8 C 24 8.6 23.6 9 23 9 C 22.4 9 22 8.6 22 8 C 22 7.4 22.4 7 23 7 z"></path>
                    </svg>
                  </span>
                  <span className="text-white font-poppins text-xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out mt-2">
                    View the gallery
                  </span>
                </div>
              </div>
              <button className="bg-primary-deep text-white font-poppins text-xl sm:text-2xl font-semibold text-center rounded-lg py-3 mt-2 w-full hover:bg-primary-dark">
                Birds
              </button>
            </Link>
            <Link to="/gallery/dogs">
              <div className="relative overflow-hidden group rounded-xl">
                <img
                  src={dogImg}
                  alt="Dogs"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 shadow-lg hover:shadow-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col transition-opacity duration-300">
                  <span className="text-white font-poppins text-xl sm:text-2xl font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 30 30">
                      <path className='fill-white' d="M 19.78125 3.0039062 C 16.53025 3.1189063 14 5.8905312 14 9.1445312 L 14 11 C 14 12.828 12.991937 13.752266 11.710938 14.197266 C 10.323937 14.680266 8.7436094 15.151187 8.4746094 15.242188 C 7.7236094 15.494188 7.8609688 16.113859 8.0429688 16.380859 C 9.1239687 17.961859 10.94 19 13 19 C 14.014 19 14.859453 18.815578 15.564453 18.517578 C 16.336453 18.191578 16.914187 19.244141 16.242188 19.744141 C 15.237188 20.489141 13.868 21 12 21 C 9.622 21 7.5238125 19.812 6.2578125 18 L 4.2714844 18 C 3.5954844 18 3.1618437 18.546938 3.5898438 19.335938 C 4.5578388 21.115997 6.8840054 24.123284 11.769531 24.841797 C 11.411786 25.14062 11.189453 25.414063 11.189453 25.414062 A 1.0001549 1.0001549 0 1 0 12.810547 26.585938 C 12.810547 26.585937 13.246466 26 14 26 C 14.376767 26 15.056925 26.195127 15.587891 26.419922 C 16.118857 26.644717 16.498047 26.865234 16.498047 26.865234 A 1.0002933 1.0002933 0 1 0 17.501953 25.134766 C 17.501953 25.134766 17.136469 24.93781 16.662109 24.71875 C 24.182971 23.047054 25.755449 14.372336 25.953125 10.039062 L 27.648438 9.40625 C 28.079437 9.24625 28.125609 8.6546875 27.724609 8.4296875 L 25.757812 7.3300781 C 25.014298 4.7643166 22.609843 2.9036544 19.78125 3.0039062 z M 23 7 C 23.6 7 24 7.4 24 8 C 24 8.6 23.6 9 23 9 C 22.4 9 22 8.6 22 8 C 22 7.4 22.4 7 23 7 z"></path>
                    </svg>
                  </span>
                  <span className="text-white font-poppins text-xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out mt-2">
                    View the gallery
                  </span>
                </div>
              </div>
              <button className="bg-primary-deep text-white font-poppins text-xl sm:text-2xl font-semibold text-center rounded-lg py-3 mt-2 w-full hover:bg-primary-dark">
                Dogs
              </button>
            </Link>
            <Link to="/gallery/cats" className='mb-8 sm:mb-0'>
              <div className="relative overflow-hidden group rounded-xl">
                <img
                  src={catImg}
                  alt="Cats"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 shadow-lg hover:shadow-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col transition-opacity duration-300">
                  <span className="text-white font-poppins text-xl sm:text-2xl font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 30 30">
                      <path className='fill-white' d="M 19.78125 3.0039062 C 16.53025 3.1189063 14 5.8905312 14 9.1445312 L 14 11 C 14 12.828 12.991937 13.752266 11.710938 14.197266 C 10.323937 14.680266 8.7436094 15.151187 8.4746094 15.242188 C 7.7236094 15.494188 7.8609688 16.113859 8.0429688 16.380859 C 9.1239687 17.961859 10.94 19 13 19 C 14.014 19 14.859453 18.815578 15.564453 18.517578 C 16.336453 18.191578 16.914187 19.244141 16.242188 19.744141 C 15.237188 20.489141 13.868 21 12 21 C 9.622 21 7.5238125 19.812 6.2578125 18 L 4.2714844 18 C 3.5954844 18 3.1618437 18.546938 3.5898438 19.335938 C 4.5578388 21.115997 6.8840054 24.123284 11.769531 24.841797 C 11.411786 25.14062 11.189453 25.414063 11.189453 25.414062 A 1.0001549 1.0001549 0 1 0 12.810547 26.585938 C 12.810547 26.585937 13.246466 26 14 26 C 14.376767 26 15.056925 26.195127 15.587891 26.419922 C 16.118857 26.644717 16.498047 26.865234 16.498047 26.865234 A 1.0002933 1.0002933 0 1 0 17.501953 25.134766 C 17.501953 25.134766 17.136469 24.93781 16.662109 24.71875 C 24.182971 23.047054 25.755449 14.372336 25.953125 10.039062 L 27.648438 9.40625 C 28.079437 9.24625 28.125609 8.6546875 27.724609 8.4296875 L 25.757812 7.3300781 C 25.014298 4.7643166 22.609843 2.9036544 19.78125 3.0039062 z M 23 7 C 23.6 7 24 7.4 24 8 C 24 8.6 23.6 9 23 9 C 22.4 9 22 8.6 22 8 C 22 7.4 22.4 7 23 7 z"></path>
                    </svg>
                  </span>
                  <span className="text-white font-poppins text-xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out mt-2">
                    View the gallery
                  </span>
                </div>
              </div>
              <button className="bg-primary-deep text-white font-poppins text-xl sm:text-2xl font-semibold text-center rounded-lg py-3 mt-2 w-full hover:bg-primary-dark">
                Cats
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
