import { Component, h } from '@stencil/core';

@Component({
  tag: 'abb-home',
  styleUrl: 'abb-home.css',
  shadow: true
})
export class Home {

  render() {
    return (
      <div>
        <div class='container'>
          <abb-typography variant='h1'>
            Über uns
          </abb-typography>
          <abb-typography>
            Für KMU, Vereine oder Privatpersonen realisieren wir verschiedenste Foto- und Videoarbeiten, sowie diverse grafische Projekte zu zahlbaren Konditionen. Nimm mit uns Kontakt auf, um die Möglichkeiten zu besprechen.
          </abb-typography>
          <abb-typography>
            Nils und Marco ergänzen sich mit ihren Stärken optimal. Während Nils sich das Handwerk der Video- und Fotografie angeeignet hat, versteht es Marco, mit den verschiedenen Grafikprogrammen kreative Produkte zu schaffen, welche auf Wunsch auch mit marketingstrategischen Überlegungen korrespondieren.
            </abb-typography>
          <div class='cards'>
            <div class='card'>
              <img src='assets/images/Nils_Portrait-1.jpg' alt='Nils Benz' />
              <div class='person-information'>
                <div>
                  <abb-typography variant='h4'>
                    Nils Benz
                  </abb-typography>
                  <abb-typography>
                    Video- und Fotografie
                  </abb-typography>
                </div>
                <a href='https://nilsbenz.ch'>
                  <abb-button color='primary' variant='contained'>
                    Mehr
                  </abb-button>
                </a>
              </div>
            </div>
            <div class='card'>
              <img src='assets/images/Marco_Portrait-1.jpg' alt='Marco Nussbaumer' />
              <div class='person-information'>
                <div>
                  <abb-typography variant='h4'>
                    Marco Nussbaumer
                  </abb-typography>
                  <abb-typography>
                    Grafikdesign
                  </abb-typography>
                </div>
                <a href='mailto:marco.nussbaumer@gmail.com'>
                  <abb-button color='primary' variant='contained'>
                    Mehr
                  </abb-button>
                </a>
              </div>
            </div>
          </div>
          <abb-typography>
            Ausgerüstet mit einer professionellen Kamera, einer hochwertigen Videodrohne und den entsprechenden Bild- und Videobearbeitungsprogrammen, setzt Nils kreative, emotionale und aufregende Bilder und Videos um. Mit seinem technischen Wissen entstehen aufregende Kurzfilme mit möglichen Spezial-Effekten.
            </abb-typography>
          <abb-typography>
            Als ausgebildeter Kommunikationsplaner versteht er es nicht nur Printmedien, Online-Medien, Logos etc. optisch interessant zu gestalten, sondern sieht auch den marketingstrategischen Mehrwert, welches Ziel verfolgt wird und wie dieses erreicht werden kann. Marco berät demnach Kunden in Marketingfragen optimal und behält über Konzept, Timing und Budget stets den Überblick.
            </abb-typography>
        </div>
      </div>
    );
  }
}
