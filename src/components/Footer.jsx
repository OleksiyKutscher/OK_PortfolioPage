import './Footer.css';
import Modal from "./Modal";
import {websiteTechStack} from "../../constants/index.js";
import TechElement from "./TechElement.jsx";
import {useState} from "react";
import AdressImg from "../assets/images/imprint/address.png";
import EmailImg from "../assets/images/imprint/email.png";
import TelImg from "../assets/images/imprint/tel.png";

export default function Footer({masterTl}) {
  const [isImpressumModalOpen, setImpressumModalOpen] = useState(false);
  const [isDatenschutzModalOpen, setDatenschutzModalOpen] = useState(false);
  return (
    <div className="footer">
      <div className="policy-container">
        <div className="policy-text" onClick={() => setImpressumModalOpen(true)}>Impressum / Imprint</div>
        <div className="policy-text" onClick={() => setDatenschutzModalOpen(true)}>Datenschutz / Privacy Policy</div>
      </div>
      <div className="tech-stack">
        <div className="">Website made using:</div>
        <div className="tech-container">
          {websiteTechStack.map((name, index) => (
            <TechElement key={index} name={name} />
          ))}
        </div>
      </div>
      <Modal
        isOpen={isImpressumModalOpen}
        onClose={() => setImpressumModalOpen(false)}
        title="Impressum"
      >
        <div>
          <h3>Angaben gemäß § 5 DDG</h3>
          <h4>Name und Anschrift:</h4>
          <p>Oleksiy Kutscher</p>
          <div className="imprint-img-container"><img src={AdressImg} alt="adresse"/></div> {/*[Straße und Hausnummer][PLZ] [Ort]*/}
          <p>Kontakt:</p>
          <p>Telefon: </p>
            <div className="imprint-img-container"><img src={TelImg} alt="tel"/></div>
            <p>E-Mail: </p>
            <div className="imprint-img-container"><img src={EmailImg} alt="email"/></div>
          <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</h3>
          <p>Oleksiy Kutscher</p>
            <div className="imprint-img-container"><img src={AdressImg} alt="adresse"/></div> {/*[Straße und Hausnummer][PLZ] [Ort]*/}
        </div>
        <div >
          <h2>Nutzungsbedingungen & Haftungsausschluss</h2>
          <h3>1. Inhalte des Onlineangebotes</h3>
          <p>
            Die Inhalte dieser Webseite dienen ausschließlich der persönlichen Information und Vorstellung meiner Person (Oleksiy Kutscher). Ich übernehme keinerlei Gewähr für die Aktualität, Korrektheit oder Vollständigkeit der bereitgestellten Informationen. Haftungsansprüche gegen mich, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
          </p>
          <p>
            Alle auf dieser Webseite gezeigten Firmenlogos und Marken sind Eigentum ihrer jeweiligen Inhaber. Die Darstellung dient lediglich der Illustration und Referenzierung von genutzten Technologien/Plattformen.
          </p>
          <h3>2. Verweise und Links</h3>
          <p>
            Bei direkten oder indirekten Verweisen auf fremde Internetseiten („Links“), die außerhalb meines Verantwortungsbereiches liegen, übernehme ich keine Haftung für deren Inhalte. Zum Zeitpunkt der Linksetzung waren keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten habe ich keinerlei Einfluss.
          </p>
          <h3>3. Urheber- und Kennzeichenrecht</h3>
          <p>
            Alle auf dieser Webseite veröffentlichten Inhalte (Texte, Bilder, Grafiken) unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung.
          </p>
        </div>
        <div>
          <h2>Bildnachweise</h2>
          <p>Tokyo Tower: Foto von <a href="https://unsplash.com/de/@mattmutluu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Matt Mutlu</a> auf <a href="https://unsplash.com/de/fotos/die-spitze-des-eiffelturms-leuchtet-nachts-xn8ZPG6viiw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
          <p>Drone: Foto von <a href="https://unsplash.com/de/@kevinchow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kevin Chow</a> auf <a href="https://unsplash.com/de/fotos/weisser-dji-quadcopter-der-phantom-serie-der-tagsuber-fliegt-9y0U_DEg0XI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
          <p>Batteries: Foto von <a href="https://unsplash.com/de/@roberto_sorin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roberto Sorin</a> auf <a href="https://unsplash.com/de/fotos/braune-grune-und-blaue-runde-knopfe-ZZ3qxWFZNRg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </div>

      </Modal>
      <Modal
        isOpen={isDatenschutzModalOpen}
        onClose={() => setDatenschutzModalOpen(false)}
        title="Datenschutzerklärung"
      >
        <h3>1. Verantwortlicher</h3>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          Oleksiy Kutscher
        </p>
        <div className="imprint-img-container"><img src={AdressImg} alt="adresse"/></div>
        <p>
          E-Mail:
        </p>
        <div className="imprint-img-container"><img src={EmailImg} alt="email"/></div>
        <h3>2. Datenerfassung beim Besuch dieser Website (Server-Logfiles)</h3>
        <p>
          Bei jedem Aufruf dieser Webseite erfasst der Provider der Seiten automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch an uns übermittelt. Dies sind:Browsertyp und BrowserversionVerwendetes BetriebssystemReferrer URL (die zuvor besuchte Seite)Hostname des zugreifenden RechnersUhrzeit der ServeranfrageIP-AdresseDiese Daten sind technisch erforderlich, um die Website stabil und sicher anzuzeigen. Die Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb der Website).
        </p>
        <h3>3. Hosting</h3>
        <p>
          Diese Website wird bei folgendem externen Dienstleister gehostet:[Name des Hosters, z. B. GitHub Inc., Vercel Inc. oder Netlify]Der Hoster verarbeitet die oben genannten Server-Logfiles in unserem Auftrag. Wir haben mit dem Anbieter einen Vertrag über Auftragsverarbeitung (AVV) geschlossen, um den Schutz Ihrer Daten zu gewährleisten.
        </p>
        <h3>4. Keine Cookies / Kein Tracking</h3>
        <p>
          Diese Website verzichtet vollständig auf den Einsatz von Cookies, Analyse-Tools (wie Google Analytics) oder Social-Media-Plugins. Es werden keine Daten über Ihr Nutzerverhalten erhoben oder ausgewertet.
        </p>
        <h3>5. Ihre Rechte</h3>
        <p>
          Sie haben jederzeit das Recht:Auskunft über Ihre bei mir gespeicherten Daten zu erhalten.Die Berichtigung oder Löschung Ihrer Daten zu verlangen.Die Einschränkung der Verarbeitung zu fordern oder der Verarbeitung zu widersprechen.Sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer Daten zu beschweren.
        </p>
      </Modal>
    </div>
  );
}
