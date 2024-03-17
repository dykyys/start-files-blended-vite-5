import { Header } from 'components';
import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { getUserInfo } from './service';
import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from '../src/redux/currency/operetions';
import { setBaseCurrency } from '../src/redux/currency/currencySlice';

const HomePage = lazy(() => import('./pages/Home'));
const RatesPage = lazy(() => import('./pages/Rates'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success({ coords }) {
      dispatch(fetchBaseCurrency(coords));
    }
    function error() {
      dispatch(setBaseCurrency('USD'));
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/rates" element={<RatesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
