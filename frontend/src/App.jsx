import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Practice from './Pages/Practice';
import ExamPage from './Pages/ExamPage';
import LoginPage from './Pages/Login-Page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/ExamPage" element={<ExamPage />} />
      <Route path="/Login-Page" element={<LoginPage />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
