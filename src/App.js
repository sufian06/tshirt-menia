import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Grandpa from './components/Grandpa/Grandpa';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main />, children: [
      {path: '/', loader: () => fetch('tshirts.json'), element: <Home />},
      {path: '/orders', element: <Orders />},
      {path: '/grandpa', element: <Grandpa />},
      {path: '/about', element: <About />},
    ]}
  ])
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
