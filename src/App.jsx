import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Present from './pages/Present';
import Products from './pages/Products';
import Sanglier from './pages/Sanglier';
import Farm from './pages/Farm';
import AboutUs from './pages/AboutUs';
import Pottery from './pages/Pottery';
import Oils from './pages/Oils';
import Climbing from './pages/Climbing';
import Sheep from './pages/Sheep';
import Links from './pages/Links';
import { initSP2 } from './js/marcassins';

function App() {

  initSP2();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="present" element={<Present />} />
          <Route path="produits" element={<Products />} />
          <Route path="sanglier" element={<Sanglier />} />
          <Route path="ferme" element={<Farm />} />
          <Route path="qsn" element={<AboutUs />} />
          <Route path="poteries" element={<Pottery />} />
          <Route path="huiles" element={<Oils />} />
          <Route path="escalade" element={<Climbing />} />
          <Route path="brebis" element={<Sheep />} />
          <Route path="liens" element={<Links />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 