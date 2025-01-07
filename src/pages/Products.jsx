import { useState } from 'react';
import Modal from 'react-modal';
import pateGenievreImg from '/src/images/products/patedet.gif';
import pateHureImg from '/src/images/products/huredet.gif';
import civetImg from '/src/images/products/civet.JPG';
import patecha2 from '/src/images/products/patécha2.JPG';
import civetboite1 from '/src/images/products/civetboite1.JPG';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function PateGenievre() {
  return (
    <div>
      <h1>Pâté au genièvre</h1>
      <img src={pateGenievreImg} alt="Pâté au genièvre" style={{ width: '200px', height: '150px', float: 'left' }} />
      <p>
      Le paté de sanglier au genièvre:
      </p>
      <p>
      Goutez ! vous y reviendrez !.
      </p>
      <p>
      A ouvrir quelques minutes avant dégustation, pour exalter les parfums et les gouts.
      </p>
      <p>
      Ingredients:
      </p>
      <ul>
        <li>Viande de sanglier,</li>
        <li>Foie de sanglier,</li>
        <li>Sel / Poivre,</li>
        <li>Genivre,</li>
        <li>Armagnac.</li>
      </ul>
      <p>
      Prix:
      </p>
      <ul>
        <li>boîte de 125g net: 27 FF</li>
        <li>boîte de 200g net: 42 FF</li>
      </ul>
    </div>
  );
}

function PateHure() {
  return (
    <div>
      <h1>Pâté de hure</h1>
      <img src={pateHureImg} alt="Pâté de hure" style={{ width: '200px', height: '150px', float: 'left' }} />
      <p>
      Le paté de hure convient très bien pour les apéritifs et entrées, coupé en tranche, assaisonné d&apos;un soupçon de vinaigrette et d&apos;échalote.
      </p>
      <p>
      Le couvercle s&apos;ouvre simplement en coupant la languette avec un couteau, un filet d&apos;air entrera alors dans le bocal et en permettra l&apos;ouverture sans risque de blessure ou de bris de verre.
      </p>
      <p>
      Ingredients:
      </p>
      <ul>
        <li>hure (t&ecirc;te) de sanglier</li>
        <li>sel, poivre</li>
        <li>vin blanc, aromates</li>
      </ul>
      <p>
      Prix:
      </p>
      <p>
        boite de 200g net : <b>42</b> FF
      </p>


    </div>
  );
}

function Rillettes() {
  return (
    <div>
      <h1>Rillettes</h1>
      <img src={pateGenievreImg} alt="Rillettes" style={{ width: '200px', height: '150px', float: 'left' }} />
      <p>
        Les rillettes sont issues de la cuisson des petits morceaux de
        viandes dans la graisse tendre du sanglier.<br />
        La viande est donc &quot;confite&quot;<br />
      </p>
      <p>
        Ingredients:
      </p>
      <ul>
        <li>Viande de sanglier,</li>
        <li>graisse de sanglier,</li>
        <li>Sel / Poivre.</li>
      </ul>
      <p>
        Prix:
      </p>
      <ul>
        <li>boîte de 125g net: <b>27</b> FF</li>
        <li>boîte de 200g net: <b>42</b> FF</li>
      </ul>
    </div>
  );
}

function Civet() {
  return (
    <div>
      <h1>Le civet de sanglier au madiran<br />
      et aux chanterelles</h1>
      <img src={civetImg} alt="Civet" style={{ width: '200px', height: '150px', float: 'left' }} />
      <p>
        Le civet au madiran et aux chanterelles n&apos;attend plus que vos
        légumes ou/et vos pommes de terre. La viande est garantie
        sans gras et sans os.<br />
        Vous n&apos;avez qu&apos;à le faire mijoter et vous pouvez servir.
      </p>
      <p>
        Ingredients:
      </p>
      <ul>
        <li>Viande de sanglier,</li>
        <li>Chanterelles jaunissantes,</li>
        <li>Sauce:</li>
        <ul>
          <li>Vin AOC de Madiran</li>
          <li>Amidon modifié (sans ogm)</li>
          <li>Petits legumes</li>
          <li>Sel / Poivre</li>
        </ul>
      </ul>
    </div>
  );
}

function Products() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    if (content === "pategenievre") {
      setModalContent(<PateGenievre />);
    } else if (content === "patehure") {
      setModalContent(<PateHure />);
    } else if (content === "rillettes") {
      setModalContent(<Rillettes />);
    } else if (content === "civet") {
      setModalContent(<Civet />);
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="page-content">
      <h1 className="title">Nos Produits</h1>
      <div>
        <p className="description">
          Mes animaux sont élevés sans stress, nourris depuis le
          début de l&apos;élevage sans farines, ni OGM, ni aliments tout
          préparés.<br />
          Leur nourriture est constituée de grains entiers (orge, blé,
          triticale, pois), de petit lait (serum de fromage de laiterie), de
          légumes divers (carottes, pommes de terre), de pains secs.<br />
          <br />
          Ils sont emmenés vivant à l&apos;abattoir et sont garantis non
          chassés.
        </p>
        <p>
          Voici les produits <span className="highlight"><u>tous pur sanglier</u></span> que je propose à
          la vente.
        </p>

          <p className="text-center">
            Cliquez sur un produit pour avoir une définition complète.
          </p>
          <div className="products-table">
            <div className="table-row">
              <div className="table-cell">
                  <img
                    src={patecha2}
                    width="200"
                    height="150"
                    alt="pâté au genièvre"
                    onClick={() => openModal("pategenievre")}
                  />
              </div>
              <div className="table-cell">
                  <img
                    src={pateHureImg}
                    width="200"
                    height="150"
                    alt="pâté de hure"
                    onClick={() => openModal("patehure")}
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">
                  <img
                    src={patecha2}
                    width="203"
                    height="136"
                    alt="rillettes"
                    onClick={() => openModal("rillettes")}
                  />
              </div>
              <div className="table-cell">
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">
                  <img
                    src={civetImg}
                    width="200"
                    height="150"    
                    alt="civet aux champignons, légumes, sauce au madiran"
                    onClick={() => openModal("civet")}
                  />
              </div>
              <div className="table-cell">
                <img
                  src={civetboite1}
                  width="108"
                  height="171"
                  alt="civet aux champignons, sauce au madiran"
                  onClick={() => openModal("civet")}
                />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">
                <p className="text-center">
                  <strong>
                    Je propose aussi des sangliers<br />
                    prêt à rôtir, livrés dans un rayon<br />
                    de 100 Km de la ferme<br />
                    au prix de 50 Fr le Kilo
                  </strong>
                </p>
              </div>
              <div className="table-cell">
                <p className="text-center">
                  <strong>
                    Un atelier de découpe et de transformation est<br />
                    à l&apos;étude sur la ferme pour vous proposer,<br />
                    vers l&apos;été prochain, de la viande<br />
                    et des plats cuisinés de sanglier.
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={() => {}}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {modalContent}
          </Modal>
      </div>
    </div>
  );
}

export default Products; 