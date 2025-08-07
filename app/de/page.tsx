"use client";
import Image from 'next/image';
import { useState } from "react";

export default function Home() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">Bbbol</div>
            <div className="nav-links">
              <a href="#diensten" className="nav-link">Dienstleistungen</a>
              <a href="#aanpak" className="nav-link">Unser Ansatz</a>
              <a href="#invite-only" className="nav-link">Invite-only</a>
            </div>
            <div className="nav-status">
              <button 
                onClick={() => setShowPhone(prev => !prev)}
                className="nav-status"
              >
                Kontakt
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Phone Popup */}
      {showPhone && (
        <div className="phone-popup" onClick={() => setShowPhone(false)}>
          <div className="phone-popup-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="phone-popup-title">Kontaktinformationen</h3>
            <p className="phone-popup-text">
              📞 Ruf uns an: <a href="tel:+31640565693" className="phone-popup-link">+31 6 40 56 56 93</a>
            </p>
            <button 
              onClick={() => setShowPhone(false)}
              className="phone-popup-close"
            >
              Schließen
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">2 Modelle. 1 Ziel: mehr Conversion & Gewinn.</div>
            <h1>
              Du zahlst nur, wenn ich dir Umsatz bringe.<br />
              <span className="gradient-text">No Cure, No Pay</span><br />
            </h1>
            <p className="hero-description">
              Exklusiver Service für ausgewählte Marken, die ihr Potenzial auf Bol.com maximieren möchten. Eine Zusammenarbeit, die sich immer auszahlt.
            </p>
            <div className="hero-metrics">
              <div className="metric">
                <div className="metric-number">€650.000+</div>
                <div className="metric-label">Umsatz über Bol.com generiert</div>
              </div>
              <div className="metric">
                <div className="metric-number">12-15%</div>
                <div className="metric-label">Durchschnittliche Conversion</div>
              </div>
              <div className="metric">
                <div className="metric-number">48</div>
                <div className="metric-label">Erfolgreiche Projekte</div>
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
              <Image
                src="/Foto.png"
                alt="Nick Diepenmaat"
                width={200}
                height={200}
                className="your-custom-class"
              />
            </div>
            <div className="proof-quote">
              &ldquo;Ich verwalte dein Bol.com-Konto und sorge für hohe Conversions, damit du dich auf dein Geschäft konzentrieren kannst.&rdquo;
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
              Wähle dein Modell<br />
              <span className="gradient-text">Du zahlst erst, wenn es funktioniert</span>
            </h2>
          </div>

          <div className="services-grid">
            <div className="service-card premium">
              <div className="card-header">
                <div className="card-icon">⚡</div>
                <div className="card-title">Fix & Grow</div>
              </div>
              <div className="card-description">Fester Preis im Voraus</div>
              <div className="card-features">
                <div className="feature">Komplette Verwaltung von Bol.com</div>
                <div className="feature">Strategische Marktpositionierung</div>
                <div className="feature">Conversion-orientierte Optimierung</div>
                <div className="feature">Monitoring & Performance-Steuerung</div>
              </div>
              <div className="card-guarantee">
                <strong>Wachstums-Garantie:</strong> Keine Verbesserung = volle Rückerstattung
              </div>
            </div>

            <div className="service-card">
              <div className="card-header">
                <div className="card-icon">🎯</div>
                <div className="card-title">Pure Performance</div>
              </div>
              <div className="card-description">Vergütung basierend auf Umsatzwachstum</div>
              <div className="card-features">
                <div className="feature">Keine Startkosten</div>
                <div className="feature">Bezahlung nur bei Wachstum</div>
                <div className="feature">Volle Transparenz in den Ergebnissen</div>
                <div className="feature">Monatliches Reporting</div>
              </div>
              <div className="card-guarantee">
                <strong>Zero-Risk-Modell:</strong> Kein Wachstum = keine Zahlung
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Showcase */}
      <section className="results">
        <div className="container">
          <div className="section-header">
            <h2>Bewährte <span className="gradient-text">Ergebnisse</span></h2>
            <p>Unsere Partner erzielen diese Resultate durchschnittlich in 90 Tagen</p>
          </div>

          <div className="results-grid">
            <div className="result-item">
              <div className="result-number">+312%</div>
              <div className="result-label">Sichtbarkeit in Suchergebnissen</div>
            </div>
            <div className="result-item">
              <div className="result-number">+156%</div>
              <div className="result-label">Verbesserung der Conversionrate</div>
            </div>
            <div className="result-item">
              <div className="result-number">€67k</div>
              <div className="result-label">Monatliches Wachstum im Durchschnitt</div>
            </div>
            <div className="result-item">
              <div className="result-number">4 Wochen</div>
              <div className="result-label">Bis zu messbaren Ergebnissen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process" id="aanpak">
        <div className="container">
          <div className="section-header">
            <h2>Unser <span className="gradient-text">Ansatz</span></h2>
            <p>Jeder Partner erhält einen individuellen Plan, der sich auszahlt</p>
          </div>

          <div className="process-steps">
            <div className="step">
              <div className="step-number"><span>01</span></div>
              <div className="step-content">
                <h3>Tiefgehende Analyse</h3>
                <p>Gemeinsam analysieren wir das Potenzial deiner Marke auf Bol.com</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number"><span>02</span></div>
              <div className="step-content">
                <h3>Strategischer Plan</h3>
                <p>Deine Produkte werden optimal präsentiert</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number"><span>03</span></div>
              <div className="step-content">
                <h3>Performance-Monitoring</h3>
                <p>Wie läuft der Verkauf? Erreichen wir die Ziele? Wir optimieren laufend!</p>
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
              &ldquo;Innerhalb von 4 Monaten wurden wir von einer unbekannten Marke zum Marktführer in unserer Kategorie. Der ROI war phänomenal – jeder investierte Euro brachte €4,20 zusätzlichen Umsatz.&rdquo;
            </div>
            <div className="testimonial-author">
              <div className="author-name">Lisa van der Berg</div>
              <div className="author-title">Gründerin, EcoLiving Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusivity */}
      <section className="exclusivity" id="invite-only">
        <div className="container">
          <div className="exclusivity-content">
            <h2>🔒 Warum gibt es <span className="gradient-text">kein Kontaktformular?</span></h2>
            <p className="exclusivity-description">
              Meine Philosophie ist einfach: Wenn ich dir nicht mehr einbringe als du mich kostest, arbeiten wir nicht zusammen. Deshalb wähle ich gezielt Unternehmen mit großem Potenzial aus – und kontaktiere sie proaktiv.
            </p>
            <div className="exclusivity-features">
              <div className="exclusivity-item">
                <div className="item-icon">👥</div>
                <div className="item-content">
                  <h4>Persönliche Betreuung</h4>
                  <p>Direkter Kontakt mit mir – keine Zwischenhändler</p>
                </div>
              </div>
              <div className="exclusivity-item">
                <div className="item-icon">🎯</div>
                <div className="item-content">
                  <h4>Individuelle Strategie</h4>
                  <p>Maßgeschneiderte Herangehensweise für dein Unternehmen</p>
                </div>
              </div>
              <div className="exclusivity-item">
                <div className="item-icon">📈</div>
                <div className="item-content">
                  <h4>Maximale Fokussierung</h4>
                  <p>Voller Einsatz für dein Wachstum und deinen Erfolg</p>
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
            <h2>Bist du <span className="gradient-text">eingeladen?</span></h2>
            <p className="steps-description">
              Wenn du auf dieser Seite gelandet bist, habe ich dir höchstwahrscheinlich bereits eine E-Mail geschickt.
            </p>
            <div className="steps-list">
              <div className="step-item">
                <div className="step-icon">📧</div>
                <div className="step-text">Überprüfe deine E-Mails auf meine persönliche Einladung</div>
              </div>
              <div className="step-item">
                <div className="step-icon">📅</div>
                <div className="step-text">Vereinbare ein unverbindliches Strategiegespräch</div>
              </div>
              <div className="step-item">
                <div className="step-icon">🚀</div>
                <div className="step-text">Starte dein Wachstum auf Bol.com</div>
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
              <div className="footer-tagline">Gemeinsam wachsen auf Bol.com</div>
            </div>
            <div className="footer-info">
              <div className="footer-status">Invite Only • Niederlande & Belgien</div>
              <div className="footer-copyright">© 2025 — Exklusive Partnerschaften</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}