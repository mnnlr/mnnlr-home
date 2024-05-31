
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from './Pages/Home';
import PageLayOut from './Pages/PageLayOut';
import About from './Pages/Aboutus';
import Services from './Pages/Services';
import Contectus from './Pages/ContectUs';
import WebServices from './Pages/WebServices';
import DigitalMarketings from './Pages/DigitalMarketing';
import AppDevelopment from './Pages/AppDevelopment';
import Ecommerce from './Pages/Ecommerce';
function App() {
  return (
    <Router>
      <Routes>
          <Route element={<PageLayOut />} >
            <Route index='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path='/contact' element={<Contectus />} />
            <Route path='/App-Development' element={<AppDevelopment />} />
            <Route path='/Digital-Marketing' element={<DigitalMarketings/>} />
            <Route path='/Web-Services' element={<WebServices/>} />
            <Route path='/E-Commerce' element={<Ecommerce/>} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
