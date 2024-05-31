import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5018/api/birds');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ml-16 p-6">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-primary-deep text-white font-bold">Name</th>
            <th className="px-4 py-2 bg-primary-deep text-white font-bold">Species</th>
            <th className="px-4 py-2 bg-primary-deep text-white">Place of found</th>
            <th className="px-4 py-2 bg-primary-deep text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2 bg-primary-light text-center border-white">{item.name}</td>
              <td className="border px-4 py-2 bg-primary-light text-center border-white">{item.species}</td>
              <td className="border px-4 py-2 bg-primary-light text-center border-white">{item.place_of_found}</td>
              <td className="border px-4 py-2 bg-white text-center">
                <button className="text-white bg-blue-500 p-1 rounded mr-2 ">
                  <FaEdit />
                </button>
                <button className="text-white bg-red-500 p-1 rounded">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
