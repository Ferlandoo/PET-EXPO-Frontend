import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/images/logo-expo.svg'
import { FaUser, FaHome, FaImages, FaInfoCircle, FaEnvelope, FaLayerGroup, FaSignOutAlt } from 'react-icons/fa'

const Header = () => {
  const isAuth = localStorage.getItem('isAuth');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5018/api/user/logout', { withCredentials: true });
      localStorage.removeItem('isAuth');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <aside className="fixed top-0 left-0 bottom-0 flex flex-col justify-between w-12 sm:w-14 bg-primary-deep z-10">
        <div>
          <Link to='/'>
            <div className="grid place-items-center">
              <img src={logo} className="w-10 h-10 sm:w-12 sm:h-12  mx-1 my-4" alt="logo" />
            </div>
          </Link>
        </div>
        <nav>
          <Link to='/' className="grid place-items-center w-12 h-12 sm:w-14 sm:h-14">
            <FaHome className="w-8 h-8 text-white hover:text-primary-deep p-1 hover:bg-white hover:rounded-full transition-transform" />
          </Link>
          <Link to='/gallery' className="grid place-items-center w-12 h-12 sm:w-14 sm:h-14">
            <FaImages className="w-8 h-8 text-white hover:text-primary-deep p-1 hover:bg-white hover:rounded-full transition-transform" />
          </Link>
          <Link to='/about' className="grid place-items-center w-12 h-12 sm:w-14 sm:h-14">
            <FaInfoCircle className="w-8 h-8 text-white hover:text-primary-deep p-1 hover:bg-white hover:rounded-full transition-transform" />
          </Link>
          <Link to='/contact' className="grid place-items-center w-12 h-12 sm:w-14 sm:h-14">
            <FaEnvelope className="w-8 h-8 text-white hover:text-primary-deep p-1 hover:bg-white hover:rounded-full transition-transform" />
          </Link>
        </nav>
        {isAuth && (
          <nav>
            <Link to='/settings' className="grid place-items-center w-12 h-12 sm:w-14 sm:h-14">
              <FaUser className="w-8 h-8 text-white hover:text-primary-deep p-1 hover:bg-white hover:rounded-full transition-transform" />
            </Link>
            <Link to='/dashboard' className="grid place-items-center w-12 h-12 sm:w-14 sm:h-14">
              <FaLayerGroup className="w-8 h-8 text-white hover:text-primary-deep p-1 hover:bg-white hover:rounded-full transition-transform" />
            </Link>
            <Link to='/' onClick={handleLogout} className="grid place-items-center mb-10 w-12 h-12 sm:w-14 sm:h-14">
              <FaSignOutAlt className="w-8 h-8 text-white hover:text-primary-deep p-1 hover:bg-white hover:rounded-full transition-transform" />
            </Link>
          </nav>
        )}
        {!isAuth && (
          <nav>
            <Link to='/login' className="grid place-items-center w-12 h-12 mb-10 sm:w-14 sm:h-14">
              <FaUser className="w-8 h-8 text-white hover:text-primary-deep p-1 hover:bg-white hover:rounded-full transition-transform" />
            </Link>
          </nav>
        )}
      </aside>
    </>
  );
};

export default Header;
