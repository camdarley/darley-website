import atelier1 from '/src/images/poteries/atelier1.jpg';
import theiere1 from '/src/images/poteries/theiere1.gif';
import service1 from '/src/images/poteries/service1.jpg';

function Pottery() {
  return (
    <div className="page-content">
      <h1 className="title">Les Poteries de Marie-Christine</h1>
      <div className="content-text">
        <section className="pottery-section">
          <img src={atelier1} alt="Atelier" width="50%" style={{float: 'right', marginRight: '10px'}} />
          <p>
            Je tourne dans mon atelier sur le plateau du Larzac. De
            longues années d&apos;étude me permettent aujourd&apos;hui de créer
            ce que m&apos;inspirent mon imagination, mes voyages, mes
            lectures, mes rencontres. Voir surgir de mes mains,
            lorsque je tourne, une forme &eacute;lanc&eacute;e sortie d&apos;une masse de
            terre m&apos;merveille. C&apos;est comme le papillon qui sort de sa
            chrysalide. Chaque pi&egrave;ce &eacute; son histoire, elle est unique.
          </p>
        </section>
        
        <section className="pottery-section" style={{clear: 'both'}}>
          <img src={theiere1} alt="Atelier" width="50%" style={{float: 'left', marginRight: '10px'}} />
          <p>
            Pourquoi le gr&egrave;s et l&apos;utilitaire ? <br />
            J&apos;aime embellir le quotidien, boire dans un bol fin,
            verser le th&eacute; d&apos;une th&eacute;i&egrave;re d&eacute;licate,
            toucher une bo&icirc;te aux mille usages, cuisiner dans des plats aux
            couleurs cristallis&eacute;es. Le gr&egrave;s c&apos;est aussi une
            palette de couleurs, riches, chaudes et profondes qui invite au
            voyage. Dense et non poreux, la composition du gr&egrave;s
            rappelle celle de la pierre, les deux ayant subit la m&ecirc;me
            chaleur intense. Le gr&egrave;s a le privil&egrave;ge de s&apos;habiller
            d&apos;maux haute temp&eacute;rature qui vont atteindre leur apog&eacute;e
            en cuisson appel&eacute;e R&eacute;ductrice dans un four &agrave; gaz.<br />
            La cuisson en r&eacute;duction consiste &agrave; r&eacute;duire l&apos;arriv&eacute;e d&apos;air
            dans le four ; la flamme ayant besoin d&apos;oxyg&egrave;ne va le
            puiser dans la terre et l&apos;mail. <br />
            Il r&eacute;sulte de ce savant dosage entre gaz et oxyg&egrave;ne une
            subtilit&eacute; et une profondeur de couleur in&eacute;galable.<br />
            L&apos;alchimie jalousement gard&eacute;e par le potier mais jamais
            tout &agrave; fait ma&icirc;tris&eacute;e fait de chaque c&eacute;ramique une pi&egrave;ce
            unique.
          </p>
        </section>
        
        <section className="pottery-section">
          <img src={service1} alt="Atelier" width="50%" style={{float: 'left', marginRight: '10px'}} />
          <p>
            Le travail de l&apos;argile est un des plus ancien artisanat.
            Il s&apos;est d&eacute;velopp&eacute; en m&ecirc;me temps que les installations
            s&eacute;dentaires vers 7000 Av J.C. Lorsque l&apos;on d&eacute;couvrit que
            l&apos;argile durcie par cuisson pouvait servir &agrave; la confection
            de r&eacute;cipients &agrave; usages multiples l&apos;humanit&eacute; progressa sans
            aucun doute de fa&ccedil;on significative. Avec l&apos;invention du
            tour vers 3000 Av J.C en M&eacute;sopotamie et en Egypte, le
            travail de l&apos;argile &eacute;volua vers un artisanat d&apos;une
            ing&eacute;niosit&eacute;, d&apos;une vari&eacute;t&eacute; et d&apos;une expression extr&eacute;mement
            riche.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Pottery; 