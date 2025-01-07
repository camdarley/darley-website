import { Link } from 'react-router-dom';

function Present() {
  return (
    <div className="page-content">
      <div className="content-text presentation">
        <div className="text-center">
          <p className="paragraph">
            <span className="highlight">Déjà producteur de lait de brebis</span> pour Roquefort depuis 1986,
            je me suis pris de passion en 1994 pour 
            cet animal extraordinaire qu&apos;est le <span className="highlight">sanglier</span>.
            J&apos;ai démarré un élevage en 1997 
            et la <span className="highlight">transformation charcutière</span> en 1998.
          </p>
          
          <p className="paragraph">
            Marie Christine Bouniort tourne et cuit ses <span className="highlight">poteries</span>,
            depuis 1996, sur le <span className="highlight">Larzac</span>.
          </p>
          
          <p className="paragraph">
            Les <span className="highlight">huiles essentielles</span> de Genevrier et de Pin Sylvestre 
            sont issues d&apos;un travail récent de débroussaillage
            des parcours de causse et créent un lien plus étroit
            entre le <span className="highlight">paysan</span> et la <span className="highlight">céramiste</span> 
            par la vente en commun de brûle-parfums 
            aux senteurs des <span className="highlight">Grands Causses du Massifs Central</span>.
          </p>
          
          <p className="paragraph">
            Même les rochers présents ont trouvé une utilité
            en proposant des passages d&apos;escalade de tous niveaux.
          </p>
        </div>
        
        <div className="cta-section">
          <Link to="/produits" className="cta-button">
            Découvrir nos produits
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Present;