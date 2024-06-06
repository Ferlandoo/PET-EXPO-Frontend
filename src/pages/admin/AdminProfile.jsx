import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get('http://localhost:5018/api/user/profile', { withCredentials: true });
        setUsername(result.data.username);
        setEmail(result.data.email);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
      } else {
        const user = { username, email, password };
        await axios.put('http://localhost:5018/api/user/profile', user, {
          withCredentials: true
        });
        toast.success('Profile updated successfully');
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error('Failed to update profile');
    }
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen py-10 ml-12 sm:ml-14">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary-deep mb-8">Update Profile</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-4" >
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:border-primary-deep"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary-deep w-full text-white font-bold py-3 px-6 rounded-md hover:bg-primary-dark transition-colors"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
