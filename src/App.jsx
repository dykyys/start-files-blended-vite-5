//import Heading from './components/Heading/Heading';

import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
//import Home from './pages/Home';
//import Rates from './pages/Rates';
import { lazy, useEffect } from 'react';
//import { getUserInfo } from './service/opencagedataApi';
import { useDispatch } from 'react-redux';
import { getBaseCurrency, setDefaultCurrency } from './redux/currencySlice';

//lazy with named export components example
const Home = lazy(async () => ({
  default: (await import('./pages/Home')).Home,
}));
const Rates = lazy(() => import('./pages/Rates'));

export const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      dispatch(getBaseCurrency(crd));
    }

    function error(err) {
      dispatch(setDefaultCurrency('USD'));
      console.error(err);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
