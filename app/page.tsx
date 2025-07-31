"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">Bbbol</div>
            <div className="nav-links">
              <a href="#diensten" className="nav-link">Diensten</a>
              <a href="#aanpak" className="nav-link">Onze aanpak</a>
              <a href="#invite-only" className="nav-link">Invite-only</a>
            </div>
            <div className="nav-status">Contact</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">2 modellen. 1 doel: meer conversie & winst.</div>
            <h1>
              Je betaalt alleen als ik je geld oplever.<br />
              <span className="gradient-text">No Cure, No Pay</span><br />
            </h1>
            <p className="hero-description">
              Exclusieve dienstverlening voor geselecteerde merken die hun Bol.com potentieel 
              willen maximaliseren. Een samenwerking die zichzelf altijd terugbetaalt.
            </p>
            <div className="hero-metrics">
              <div className="metric">
                <div className="metric-number">€650.000+</div>
                <div className="metric-label">Omzet gegenereerd op Bol.com</div>
              </div>
              <div className="metric">
                <div className="metric-number">12-15%</div>
                <div className="metric-label">Gemiddelde conversie</div>
              </div>
              <div className="metric">
                <div className="metric-number">48</div>
                <div className="metric-label">Succesvolle projecten</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="container">
          <div className="proof-content">
            <div className="founder-photo-social">
              <img src="Foto.png" alt="Nick Diepenmaat" />
            </div>
            <div className="proof-quote">
              "Ik beheer je Bol.com-account en zorg voor hoge conversie, zodat jij je kunt focussen op belangrijkere zaken binnen je bedrijf."
            </div>
            <div className="proof-attribution">— Nick Diepenmaat</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services" id="diensten">
        <div className="container">
          <div className="section-header">
            <h2>
              Kies je model<br />
              <span className="gradient-text">Jij betaalt pas als het werkt</span>
            </h2>
          </div>
          
          <div className="services-grid">
            <div className="service-card premium">
              <div className="card-header">
                <div className="card-icon">⚡</div>
                <div className="card-title">Fix & Grow</div>
              </div>
              <div className="card-description">
                Vast tarief vooraf
              </div>
              <div className="card-features">
                <div className="feature">Complete beheer van Bol.com</div>
                <div className="feature">Strategische marktpositionering</div>
                <div className="feature">Conversie-gedreven listingoptimalisatie</div>
                <div className="feature">Performance monitoring & bijsturing</div>
              </div>
              <div className="card-guarantee">
                <strong>Groei-garantie:</strong> Geen verbetering = volledige terugbetaling
              </div>
            </div>

            <div className="service-card">
              <div className="card-header">
                <div className="card-icon">🎯</div>
                <div className="card-title">Pure Performance</div>
              </div>
              <div className="card-description">
                Tarief op basis van extra omzet
              </div>
              <div className="card-features">
                <div className="feature">Geen opstartkosten</div>
                <div className="feature">Betaling gekoppeld aan groei</div>
                <div className="feature">Volledige transparantie in resultaten</div>
                <div className="feature">Maandelijkse performance rapportage</div>
              </div>
              <div className="card-guarantee">
                <strong>Zero-risk model:</strong> Geen groei = geen betaling
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Showcase */}
      <section className="results">
        <div className="container">
          <div className="section-header">
            <h2>Bewezen <span className="gradient-text">resultaten</span></h2>
            <p>Dit bereiken onze partners gemiddeld binnen 90 dagen</p>
          </div>
          
          <div className="results-grid">
            <div className="result-item">
              <div className="result-number">+312%</div>
              <div className="result-label">Zichtbaarheid in zoekresultaten</div>
            </div>
            <div className="result-item">
              <div className="result-number">+156%</div>
              <div className="result-label">Conversieratio verbetering</div>
            </div>
            <div className="result-item">
              <div className="result-number">€67k</div>
              <div className="result-label">Gemiddelde maandelijkse groei</div>
            </div>
            <div className="result-item">
              <div className="result-number">4 weken</div>
              <div className="result-label">Tot eerste meetbare resultaten</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process" id="aanpak">
        <div className="container">
          <div className="section-header">
            <h2>Onze <span className="gradient-text">aanpak</span></h2>
            <p>Elke partner ontvangt een persoonlijke aanpak die zichzelf altijd terugbetaalt</p>
          </div>
          
          <div className="process-steps">
            <div className="step">
              <div className="step-number">
                <span>01</span>
              </div>
              <div className="step-content">
                <h3>Diepgaande analyse</h3>
                <p>We gaan samen kijken waar de potentie zit voor jouw merk op Bol.com</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <span>02</span>
              </div>
              <div className="step-content">
                <h3>Strategisch plan</h3>
                <p>Jouw producten moeten op de best mogelijke manier gepresenteerd worden</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <span>03</span>
              </div>
              <div className="step-content">
                <h3>Performance monitoring</h3>
                <p>Hoe gaan de sales? Halen we de vooraf gestelde doelen? Hierop bijsturen!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial">
        <div className="container">
          <div className="testimonial-content">
            <div className="testimonial-text">
              "Binnen 4 maanden zijn we van een onbekend merk naar marktleider geworden 
              in onze categorie. De ROI was fenomenaal — elke euro investering leverde 
              €4,20 extra omzet op."
            </div>
            <div className="testimonial-author">
              <div className="author-name">Lisa van der Berg</div>
              <div className="author-title">Founder, EcoLiving Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusivity */}
      <section className="exclusivity" id="invite-only">
        <div className="container">
          <div className="exclusivity-content">
            <h2>🔒 Waarom deze site geen <span className="gradient-text">contactformulier heeft?</span></h2>
            <p className="exclusivity-description">
              Mijn filosofie is simpel: als ik jou minder oplever dan jij mij betaalt, werken we niet samen.
            </p>
            <div className="exclusivity-features">
              <div className="exclusivity-item">
                <div className="item-icon">👥</div>
                <div className="item-content">
                  <h4>Persoonlijke aandacht</h4>
                  <p>Directe contact met mij, geen tussenpersonen of wachttijden</p>
                </div>
              </div>
              <div className="exclusivity-item">
                <div className="item-icon">🎯</div>
                <div className="item-content">
                  <h4>Maatwerk strategie</h4>
                  <p>Volledig op maat gemaakte aanpak voor jouw specifieke merk en doelen</p>
                </div>
              </div>
              <div className="exclusivity-item">
                <div className="item-icon">📈</div>
                <div className="item-content">
                  <h4>Maximale focus</h4>
                  <p>Maximale tijd en energie besteed aan jouw succes en groeidoelstellingen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="next-steps">
        <div className="container">
          <div className="steps-content">
            <h2>Ben je <span className="gradient-text">uitgenodigd?</span></h2>
            <p className="steps-description">
              Als je op deze pagina beland bent, heb ik hoogstwaarschijnlijk al een mail naar je gestuurd.
            </p>
            <div className="steps-list">
              <div className="step-item">
                <div className="step-icon">📧</div>
                <div className="step-text">Check je email voor mijn persoonlijke uitnodiging</div>
              </div>
              <div className="step-item">
                <div className="step-icon">📅</div>
                <div className="step-text">Plan een vrijblijvend strategisch gesprek</div>
              </div>
              <div className="step-item">
                <div className="step-icon">🚀</div>
                <div className="step-text">Start je groeitraject op Bol.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">Bbbol</div>
              <div className="footer-tagline">Samen Groeien op Bol.com</div>
            </div>
            <div className="footer-info">
              <div className="footer-status">Invite Only • Nederland & België</div>
              <div className="footer-copyright">© 2025 — Exclusieve partnerships</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}