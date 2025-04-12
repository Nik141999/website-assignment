import './App.css';
import { useRoutes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PreSale from './pages/PreSale';
import AboutUs from './pages/AboutUs';
import Layout from './component/Layout';
import { ROUTES } from './utils/routes';

function App() {
  const routes = useRoutes([
    {
      path: ROUTES.LANDINGPAGE,
      element: <Layout />,
      children: [ 
        { path: ROUTES.HOMEPAGE, element: <LandingPage /> },
        { path: ROUTES.PRESALE, element: <PreSale /> },
        { path: ROUTES.ABOUTUS, element: <AboutUs /> },

     
      ]
    }
  ]);

  return routes;
}

export default App;
