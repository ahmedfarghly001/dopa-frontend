import React from 'react';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Practice from './Pages/Practice'
import ExamPage from './Pages/ExamPage'

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<ExamPage/>}/>)
);

const App = ()=>{
  return <RouterProvider router={router}/>;
};
export default App;