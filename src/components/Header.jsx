import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import logo from '../assets/images/logo-expo.svg'

const navItems = {
  home: '/',
  photo_library: '/gallery',
  info: '/about',
  mail: '/contact',
};

const adminItems = {
  dashboard: 'dashboard',
  logout: 'logout'
}

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
      <aside className="fixed top-0 left-0 bottom-0 flex flex-col justify-between w-14 bg-primary-deep">
        <div>
          <Link to='/'>
            <div className="grid place-items-center">
              <img src={logo} className="w-12 h-12 mx-1 my-4" alt="logo" />
            </div>
          </Link>
        </div>
        <nav>
          {Object.entries(navItems).map(([key, value]) => (
            <a key={key} href={value} className="grid place-items-center w-14 h-14">
              <span className="material-symbols-outlined text-white hover:text-primary-deep p-2 hover:bg-white hover:rounded-full transition-transform">{key}</span>
            </a>
          ))}
        </nav>
        {isAuth && (
          <nav>
            {Object.entries(adminItems).map(([key, value]) => (
              value === 'logout' ? (
                <button key={key} onClick={handleLogout} className="grid place-items-center w-14 h-14">
                  <span className="material-symbols-outlined text-white hover:text-primary-deep p-2 hover:bg-white hover:rounded-full transition-transform">{key}</span>
                </button>
              ) : (
                <a key={key} href={value} className="grid place-items-center w-14 h-14">
                  <span className="material-symbols-outlined text-white hover:text-primary-deep p-2 hover:bg-white hover:rounded-full transition-transform">{key}</span>
                </a>
              )
            ))}
          </nav>
        )}
      </aside>
    </>
  );
};

export default Header;
