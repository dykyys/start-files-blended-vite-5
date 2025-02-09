import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Rates from './pages/Rates';
import { useEffect } from 'react';
import { getUserInfo } from './service/opencagedataApi';

export const App = () => {
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    
    async function success(pos) {
      const crd = pos.coords;
      console.log('crd', crd)

      const data = await getUserInfo(crd)
      console.log(data.results[0].annotations.currency.iso_code)

    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    window.navigator.geolocation.getCurrentPosition(success, error, options);
    
  }, [])
  
  return (
    <Routes>
      <Route  path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
