import {  Outlet, useLocation } from 'react-router-dom';
import homeNavImg from '/src/images/nav_bar/g1.gif';
import presentImg from '/src/images/nav_bar/g2.gif';
import presentImgHover from '/src/images/nav_bar/g2blanc.gif';
import produitsImg from '/src/images/nav_bar/g3.gif';
import produitsImgHover from '/src/images/nav_bar/g3blanc.gif';
import sanglierImg from '/src/images/nav_bar/g5.gif';
import sanglierImgHover from '/src/images/nav_bar/g5blanc.gif';
import fermeImg from '/src/images/nav_bar/g6.gif';
import fermeImgHover from '/src/images/nav_bar/g6blanc.gif';
import liensImg from '/src/images/nav_bar/g8.gif';
import liensImgHover from '/src/images/nav_bar/g8blanc.gif';
import addressImg from '/src/images/nav_bar/g9.gif';
import qsnImg from '/src/images/nav_bar/g10.gif';
import qsnImgHover from '/src/images/nav_bar/g10blanc.gif';
import poteriesImg from '/src/images/nav_bar/g11.gif';
import poteriesImgHover from '/src/images/nav_bar/g11blanc.gif';
import huilesImg from '/src/images/nav_bar/g12.gif';
import huilesImgHover from '/src/images/nav_bar/g12blanc.gif';
import escaladeImg from '/src/images/nav_bar/g14.gif';
import escaladeImgHover from '/src/images/nav_bar/g14blanc.gif';
import brebisImg from '/src/images/nav_bar/g15.gif';
import brebisImgHover from '/src/images/nav_bar/g15blanc.gif';
import headerImg from '/src/images/page/haut.gif';
import footerImg from '/src/images/page/bas.gif';
import LinkItem from './LinkItem';
const navItems = [
  { path: '/', image: homeNavImg, alt: 'Accueil' },
  { path: '/present', image: presentImg, alt: 'Présentation', hover: presentImgHover },
  { path: '/produits', image: produitsImg, alt: 'Produits', hover: produitsImgHover },
  { path: '/sanglier', image: sanglierImg, alt: 'Sanglier', hover: sanglierImgHover },
  { path: '/ferme', image: fermeImg, alt: 'Ferme', hover: fermeImgHover },
  { path: '/qsn', image: qsnImg, alt: 'Qui sommes-nous', hover: qsnImgHover },
  { path: '/poteries', image: poteriesImg, alt: 'Poteries', hover: poteriesImgHover },
  { path: '/huiles', image: huilesImg, alt: 'Huiles essentielles', hover: huilesImgHover },
  { path: '/escalade', image: escaladeImg, alt: 'Escalade', hover: escaladeImgHover },
  { path: '/brebis', image: brebisImg, alt: 'Brebis', hover: brebisImgHover },
  { path: '/liens', image: liensImg, alt: 'Liens', hover: liensImgHover },
];

function Layout() {
  const { pathname } = useLocation();
  return (
    <div className={`container ${pathname === '/' ? 'index' : ''}`}>
      <nav className="sidebar">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <LinkItem path={item.path} image={item.image} alt={item.alt} hover={item.hover} />
            </li>
          ))}
          <li className="nav-item">
            <img src={addressImg} alt="Adresse" />
          </li>
        </ul>
      </nav>

      <div className={`content ${pathname === '/' ? 'index' : ''}`}>
        <div className="header-image">
          <img src={headerImg} alt="Header" />
        </div>
        <main className="content-body">
          <Outlet />
        </main>
        <footer className="footer">
          <a href="http://www.id-alizes.fr">
            <img src={footerImg} alt="Footer" />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Layout; 