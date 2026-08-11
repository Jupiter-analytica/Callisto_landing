import WaitlistForm from "./components/WaitlistForm";

const features = [
  {
    index: "01",
    title: "Un patrimoine, une seule vue",
    copy: "Immeubles, unités, baux, occupants et documents réunis dans un registre immobilier fiable, quel que soit le pays.",
  },
  {
    index: "02",
    title: "Des loyers réellement pilotés",
    copy: "Échéanciers, quittances, relances, encaissements et rapprochements réunis dans un flux financier lisible.",
  },
  {
    index: "03",
    title: "Le terrain reste connecté",
    copy: "Demandes, interventions, prestataires et dépenses suivent le même dossier, du signalement à la clôture.",
  },
];

const countries = ["Canada", "Sénégal", "France", "Côte d’Ivoire", "Maroc", "Belgique"];

export default function Home() {
  return (
    <main>
      <section className="hero" id="accueil">
        <nav className="nav shell" aria-label="Navigation principale">
          <a className="brand" href="#accueil" aria-label="Callisto Pilot — accueil">
            <img src="/callisto-mark-dark.png" alt="" />
            <span><strong>Callisto</strong> Pilot</span>
          </a>
          <div className="nav-links">
            <a href="#plateforme">Plateforme</a>
            <a href="#international">International</a>
            <a href="#securite">Sécurité</a>
          </div>
          <a className="button button-small button-light" href="#liste-attente">Accès prioritaire</a>
          <details className="mobile-menu">
            <summary aria-label="Ouvrir le menu">Menu</summary>
            <div>
              <a href="#plateforme">Plateforme</a>
              <a href="#international">International</a>
              <a href="#securite">Sécurité</a>
              <a href="#liste-attente">Rejoindre la liste</a>
            </div>
          </details>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Ouverture privée · Invitations par vagues</p>
            <h1>Pilotez chaque immeuble. <em>Partout.</em></h1>
            <p className="lead">
              Callisto Pilot réunit gestion locative, encaissements, maintenance et conformité
              dans une plateforme conçue pour s’adapter à chaque marché.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#liste-attente">Rejoindre la liste d’attente <span>↗</span></a>
              <a className="text-link" href="#plateforme">Découvrir la plateforme <span>↓</span></a>
            </div>
            <div className="trust-row" aria-label="Atouts principaux">
              <span><b>✓</b> Multi-pays</span>
              <span><b>✓</b> Multi-devises</span>
              <span><b>✓</b> Mobile-first</span>
            </div>
          </div>

          <div className="product-stage" aria-label="Aperçu du tableau de bord Callisto Pilot">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="dashboard-card">
              <div className="dash-topbar">
                <div className="dash-brand"><span className="mini-mark">C</span><b>Callisto</b></div>
                <span className="dash-search">⌕&nbsp; Rechercher</span>
                <span className="avatar">CN</span>
              </div>
              <div className="dash-body">
                <aside>
                  <span className="active">◫</span><span>⌂</span><span>▤</span><span>◇</span><span>⚙</span>
                </aside>
                <div className="dash-content">
                  <div className="dash-heading">
                    <div><small>PORTFOLIO</small><h2>Vue d’ensemble</h2></div>
                    <span className="period">Ce mois⌄</span>
                  </div>
                  <div className="metric-grid">
                    <div className="metric"><span>Revenus encaissés</span><strong>84 250 $</strong><small>↗ 8,4 %</small></div>
                    <div className="metric"><span>Taux d’occupation</span><strong>96,2 %</strong><small>↗ 1,2 %</small></div>
                    <div className="metric"><span>Interventions</span><strong>12</strong><small className="neutral">4 en cours</small></div>
                  </div>
                  <div className="chart-card">
                    <div className="chart-title"><div><small>PERFORMANCE</small><b>Encaissements</b></div><span>● Revenus</span></div>
                    <div className="chart-wrap">
                      <div className="axis"><i>100k</i><i>75k</i><i>50k</i><i>25k</i></div>
                      <svg viewBox="0 0 520 145" role="img" aria-label="Courbe ascendante des encaissements">
                        <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#10b981" stopOpacity=".28"/><stop offset="1" stopColor="#10b981" stopOpacity="0"/></linearGradient></defs>
                        <path className="area" d="M0 122 C55 110 70 83 122 91 S190 115 240 73 S310 58 355 62 S430 31 520 21 L520 145 L0 145Z" />
                        <path className="line" d="M0 122 C55 110 70 83 122 91 S190 115 240 73 S310 58 355 62 S430 31 520 21" />
                        <circle cx="520" cy="21" r="5" />
                      </svg>
                    </div>
                    <div className="months"><span>Jan</span><span>Fév</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-card payment"><span className="float-icon">✓</span><div><small>PAIEMENT REÇU</small><strong>1 250,00 $</strong><em>Appartement 4B</em></div></div>
            <div className="floating-card occupancy"><div className="ring"><span>96%</span></div><div><small>OCCUPATION</small><strong>Excellente</strong></div></div>
          </div>
        </div>
        <div className="hero-fade" />
      </section>

      <section className="statement shell" id="plateforme">
        <p className="section-label">La plateforme</p>
        <h2>Moins d’outils fragmentés.<br/><span>Plus de contrôle.</span></h2>
        <p>Une architecture métier complète pour les propriétaires, gestionnaires et équipes terrain.</p>
      </section>

      <section className="features shell">
        {features.map((feature) => (
          <article className="feature" key={feature.index}>
            <div className="feature-number">{feature.index}</div>
            <div className={`feature-visual visual-${feature.index}`} aria-hidden="true">
              <span className="visual-grid" />
              {feature.index === "01" && <><i className="building b1"/><i className="building b2"/><i className="building b3"/><b className="pin">●</b></>}
              {feature.index === "02" && <><span className="receipt"><i/><i/><i/><strong>✓</strong></span><b className="coin">$</b></>}
              {feature.index === "03" && <><span className="tool-ring">⚙</span><i className="pulse p1"/><i className="pulse p2"/></>}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.copy}</p>
            <a href="#liste-attente">Explorer <span>→</span></a>
          </article>
        ))}
      </section>

      <section className="global-section" id="international">
        <div className="shell global-grid">
          <div className="global-copy">
            <p className="section-label section-label-light">Conçu pour le monde réel</p>
            <h2>Une plateforme.<br/><span>Chaque marché.</span></h2>
            <p>
              Activez les règles, formats et moyens de paiement propres à chaque pays sans fragmenter vos opérations.
            </p>
            <ul>
              <li><b>CountryPacks</b><span>Devises, fiscalité, formats et documents locaux</span></li>
              <li><b>Paiements adaptés</b><span>Carte, virement, Mobile Money et caisse</span></li>
              <li><b>Expérience locale</b><span>Langues, adresses, dates et communications</span></li>
            </ul>
          </div>
          <div className="globe-card" aria-label="Illustration de la couverture internationale">
            <div className="globe">
              <div className="longitude l1"/><div className="longitude l2"/>
              <div className="latitude a1"/><div className="latitude a2"/><div className="latitude a3"/>
              <span className="map-dot d1"/><span className="map-dot d2"/><span className="map-dot d3"/><span className="map-dot d4"/>
            </div>
            <div className="country-pills">{countries.map((country) => <span key={country}>{country}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="security shell" id="securite">
        <div className="security-card">
          <div className="shield" aria-hidden="true">◇<span>✓</span></div>
          <div>
            <p className="section-label">La confiance par conception</p>
            <h2>Vos données immobilières restent sous contrôle.</h2>
          </div>
          <div className="security-list">
            <span>Isolation multi-tenant</span><span>Journal d’audit</span><span>Contrôles par rôle</span><span>Chiffrement</span>
          </div>
        </div>
      </section>

      <section className="waitlist-section shell" id="liste-attente">
        <div className="cta-orbit" />
        <div className="waitlist-copy">
          <img src="/callisto-mark-dark.png" alt="Symbole Callisto Pilot" />
          <p className="section-label section-label-light">Accès fondateur</p>
          <h2>Soyez parmi les premiers à prendre les commandes.</h2>
          <p>
            Callisto Pilot est encore en construction. Les premières organisations seront
            invitées par vagues pour façonner la plateforme avec nous avant son ouverture publique.
          </p>
          <div className="founder-benefits" aria-label="Avantages de la liste d’attente">
            <span><b>01</b> Accès anticipé aux démonstrations privées</span>
            <span><b>02</b> Influence directe sur les priorités produit</span>
            <span><b>03</b> Conditions fondatrices réservées aux pionniers</span>
          </div>
        </div>
        <WaitlistForm />
      </section>

      <footer className="footer shell">
        <a className="brand brand-dark" href="#accueil"><img src="/callisto-mark-light.png" alt=""/><span><strong>Callisto</strong> Pilot</span></a>
        <p>Manage every property, anywhere.</p>
        <div><a href="mailto:contact@callistopilot.com">Contact</a><a href="#liste-attente">Liste d’attente</a><a href="#">Confidentialité</a></div>
        <small>© 2026 Callisto Pilot. Un produit Jupiter Analytica.</small>
      </footer>
    </main>
  );
}
