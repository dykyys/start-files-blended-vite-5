import { Header } from 'components';
import Home from 'pages/Home';
import Rates from 'pages/Rates';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getUserInfo } from './service';

export const App = () => {
  useEffect(() => {
    

    function success(pos) {
      const crd = pos.coords;
getUserInfo(pos.coords)
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, [])
  


  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="rates" element={<Rates />} />
      </Route>
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
};
