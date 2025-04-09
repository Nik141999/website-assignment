import './App.css'
import ExpandableParagraph from './component/ExpandebleParagraph'
import { useRoutes } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import PreSale from './pages/PreSale';
import AboutUs from './pages/AboutUs';

function App() {
// const routes = useRoutes([{path:'/', element: <ExpandableParagraph />}])
// const routes = useRoutes([{path:'/', element: <LandingPage />}])
// const routes = useRoutes([{path:'/', element: <PreSale />}])
const routes = useRoutes([{path:'/', element: <AboutUs />}])



return routes;
}

export default App
