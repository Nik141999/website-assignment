import './App.css'
import ExpandableParagraph from './component/ExpandebleParagraph'
import { useRoutes } from 'react-router-dom'

function App() {
const routes = useRoutes([{path:'/', element: <ExpandableParagraph />}])
return routes;
}

export default App
