function Home() {
  return (
    <div className="welcome">
      <h1 className="title">Bonjour...</h1>
      <div className="intro-text">
        <p>Dans ce site, nous vous proposons un voyage sur le</p>
        <p className="highlight">sanglier</p>
        <p>(sauf sur sa chasse),</p>
        <p>les <span className="highlight">charcuteries</span> que l&apos;on en fait,</p>
        <p>les <span className="highlight">huiles essentielles</span>,</p>
        <p>les <span className="highlight">poteries</span>,</p>
        <p>les <span className="highlight">brebis laitières</span>,</p>
        <p>l&apos;<span className="highlight">escalade</span>, les <span className="highlight">randonnées</span></p>
        <p>enfin bref sur tout ce qu&apos;on s&apos;amuse à faire à la</p>
        <p className="highlight">ferme d&apos;Egalieres</p>
        <p>sur le causse du <span className="highlight">larzac</span></p>
        <p>au sud du massif central.</p>
      </div>
      
      <div className="updates">
        <div className="update-info">
          <strong>Mise à jour le 7 janvier 2025: </strong>
          <em>Migration du site sur react</em>
        </div>
      </div>
    </div>
  );
}

export default Home; 