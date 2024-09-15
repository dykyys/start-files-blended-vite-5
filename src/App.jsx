import Home from 'pages/Home';
import Rates from 'pages/Rates';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBaseCurrency } from 'reduxState/operations';
import { setBaseCurrency } from 'reduxState/slice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = async pos => {
      const crd = pos.coords;

      dispatch(getBaseCurrency(crd));
    };

    function error(err) {
      dispatch(setBaseCurrency('USD'));
      
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Header>
  );
};
