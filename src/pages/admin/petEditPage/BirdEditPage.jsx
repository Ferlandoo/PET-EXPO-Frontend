import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Meta from "../../../components/Meta";
import { toast } from "react-toastify";

const BirdEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [family, setFamily] = useState('');
  const [habitat, setHabitat] = useState('');
  const [place_of_found, setPlaceOfFound] = useState('');
  const [diet, setDiet] = useState('');
  const [description, setDescription] = useState('');
  const [weight_kg, setWeightKg] = useState(0);
  const [height_cm, setHeightCm] = useState(0);
  const [wingspan_cm, setWingspanCm] = useState(0);
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5018/api/birds/${id}`, { withCredentials: true });
        setName(response.data.name);
        setSpecies(response.data.species);
        setFamily(response.data.family);
        setHabitat(response.data.habitat);
        setPlaceOfFound(response.data.place_of_found);
        setDiet(response.data.diet);
        setDescription(response.data.description);
        setWeightKg(response.data.weight_kg);
        setHeightCm(response.data.height_cm);
        setWingspanCm(response.data.wingspan_cm);
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
      await axios.put(`http://localhost:5018/api/birds/${id}`, {
        name,
        species,
        family,
        habitat,
        place_of_found,
        diet,
        description,
        weight_kg,
        height_cm,
        wingspan_cm,
        image
      }, { withCredentials: true });
      navigate(`/dashboard/birds/${id}/edit`);
      toast.success('Bird updated successfully');
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
        <div className="container mx-auto px-2 mb-8">
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
                <label className="block text-gray-700 text-sm font-bold mb-2">Species</label>
                <input
                  type="text"
                  placeholder="Enter species"
                  value={species}
                  onChange={(e) => setSpecies(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Family</label>
                <input
                  type="text"
                  placeholder="Enter family"
                  value={family}
                  onChange={(e) => setFamily(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Habitat</label>
                <input
                  type="text"
                  placeholder="Enter habitat"
                  value={habitat}
                  onChange={(e) => setHabitat(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Place of Found</label>
                <input
                  type="text"
                  placeholder="Enter place of found"
                  value={place_of_found}
                  onChange={(e) => setPlaceOfFound(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Diet</label>
                <input
                  type="text"
                  placeholder="Enter diet"
                  value={diet}
                  onChange={(e) => setDiet(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Weight (kg)</label>
                <input
                  type="text"
                  placeholder="Enter weight (kg)"
                  value={weight_kg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                  required
                />
              </div>
              {height_cm != null && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Height (cm)</label>
                  <input
                    type="text"
                    placeholder="Enter height (cm)"
                    value={height_cm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                    required
                  />
                </div>
              )}
              {wingspan_cm != null && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Wingspan (cm)</label>
                  <input
                    type="text"
                    placeholder="Enter wingspan (cm)"
                    value={wingspan_cm}
                    onChange={(e) => setWingspanCm(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                    required
                  />
                </div>
              )}
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
                <Link to="/dashboard/birds" className="bg-gray-500 w-full text-white font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition-colors mt-2 inline-block">
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

export default BirdEditPage
