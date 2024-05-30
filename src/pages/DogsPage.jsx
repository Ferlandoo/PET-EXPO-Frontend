import { useEffect, useState } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import Lottie from 'react-lottie';
import animatedDog from '../assets/images/dogs/animatedDog.json';

const Modal = ({ show, onClose, dog }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg flex relative w-3/6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-primary-deep text-white font-bold px-3 py-1 rounded hover:bg-primary-dark transition-colors">
          X
        </button>
        <div className="mr-4 flex justify-center">
          <img src={dog.image} alt={dog.name} className="h-auto w-auto rounded mb-4 object-cover" />
        </div>
        <div className="w-4/6">
          <h2 className="inline-block text-2xl font-bold mb-4 bg-primary-deep text-white py-1 px-2 rounded">{dog.name}</h2>
          <p className="mb-4"><strong>Breed group:</strong> {dog.breed_group}</p>
          <p className="mb-4"><strong>Size:</strong> {dog.size}</p>
          <p className="mb-4"><strong>Lifespan:</strong> {dog.lifespan}</p>
          <p className="mb-4"><strong>Origin:</strong> {dog.origin}</p>
          <p className="mb-4"><strong>Temperament:</strong> {dog.temperament}</p>
          <p className="mb-4"><strong>Colors:</strong> {dog.colors.join(', ')}</p>
          <p className="mb-4"><strong>Description:</strong> {dog.description}</p>
        </div>
      </div>
    </div>
  );
};

const DogsPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDog, setSelectedDog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchName, setSearchName] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedDog,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5018/api/dogs');
        setImages(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (dog) => {
    setSelectedDog(dog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDog(null);
  };

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const filteredDogs = images.filter(dog =>
    dog.name.toLowerCase().includes(searchName.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Circles color="#dd6529" size={80} />
      </div>
    );
  }

  return (
    <div className="ml-14">
      <div className="flex items-center justify-between">
        <div className="flex items-center ml-2">
          <h1 className="text-4xl font-bold font-poppins my-6 text-primary-deep mr-4 text-right">Dogs</h1>
          <div className="m-0">
            <Lottie options={defaultOptions} height={80} width={80} />
          </div>
        </div>
        <div className="flex w-2/6 px-4">
          <input
            type="text"
            placeholder="Search dogs..."
            className="w-full p-3 rounded-l-md border-2 border-primary-deep placeholder-gray-300"
            value={searchName}
            onChange={handleSearchChange}
          />
          <button
            className="inline-flex items-center gap-2 bg-primary-deep text-white text-lg font-semibold py-3 px-6 rounded-r-md">
            <span className="hidden md:block">
              <svg className="text-white h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
                version="1.1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966"
                width="512px" height="512px">
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-2 mt-4 px-2 mb-12">
        {filteredDogs.map((dog) => (
          <div key={dog._id} className="relative overflow-hidden" onClick={() => handleImageClick(dog)}>
            <img src={dog.image} alt="dog" className="w-full h-full object-cover rounded transform transition duration-400 hover:scale-110" />
            <h3 className="absolute bottom-5 left-0 m-2 px-2 bg-white text-primary-deep rounded-md text-center text-lg font-semibold">{dog.name}</h3>
            <h6 className="absolute bottom-0 left-0 m-2 text-xs font-medium bg-white text-primary-deep rounded px-1">{dog.origin}</h6>
          </div>
        ))}
      </div>
      <Modal show={isModalOpen} onClose={closeModal} dog={selectedDog} />
    </div>
  );
};

export default DogsPage;