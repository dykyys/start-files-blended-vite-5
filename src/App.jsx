import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home.jsx';
import Rates from 'pages/Rates.jsx';
import { Header } from 'components/Header/Header.jsx';
import { useEffect } from 'react';
import { getUserInfo } from 'service/opencagedataApi.js';

export const App = () => {
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    async function success(pos) {
      var crd = pos.coords;

      console.log('Ваше текущее местоположение:');
      console.log(`Широта: ${crd.latitude}`);
      console.log(`Долгота: ${crd.longitude}`);
      console.log(`Плюс-минус ${crd.accuracy} метров.`);

      console.log(await getUserInfo(crd).re);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/rates" element={<Rates />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
