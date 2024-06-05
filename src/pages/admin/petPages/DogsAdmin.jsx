import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';
import Lottie from 'react-lottie';
import animatedDog from '../../../assets/images/dogs/animatedDog.json';
import { toast } from 'react-toastify';

const DogsAdmin = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const petPerPage = 15;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5018/api/dogs');
        setData(response.data);
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
    };

    fetchData();
  }, []);

  const filteredDogs = data.filter(dog =>
    dog.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const indexOfLastItem = currentPage * petPerPage;
  const indexOfFirstItem = indexOfLastItem - petPerPage;
  const currentPets = filteredDogs.slice(indexOfFirstItem, indexOfLastItem);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedDog,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const deleteDog = async (id) => {
    try {
      await axios.delete(`http://localhost:5018/api/dogs/${id}`, { withCredentials: true });
      const response = await axios.get('http://localhost:5018/api/dogs', { withCredentials: true });
      setData(response.data);
      toast.success('Dog deleted successfully');
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  }

  return (
    <div className="ml-12 sm:ml-14 p-2">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center">
          <Link to="/dashboard/dogs">
            <h1 className="text-4xl font-bold font-poppins text-primary-deep mr-4 text-right">Dogs</h1>
          </Link>
          <div className="m-0">
            <Lottie options={defaultOptions} height={70} width={70} />
          </div>
        </div>
        <div className="flex w-full sm:w-2/6 py-2 sm:mt-0">
          <input
            type="text"
            placeholder="Search dogs..."
            className="w-full p-3 rounded-l-md border-2 border-primary-deep placeholder-gray-300"
            value={searchName}
            onChange={handleSearchChange}
          />
          <button
            className="inline-flex items-center gap-2 bg-primary-deep text-white text-lg font-semibold py-3 px-6 rounded-r-md">
            <span className="block">
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
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-primary-deep text-white">Name</th>
            <th className="px-4 py-2 bg-primary-deep text-white">Species</th>
            <th className="px-4 py-2 bg-primary-deep text-white">Place of found</th>
            <th className="bg-blue-500 hover:bg-blue-700 p-0">
              <Link to="create" className="flex items-center justify-center h-full w-full text-white p-2">
                <span>Add dog</span>
                <FaPlus className='ml-2 bg-white text-blue-500 rounded-full p-1 hidden sm:block' />
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPets.map((pet, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2 bg-primary-light text-center border-white">{pet.name}</td>
              <td className="border px-4 py-2 bg-primary-light text-center border-white">{pet.breed_group}</td>
              <td className="border px-4 py-2 bg-primary-light text-center border-white">{pet.colors.join(', ')}</td>
              <td className="border px-4 py-2 bg-white text-center">
                <Link to={`${pet._id}/edit`}>
                  <button className="text-white bg-blue-500 hover:bg-blue-700 p-1 rounded mr-0 sm:mr-2">
                    <FaEdit />
                  </button>
                </Link>
                <button onClick={() => deleteDog(pet._id)} className="text-white bg-red-500 hover:bg-red-700 p-1 rounded">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(filteredDogs.length / petPerPage)).keys()].map(number => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={`h-8 w-8 ${currentPage === number + 1 ? 'bg-primary-deep text-white' : 'text-primary-deep'} rounded-full mx-1`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div >
  );
};

export default DogsAdmin;
