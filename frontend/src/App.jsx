import React from 'react';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Practice from './Pages/Practice'
const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<Practice/>}/>)
);

const App = ()=>{
  return <RouterProvider router={router}/>;
};
export default App;