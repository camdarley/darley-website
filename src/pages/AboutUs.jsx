import nousUrl from '/src/images/nous/nous.jpg';
import ericUrl from '/src/images/nous/eric3.jpg';
import ericUrl2 from '/src/images/nous/eric5.jpg';
import mcUrl from '/src/images/nous/mc2.jpg';
import mcUrl2 from '/src/images/nous/mc3.jpg';
import mcUrl3 from '/src/images/nous/mc4.jpg';
import cammillouUrl from '/src/images/nous/camillou.jpg';
import camilletteUrl from '/src/images/nous/camillette2.jpg';
import camilletteUrl2 from '/src/images/nous/camillette3.jpg';
import thibaultUrl from '/src/images/nous/thibault1.jpg';
import pacoUrl from '/src/images/nous/paco.jpg';
import colineUrl from '/src/images/nous/coline.gif';
import colineUrl2 from '/src/images/nous/coline2.jpg';

function AboutUs() {
  return (
    <div className="page-content">
      <h1 className="title">Qui Sommes-Nous ?</h1>
      <div className="content-text">
        <img src={nousUrl} width="163" height="227" alt='Nous' />
        <section className="about-section">
          <h2>Darley Eric <small>n&eacute; le 23 juillet 1961</small></h2>
            <img src={ericUrl} width="192" height="286" style={{float: 'left', marginRight: '10px'}} />
            <img src={ericUrl2} width="195" height="286" style={{float: 'left', marginLeft: '10px'}} />
          <p style={{clear: 'both', marginTop: '10px'}}>
            Install&eacute; l&apos;hiver1985-86 sur la ferme
            en fermage &agrave; la SCTL sur les terres d&eacute;fendues
            par les <b>paysans du LARZAC</b> contre l&apos;Etat et
            l&apos;Arm&eacute;e Fran&ccedil;aise de 1971 &agrave; 1981
          </p>
          <p style={{clear: 'both', marginTop: '10px'}}>
            Passionné d&apos;escalade, de course à pied (La Grande Course des Templiers, Aubrac), de musique folk irlandaise,
            de <b>sanglier</b> et de <b>brebis</b>.
          </p>
          <p style={{clear: 'both', marginTop: '10px'}}>
            Militant du Syndicat Confédération Paysanne.<br />
            Eleveur de brebis laitieres, Producteur de lait de brebis pour Roquefort, Eleveur de Sangliers, Producteur de charcuteries pur Sanglier,
            Producteur d&apos;huiles Essentielles Biologiques de Genevrier et de pin sylvestre.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Bouniort Marie-Christine <small>n&eacute;e le 18 juin 1961</small></h2>
          <img src={mcUrl} width="192" height="286" style={{float: 'left', marginRight: '10px'}} />
          <img src={mcUrl2} width="195" height="286" style={{float: 'left', marginLeft: '10px'}} />
          <img src={mcUrl3} width="195" height="286" style={{float: 'left', marginLeft: '10px'}} />
          <p style={{clear: 'both', marginTop: '10px'}}>
          
            &quot;J&apos;ai depuis toujours &eacute;t&eacute; attir&eacute;e
            par le travail de l&apos;argile. Passion&eacute;e
            d&apos;arch&eacute;ologie et d&apos;histoire de l&apos;art, le
            m&eacute;tier de c&eacute;ramiste s&apos;est impos&eacute;
            &agrave; moi.&quot;
          </p>
          <p style={{clear: 'both', marginTop: '10px'}}>
            &quot;Là, c&apos;est l&apos;aventure. Loin des id&eacute;es recues, un jardin d&apos;Eden o&ugrave; il fait doux vivre.&quot;
          </p>
        </section>
        
        <section className="about-section">
          <h2>Les enfants</h2>
            <img src={cammillouUrl} height="277" style={{float: 'left', marginRight: '10px'}} />
            <h3 style={{clear: 'both', marginTop: '10px'}}>Darley Camille <small>n&eacute; le 22 juin 1984</small></h3>
            <img src={camilletteUrl} height="240" style={{float: 'left', marginRight: '10px'}} />
            <img src={camilletteUrl2} height="262" style={{float: 'left', marginRight: '10px'}} />
            <h3 style={{clear: 'both', marginTop: '10px'}}>Dumora Camille <small>n&eacute;e le 27 septembre 1987</small></h3>  
            <img src={thibaultUrl} height="192" style={{float: 'left', marginRight: '10px'}} />
            <h3 style={{clear: 'both', marginTop: '10px'}}>Thibault <small>n&eacute; le 18 janvier 1989</small></h3>
            <img src={colineUrl} width="193" style={{float: 'left', marginRight: '10px'}} />
            <img src={colineUrl2} width="193" style={{float: 'left', marginRight: '10px'}} />
            <h3 style={{clear: 'both', marginTop: '10px'}}>Coline <small>n&eacute;e le 29 janvier 1998</small></h3>
            <img src={pacoUrl} height="240" style={{float: 'left', marginRight: '10px'}} />
            <h3 style={{clear: 'both', marginTop: '10px'}}>Paco <small>n&eacute; à paque 1995</small></h3>

        </section>
      </div>
    </div>
  );
}

export default AboutUs; 