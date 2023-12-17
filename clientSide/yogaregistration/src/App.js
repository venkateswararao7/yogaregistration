import React, { useState, createContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/Login/login';
import Profile from './components/profile/profile';
import Payment from './components/payment/payment';
import Calender from './components/calender/calender';
import './App.css';
import Register from './components/Registration/register';



export const store = createContext();

function App() {

  const [logEamil, setLogEmail] = useState("");
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/calender",
      element: <Calender />
    },
    {
      path: "/payment",
      element: <Payment />
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/register",
      element: <Register />
    }
  ])
  return (
    <store.Provider value={[logEamil, setLogEmail]} >
      <RouterProvider router={route}></RouterProvider>
    </store.Provider>
  );
}

export default App;