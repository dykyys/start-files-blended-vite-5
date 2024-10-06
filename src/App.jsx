import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home.jsx';
import Rates from 'pages/Rates.jsx';
import { Header } from 'components/Header/Header.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrency } from 'reduxState/currency/operation.js';
import { setDefaultCurrency } from 'reduxState/currency/slice.js';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    async function success(pos) {
      var crd = pos.coords;
      dispatch(getCurrency(crd));
    }

    function error() {
      dispatch(setDefaultCurrency());
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
