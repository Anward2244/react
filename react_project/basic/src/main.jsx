import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App.jsx'
// import Description from './components/sample.jsx'
import CustomNav from './components/CustomNav.jsx'
import CustomCorousel from './components/CustomCorousel.jsx';
// import CounterApp from './ClassComponents/ClassComponent.jsx';
// import Application from './ClassComponents/Application.jsx';
// import CounterApp from './components/Counter.jsx';
import FetchData from './components/FetchData.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomNav/>
    <CustomCorousel/>
    <FetchData/>
  </StrictMode>,
)