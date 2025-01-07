import traverse01 from '/src/images/escaladesite/traverse01.jpg';
import traversefarwest01 from '/src/images/escaladesite/traverse_farwest01.jpg';
import roc1 from '/src/images/escaladesite/roc1.jpg';
import seance01 from '/src/images/escaladesite/seance_traverse06.jpg';
import traversefarwest03 from '/src/images/escaladesite/travfarwest3.jpg';
import seance05 from '/src/images/escaladesite/seance_traverrse05.jpg';

function Climbing() {
  return (
    <div className="page-content">
      <h1 className="title">Escalade sur le Larzac</h1>
      <div className="content-text">
        <section className="climbing-section">
          <p>
          Pratiquant depuis longtemps l&apos;escalade et ayant deux amis moniteur ayant un brevet d&apos;etat d&apos;escalade, je leur ai montré les rochers présents sur la ferme d&apos;égalieres et sur les alentours (ferme de l&apos;office national des forets des canalettes) .
          </p>
          <p>
          C&apos;est ainsi qu&apos;ont demarré en 1996 les stages d&apos;été avec :
          </p>
          <ul>
            <li>DIDIER FRANCO, B.E. moniteur a l&apos;association ESCALABEL (grabels, 34) ,</li>
            <li>JEAN-YVES GERBE, B.E. moniteur a l&apos;association SCALATA NATURE (montpellier, 34) ,</li>
          </ul>
          <p>
          et les jeunes de ces deux associations.
          </p>
          <p>
          Par la suite, l&apos;association ESCALABEL a continué chaque été un travail fantastique pour ouvrir des passages de blocs ainsi que quelques voies à grimper en-tête.
          </p>
          <p>
          Un grand salut à Nicolas, Jonas, Gaétan, Mathieu, Renaud, Robin, Tomy, Robin, Nicolas, Audrey, Camille, Delphine, Léa, Florent, Aurélien, Clément, Jérémie, Jérémy, Jules, Manon, Marie, Eva, Elie, Frédéric, Paul, Magalie,
          Quelques grimpeurs du Club Alpin de Millau sont venus en 1997 ouvrir une traversée (au farwest).
          </p>
          <img src={traversefarwest01} alt="La fameuse traversée" width="40%" style={{float: 'left', marginRight: '10px'}} />
          <img src={traverse01} alt="La fameuse traversée" width="40%" style={{float: 'left', marginRight: '10px'}} />
          <img src={roc1} alt="La fameuse traversée" width="40%" style={{float: 'left', marginRight: '10px'}} />
          <img src={seance01} alt="La fameuse traversée" width="40%" style={{float: 'left', marginRight: '10px'}} />
          <img src={traversefarwest03} alt="La fameuse traversée" width="40%" style={{float: 'left', marginRight: '10px'}} />
          <img src={seance05} alt="La fameuse traversée" width="40%" style={{float: 'left', marginRight: '10px'}} />
        </section>
      
      </div>
    </div>
  );
}

export default Climbing; 