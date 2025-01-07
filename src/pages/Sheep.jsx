import agnelag1 from '../images/photobrebis/agnelag1.JPG';
import agnelag2 from '../images/photobrebis/agnelag2.JPG';
import agnelag3 from '../images/photobrebis/agnelag3.JPG';
import agnelag4 from '../images/photobrebis/agnelag4.JPG';
import agnelag5 from '../images/photobrebis/agnelag5.JPG';
import black1 from '../images/photobrebis/black1.JPG';
import black2 from '../images/photobrebis/black2.JPG';
import traite01 from '../images/photobrebis/traite01.JPG';
import traite02 from '../images/photobrebis/traite02.JPG';

function Sheep() {
  return (
    <div className="page-content">
      <h1 className="title">Nos Brebis Laitières</h1>
      <div className="content-text">
        <section className="sheep-section">
          <p>
          La ferme d&apos;Egalieres produit du lait de brebis pour l&apos;industrie de roquefort.
          </p>
          <p>
          Nous vous proposons quelques photos de brebis et d&apos;agneaux:
          </p>
        </section>
        
        <section className="sheep-section">
          <h2>Une brebis en train d&apos;agneler:</h2>
          <p>
            <img src={agnelag1} alt="Une brebis en train d&apos;agneler" height="130" style={{display: 'inline-block', marginRight: '10px'}} />
            <img src={agnelag2} alt="Une brebis en train d&apos;agneler" height="130" style={{display: 'inline-block', marginRight: '10px'}} />
            <img src={agnelag3} alt="Une brebis en train d&apos;agneler" height="130" style={{display: 'inline-block', marginRight: '10px'}} />
            <img src={agnelag4} alt="Une brebis en train d&apos;agneler" height="130" style={{display: 'inline-block', marginRight: '10px'}} />
            <img src={agnelag5} alt="Une brebis en train d&apos;agneler" height="130" style={{display: 'inline-block', marginRight: '10px'}} />
          </p>
        </section>
        
        <section className="sheep-section">
          <h2>De temps en temps nait un agneau noir:</h2>
          <p>
            <img src={black1} alt="Un agneau noir" height="130" style={{display: 'inline-block', marginRight: '10px'}} />
            <img src={black2} alt="Un agneau noir" height="130" style={{display: 'inline-block', marginRight: '10px'}} />
          </p>
        </section>

        <section className="sheep-section">
          <h2>La traite du lait:</h2>
          <p>
            <img src={traite01} alt="La traite du lait" height="170" style={{display: 'inline-block', marginRight: '10px'}} />
            <img src={traite02} alt="La traite du lait" height="170" style={{display: 'inline-block', marginRight: '10px'}} />
          </p>
        </section>
      </div>
    </div>
  );
}

export default Sheep; 