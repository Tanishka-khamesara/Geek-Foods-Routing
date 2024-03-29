import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Restaurants from './Components/Restaurants';
import Quote from './Components/Quote';
import Foods from './Components/Foods';
import Contact from './Components/Contact'


function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/Quote",
          element:<Quote/>
        },
        {
          path: "/Restaurants",
          element:<Restaurants/>
        },
        {
          path: "/Foods",
          element:<Foods/>
        },
        {
          path: "/Contact",
          element:<Contact/>
        },
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={Router}/>
    </div>
  );
}

export default App;
