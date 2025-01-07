import arcenciel from '/src/images/paysages/arcenciel1.jpg';
import vueferme from '/src/images/paysages/vuferme.jpg';
import dechiquetage from '/src/images/photohuile/dechiquetage1.jpg';

function Oils() {
  return (
    <div className="page-content">
      <h1 className="title">Huiles Essentielles</h1>
      <div className="content-text">
        <section className="oils-section">
          <img src={arcenciel} alt="Arcenciel" width="50%" style={{float: 'right', marginRight: '10px'}} />
          <p>
            La possession d&apos;un broyeur a copeaux
            m&apos;a permit de produire des <b>huiles essentielles</b> en déchiquetant les rameaux des <b>Genevriers</b> et des <b>Pins Sylvestres</b> qui poussent naturellement sur la ferme
            et en les faisant distiller.
            Cela permet un débroussaillage raisonné
            des zones de patures des brebis
            tout en en tirant des produits nobles et
            utiles.
          </p>
        </section>
        
        <section className="oils-section">
          <h2>Le broyeur à bois</h2>
          <img src={vueferme} alt="Vue de la ferme" width="50%" style={{float: 'left', marginRight: '10px'}} />
          <p>
            La maison d&apos;habitation de la ferme
            est chauffée par des plaquettes de bois
            réalisé avec un broyeur à copeau
            actionné par le tracteur agricole.
            Ce chauffage as un rendement calorique meilleur,
            l&apos;alimentation de la chaudière par vis sans fin
            est permanente
            et cela perment l&apos;utilisation de tout type de bois
            de moindres qualités plus présent
            sur nos zones de causses (résineux, feuillus)
            même de petites tailles (branches, arbustes).
          </p>
          <img src={dechiquetage} alt="Déchiquetage" width="50%" style={{float: 'right', marginRight: '10px'}} />
        </section>
        
        <section className="oils-section" style={{clear: 'both'}}>
          <h2>Genevrier</h2>
          <p>
            <b>ordre des coniférales, famille des cupressacées</b>
            <br />
            Genre Juniperus (environ 60 espèces, dont cinq peuvent se trouver en france).
            <br />
            Comprend des arbres et des arbustes répandus dans l&apos;hémisphère Nord. L&apos;écorce est d&apos;habitude mince et se détache en longues bandes. Les feuilles sont persistantes et toujours pointues à l&apos;état juvénile. Les pseudo-baies sont rouge-brun, bleues, ou bleu-noir et mettent un, deux ou parfois trois ans à atteindre la maturité. Elles contiennent de 1 à 12 graines ovoïdes, qui germent après une ou plusieurs années. Les genévriers sont en général de petits arbres ornementaux au feuillage touffu.
          </p>
          
        </section>
      </div>
    </div>
  );
}

export default Oils; 