import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Meta from "../../../components/Meta";
import { toast } from "react-toastify";

const DogEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [breed_group, setBreedGroup] = useState('');
  const [size, setSize] = useState('');
  const [lifespan, setLifeSpan] = useState('');
  const [origin, setOrigin] = useState('');
  const [temperament, setTemperament] = useState('');
  const [colors, setColors] = useState([]);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5018/api/dogs/${id}`, { withCredentials: true });
        setName(response.data.name);
        setBreedGroup(response.data.breed_group);
        setSize(response.data.size);
        setLifeSpan(response.data.lifespan);
        setOrigin(response.data.origin);
        setTemperament(response.data.temperament);
        setColors(response.data.colors);
        setDescription(response.data.description);
        setImage(response.data.image);
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
    };

    fetchData();
  }, [id]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5018/api/dogs/${id}`, {
        name,
        breed_group,
        size,
        lifespan,
        origin,
        temperament,
        colors,
        description,
        image
      }, { withCredentials: true });
      navigate(`/dashboard/dogs/${id}/edit`);
      toast.success('Dog updated successfully');
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  }

  const createUploadHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5018/api/uploads', formData, { withCredentials: true });
      setImage(response.data.image);
      toast.success('Image uploaded successfully');
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  }

  return (
    <>
      <Meta title={`${name} - PET EXPO`} />
      <div className="flex justify-center items-center bg-gray-100 min-h-screen ml-12 sm:ml-14 py-10">
        <div className="container mx-auto px-4 mb-8">
          <h1 className="text-4xl font-bold text-center text-primary-deep mb-8">Edit {name}</h1>
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg max-w-xl mx-auto">
            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Breed group</label>
                <input
                  type="text"
                  placeholder="Enter breed group"
                  value={breed_group}
                  onChange={(e) => setBreedGroup(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Size</label>
                <input
                  type="text"
                  placeholder="Enter size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Lifespan</label>
                <input
                  type="text"
                  placeholder="Enter lifespan"
                  value={lifespan}
                  onChange={(e) => setLifeSpan(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Origin</label>
                <input
                  type="text"
                  placeholder="Enter origin"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Temperament</label>
                <input
                  type="text"
                  placeholder="Enter temperament"
                  value={temperament}
                  onChange={(e) => setTemperament(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Colors</label>
                <input
                  type="text"
                  placeholder="Enter colors"
                  value={colors}
                  onChange={(e) => setColors(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  required
                ></input>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  row="5"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  disabled
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep bg-gray-200"
                />
                <input
                  type="file"
                  placeholder="Upload image"
                  onChange={createUploadHandler}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep mt-2"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="bg-primary-deep w-full text-white font-bold py-3 px-6 rounded-md hover:bg-primary-dark transition-colors">
                  Update
                </button>
                <Link to="/dashboard/dogs" className="bg-gray-500 w-full text-white font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition-colors mt-2 inline-block">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default DogEditPage
