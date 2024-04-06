import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "components";
import { lazy } from "react";


const Home = lazy(() => import('pages/Home'));
const Rates = lazy(() => import('pages/Rates'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />}/>
        <Route path="/rates" element={<Rates />}/>
        <Route path="*" element={ <Navigate to="/" replace/>} />
        </Route> 
    </Routes>
  )
};
