import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen py-10 sm:mt-[-30px] ml-12 sm:ml-14">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-center text-primary-deep mb-8">DASHBOARD</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Link to="birds" className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:bg-primary-light transition-all">
            <div className="flex justify-center items-center flex-col my-2 sm:my-8 hover:text-primary-deep transition-all">
              <h2 className="text-2xl sm:text-3xl font-bold bg-primary-deep hover:bg-primary-dark text-white py-1 px-3 rounded-md mb-4 font-poppins">BIRDS</h2>
              <span className="block bg-primary-deep hover:bg-primary-dark p-4 rounded-full mx-auto mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 30 30">
                  <path className='fill-white' d="M 19.78125 3.0039062 C 16.53025 3.1189063 14 5.8905312 14 9.1445312 L 14 11 C 14 12.828 12.991937 13.752266 11.710938 14.197266 C 10.323937 14.680266 8.7436094 15.151187 8.4746094 15.242188 C 7.7236094 15.494188 7.8609688 16.113859 8.0429688 16.380859 C 9.1239687 17.961859 10.94 19 13 19 C 14.014 19 14.859453 18.815578 15.564453 18.517578 C 16.336453 18.191578 16.914187 19.244141 16.242188 19.744141 C 15.237188 20.489141 13.868 21 12 21 C 9.622 21 7.5238125 19.812 6.2578125 18 L 4.2714844 18 C 3.5954844 18 3.1618437 18.546938 3.5898438 19.335938 C 4.5578388 21.115997 6.8840054 24.123284 11.769531 24.841797 C 11.411786 25.14062 11.189453 25.414063 11.189453 25.414062 A 1.0001549 1.0001549 0 1 0 12.810547 26.585938 C 12.810547 26.585937 13.246466 26 14 26 C 14.376767 26 15.056925 26.195127 15.587891 26.419922 C 16.118857 26.644717 16.498047 26.865234 16.498047 26.865234 A 1.0002933 1.0002933 0 1 0 17.501953 25.134766 C 17.501953 25.134766 17.136469 24.93781 16.662109 24.71875 C 24.182971 23.047054 25.755449 14.372336 25.953125 10.039062 L 27.648438 9.40625 C 28.079437 9.24625 28.125609 8.6546875 27.724609 8.4296875 L 25.757812 7.3300781 C 25.014298 4.7643166 22.609843 2.9036544 19.78125 3.0039062 z M 23 7 C 23.6 7 24 7.4 24 8 C 24 8.6 23.6 9 23 9 C 22.4 9 22 8.6 22 8 C 22 7.4 22.4 7 23 7 z"></path>
                </svg>
              </span>
              <h4 className="text-lg sm:text-xl font-bold bg-primary-deep text-white px-3 py-1 hover:bg-primary-dark rounded mb-4">ADD, EDIT, DELETE</h4>
            </div>
          </Link>
          <Link to="dogs" className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:bg-primary-light transition-all">
            <div className="flex justify-center items-center flex-col my-2 sm:my-8 hover:text-primary-deep transition-all">
              <h2 className="text-2xl sm:text-3xl font-bold bg-primary-deep hover:bg-primary-dark text-white py-1 px-3 rounded-md mb-4 font-poppins">DOGS</h2>
              <span className="block bg-primary-deep hover:bg-primary-dark p-4 rounded-full mx-auto mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 64 64">
                  <path className="fill-white" d="M 43 6 C 40.601 8.421 41.863281 11.861328 41.863281 11.861328 L 38.884766 19.675781 L 48.783203 23.408203 L 48.785156 23.400391 L 55.078125 22.027344 C 56.998125 21.608344 58.544047 20.188547 59.123047 18.310547 L 59.923828 15.712891 C 60.125828 15.056891 59.731453 14.364078 59.064453 14.205078 L 54 13 L 52.943359 11.240234 C 52.660359 10.768234 52.195203 10.432453 51.658203 10.314453 L 46.621094 9.2109375 L 43 6 z M 8.5 15.5 C 8.5 15.5 7 17.451 7 20.5 C 7 25.493 12 31 12 31 L 8.0527344 51.175781 C 7.7657344 52.639781 8.8869063 54 10.378906 54 L 16 54 C 16 51.5 15 51 15 51 L 21 39.5 L 37 41.5 L 37.853516 52.158203 C 37.936516 53.198203 38.803703 54 39.845703 54 L 45 54 C 45 51.5 44 51 44 51 L 47.589844 28.263672 L 36.214844 22.392578 L 16.943359 26.626953 C 16.943359 26.626953 10.5 24.474 10.5 17.5 C 10.5 16.394 9.737 15.5 8.5 15.5 z M 22.130859 41.65625 L 17.359375 50.800781 C 17.720375 51.528781 18 52.557 18 54 L 24.5 54 C 24.5 51.5 23 51 23 51 L 22.150391 41.658203 L 22.130859 41.65625 z"></path>
                </svg>
              </span>
              <h4 className="text-lg sm:text-xl font-bold bg-primary-deep text-white px-3 py-1 hover:bg-primary-dark rounded mb-4">ADD, EDIT, DELETE</h4>
            </div>
          </Link>
          <Link to="cats" className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl mb-8 sm:mb-0 hover:bg-primary-light transition-all">
            <div className="flex justify-center items-center flex-col my-2 sm:my-8 hover:text-primary-deep transition-all">
              <h2 className="text-2xl sm:text-3xl font-bold bg-primary-deep hover:bg-primary-dark text-white py-1 px-3 rounded-md mb-4 font-poppins">CATS</h2>
              <span className="block bg-primary-deep hover:bg-primary-dark p-4 rounded-full mx-auto mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 64 64">
                  <path className="fill-white" d="M 6 1 C 6 11.838085 11.021934 18.482369 15.023438 22.072266 L 13.363281 52.892578 C 13.301281 54.037578 14.212375 55 15.359375 55 L 21 55 C 21 52.5 20 52 20 52 L 22.792969 34.859375 C 22.792969 34.859375 28.664984 39.941406 36.333984 39.941406 L 37.810547 46.371094 C 37.856547 46.571094 37.933109 46.764406 38.037109 46.941406 L 43 55 L 49 55 C 49 52.5 47 51.5 47 51.5 L 44.181641 45.226562 L 43.5 39.955078 C 47.504 37.843078 49.651156 34.582047 50.785156 31.998047 L 46.5 31.998047 C 45.278 31.998047 44.102 31.777578 43 31.392578 L 43 29.265625 C 44.068316 29.731863 45.250955 30 46.5 30 C 51.194 30 55 26.292 55 22 C 55 14 53 13 53 13 C 51 14 50 16 50 16 L 43 16 C 43 16 42 14 40 13 C 40 13 38 14 38 22 C 38 23.022756 38.22248 24.009667 38.615234 24.923828 C 31.737856 24.177583 29.517017 18 22 18 C 20.889006 18 19.902007 18.243146 19.044922 18.609375 C 15.268386 16.06324 9.799726 11.023947 9.078125 2.8261719 C 8.987125 1.7931719 8.1268437 1 7.0898438 1 L 6 1 z M 43 21 C 44.105 21 45 21.895 45 23 C 45 24.105 44.105 25 43 25 C 41.895 25 41 24.105 41 23 C 41 21.895 41.895 21 43 21 z M 50 21 C 51.105 21 52 21.895 52 23 C 52 24.105 51.105 25 50 25 C 48.895 25 48 24.105 48 23 C 48 21.895 48.895 21 50 21 z M 50.130859 36.955078 C 48.987859 38.414078 47.539297 39.831531 45.654297 41.019531 L 46.126953 44.675781 L 48.580078 50.138672 C 49.688078 50.962672 51 52.583 51 55 L 57 55 C 57 52.5 55 52 55 52 L 51.1875 44.732422 L 50.130859 36.955078 z M 24.255859 38.326172 L 22.126953 51.388672 C 22.593953 52.121672 23 53.259 23 55 L 29 55 C 29 52.5 28 52 28 52 L 27.921875 40.177734 C 26.497875 39.587734 25.251859 38.930172 24.255859 38.326172 z"></path>
                </svg>
              </span>
              <h4 className="text-lg sm:text-xl font-bold bg-primary-deep text-white px-3 py-1 hover:bg-primary-dark rounded mb-4">ADD, EDIT, DELETE</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
