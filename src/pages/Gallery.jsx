import { Link } from 'react-router-dom'
import birdImg from '../assets/images/birds/1.jpg'
import catImg from '../assets/images/cats/1.jpg'
import dogImg from '../assets/images/dogs/2.jpg'


const Gallery = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-50">
      <div className="absolute right-0 top-0 mt-10">
        <h1 className="mr-24 font-poppins font-bold text-4xl text-white bg-primary-deep py-2 px-4 rounded-lg">Pick a pet gallery</h1>
        <div className="title-circle"></div>
        <div className="title-line"></div>
      </div>
      <div className="flex flex-1 justify-center items-center w-full">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link to="/gallery/birds">
            <div className="relative w-96 h-full rounded-xl overflow-hidden group border-2 border-gray-200  duration-300 hover:drop-shadow-2xl hover:border-0">
              <img
                src={birdImg}
                alt="Birds"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out flex items-center justify-center flex-col">
                <span className="opacity-0 mb-2 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 30 30">
                    <path className='fill-white' d="M 19.78125 3.0039062 C 16.53025 3.1189063 14 5.8905312 14 9.1445312 L 14 11 C 14 12.828 12.991937 13.752266 11.710938 14.197266 C 10.323937 14.680266 8.7436094 15.151187 8.4746094 15.242188 C 7.7236094 15.494188 7.8609688 16.113859 8.0429688 16.380859 C 9.1239687 17.961859 10.94 19 13 19 C 14.014 19 14.859453 18.815578 15.564453 18.517578 C 16.336453 18.191578 16.914187 19.244141 16.242188 19.744141 C 15.237188 20.489141 13.868 21 12 21 C 9.622 21 7.5238125 19.812 6.2578125 18 L 4.2714844 18 C 3.5954844 18 3.1618437 18.546938 3.5898438 19.335938 C 4.5578388 21.115997 6.8840054 24.123284 11.769531 24.841797 C 11.411786 25.14062 11.189453 25.414063 11.189453 25.414062 A 1.0001549 1.0001549 0 1 0 12.810547 26.585938 C 12.810547 26.585937 13.246466 26 14 26 C 14.376767 26 15.056925 26.195127 15.587891 26.419922 C 16.118857 26.644717 16.498047 26.865234 16.498047 26.865234 A 1.0002933 1.0002933 0 1 0 17.501953 25.134766 C 17.501953 25.134766 17.136469 24.93781 16.662109 24.71875 C 24.182971 23.047054 25.755449 14.372336 25.953125 10.039062 L 27.648438 9.40625 C 28.079437 9.24625 28.125609 8.6546875 27.724609 8.4296875 L 25.757812 7.3300781 C 25.014298 4.7643166 22.609843 2.9036544 19.78125 3.0039062 z M 23 7 C 23.6 7 24 7.4 24 8 C 24 8.6 23.6 9 23 9 C 22.4 9 22 8.6 22 8 C 22 7.4 22.4 7 23 7 z"></path>
                  </svg>
                </span>
                <span className="text-white font-poppins text-xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out mt-2">
                  View the gallery
                </span>
              </div>
            </div>
            <button className='bg-primary-deep text-white font-poppins text-2xl font-semibold text-center rounded-lg py-3 mt-2 w-full hover:bg-primary-dark'>
              Birds
            </button>
          </Link>
          <Link to="/gallery/dogs">
            <div className="relative w-96 h-full rounded-xl overflow-hidden group border-2 border-gray-200  duration-300 hover:drop-shadow-2xl hover:border-0">
              <img
                src={dogImg}
                alt="Dogs"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out flex items-center justify-center flex-col">
                <span className="opacity-0 mb-2 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 24 24">
                    <path className='fill-white' d="M19.708,7.719C20.729,7.165,22,6.476,22,4.588c0-1.812-1.403-2.51-1.462-2.539C20.47,2.017,20.396,2,20.32,2h-2.059	C17.5,1.328,16.595,1,15.5,1C12.712,1,11,3.039,11,4.5v0.925c0,1.549-1.128,2.189-2.968,3.105C5.79,9.646,3,11.035,3,15.5v0.452	c0,1.243,0.469,2.368,1.216,3.248c-0.879,0.792-1.46,0.804-3.554,0.8H0.5C0.224,20,0,20.224,0,20.5S0.224,21,0.5,21h0.162	c0.05,0,0.1,0,0.148,0c2.115,0,2.955-0.038,4.123-1.106C5.794,20.576,6.867,21,8.048,21h5.783C14.476,21,15,20.476,15,19.832V19.5	c0-0.02-0.068-2-2.5-2c-0.276,0-0.5-0.224-0.5-0.5c0-1.475-0.578-2.5-1.717-3.049c-0.249-0.12-0.354-0.419-0.234-0.667	c0.121-0.249,0.419-0.353,0.667-0.234c1.342,0.647,2.135,1.87,2.264,3.474C15.17,16.738,16,18.416,16,19.5v0.332	c0,0.431-0.13,0.831-0.347,1.168H20.5c0.276,0,0.5-0.224,0.5-0.5v-0.943c0-1.76-1.341-2.251-2.229-2.576	C18.446,16.861,18,16.698,18,16.574V9.842C18,8.703,18.649,8.293,19.708,7.719z M11.5,9C11.224,9,11,8.776,11,8.5S11.224,8,11.5,8	C13.533,8,14,7.533,14,5.5C14,5.224,14.224,5,14.5,5S15,5.224,15,5.5C15,8.084,14.084,9,11.5,9z"></path>
                  </svg>
                </span>
                <span className="text-white font-poppins text-xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out mt-2">
                  View the gallery
                </span>
              </div>
            </div>
            <button className='bg-primary-deep text-white font-poppins text-2xl font-semibold text-center rounded-lg py-3 mt-2 w-full hover:bg-primary-dark'>
              Dogs
            </button>
          </Link>
          <Link to="/gallery/cats">
            <div className="relative w-96 h-full rounded-xl overflow-hidden group border-2 border-gray-200  duration-300 hover:drop-shadow-2xl hover:border-0">
              <img
                src={catImg}
                alt="Cats"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out flex items-center justify-center flex-col">
                <span className="opacity-0 mb-2 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 50 50">
                    <path className='fill-white' d="M 39.009766 3 C 37.099766 3.011 35.747422 5.3946094 35.232422 6.4746094 C 35.072422 6.7856094 35 7 35 7 C 34.847 7.076 34.703359 7.1684844 34.568359 7.2714844 C 32.077359 8.8154844 30.455 11.429 28 15 C 25.937 18 21.234 18.625 17 21 C 12.766 23.375 8 27.5 8 35 L 8 39 C 8 40.668484 6.6684839 42 5 42 C 3.3315161 42 2 40.668484 2 39 C 2 34.685185 3.1844374 31.901077 4.3320312 30.179688 C 5.4796251 28.458297 6.5136719 27.857422 6.5136719 27.857422 A 1.0001 1.0001 0 0 0 6.0273438 25.992188 A 1.0001 1.0001 0 0 0 5.4863281 26.142578 C 5.4863281 26.142578 4.0203748 27.041704 2.6679688 29.070312 C 1.3155626 31.098923 -5.9211895e-16 34.314815 0 39 C 0 41.749516 2.2504839 44 5 44 C 6.3082421 44 7.495051 43.480714 8.3886719 42.650391 C 9.0171506 44.030141 10.386487 45 12 45 L 27 45 C 27.552 45 28 44.552 28 44 C 28 41 26 40 24 40 L 23 40 C 24.67 40 27.726406 38.6015 28.691406 35.8125 L 26.099609 30.435547 C 25.859609 29.937547 26.068406 29.338609 26.566406 29.099609 C 27.060406 28.861609 27.660391 29.068406 27.900391 29.566406 L 31.09375 36.1875 C 32.55175 39.1475 34.141656 42.246828 34.847656 43.173828 C 35.672656 44.256828 36.82 45 38.125 45 L 40.998047 45 C 41.563047 45 41.993 44.54 42 44 C 42.001 43.928 41.994469 43.85425 41.980469 43.78125 C 41.713469 42.44025 40.955 41.230844 39.125 40.714844 L 36.173828 31.248047 C 38.734828 28.738047 40 26.036 40 23 C 40 20.607 39.318 18.798 39 18 L 40 18 C 45.031 18 45.786703 14.978188 45.970703 14.242188 C 46.088703 13.771187 45.85025 13.282937 45.40625 13.085938 C 45.39925 13.082937 44.653031 12.717844 44.332031 11.839844 C 43.353031 8.5588437 41.565 6.7365938 40 6.1835938 L 40 4 C 40 3.456 39.553766 2.997 39.009766 3 z M 40.617188 11.001953 C 40.924813 11.001953 41.307734 11.077766 41.615234 11.384766 C 42.230234 11.999766 41.923828 12.923828 41.923828 12.923828 C 41.923828 12.923828 40.999766 13.229234 40.384766 12.615234 C 39.769766 12.000234 40.078125 11.078125 40.078125 11.078125 C 40.078125 11.078125 40.309562 11.001953 40.617188 11.001953 z M 45 21 C 43.676 21 42.750266 21.391172 41.947266 21.826172 C 41.978266 22.204172 42 22.592 42 23 C 42 24.804 41.599984 26.530828 40.833984 28.173828 C 43.488984 27.003828 45 25 45 25 L 47.996094 25 C 48.566094 25 49.002 24.534 49 24 C 49 23.906 48.985078 23.810844 48.955078 23.714844 C 48.599078 22.544844 47.485 21 45 21 z"></path>
                  </svg>
                </span>
                <span className="text-white font-poppins text-xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out mt-2">
                  View the gallery
                </span>
              </div>
            </div>
            <button className='bg-primary-deep text-white font-poppins text-2xl font-semibold text-center rounded-lg py-3 mt-2 w-full hover:bg-primary-dark'>
              Cats
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Gallery
