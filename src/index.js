import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import PrivateRoutes from './components/PrivateRoutes';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import BirdsPage from './pages/BirdsPage';
import DogsPage from './pages/DogsPage';
import CatsPage from './pages/CatsPage';
import LoginPage from './pages/admin/LoginPage';
import Dashboard from './pages/admin/Dashboard';
import BirdsAdmin from './pages/admin/petPages/BirdsAdmin';
import DogsAdmin from './pages/admin/petPages/DogsAdmin';
import CatsAdmin from './pages/admin/petPages/CatsAdmin';
import BirdEditPage from './pages/admin/petEditPage/BirdEditPage';
import DogEditPage from './pages/admin/petEditPage/DogEditPage';
import CatEditPage from './pages/admin/petEditPage/CatEditPage';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/gallery/birds' element={<BirdsPage />} />
      <Route path='/gallery/dogs' element={<DogsPage />} />
      <Route path='/gallery/cats' element={<CatsPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='' element={<PrivateRoutes />} >
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/birds' element={<BirdsAdmin />} />
        <Route path='/dashboard/dogs' element={<DogsAdmin />} />
        <Route path='/dashboard/cats' element={<CatsAdmin />} />
        <Route path='/dashboard/birds/:id/edit' element={<BirdEditPage />} />
        <Route path='/dashboard/dogs/:id/edit' element={<DogEditPage />} />
        <Route path='/dashboard/cats/:id/edit' element={<CatEditPage />} />
      </Route>
    </Route>
  ),
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={routes} />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
