import "./style.css";
import dmmLogo from "../../../assets/images/dmmLogo.webp";
import { Navbar } from "../Navbar/Navbar";
import { MapPinned, Phone } from "lucide-react";

export const Header = () => {
  return (
    <header>
      <div>
        <div id="logoContainer" className="flex items-center">
          <img
            src={dmmLogo}
            alt="Logotipo da DDM Distribuição e Manutenção Industrial"
            id="companyLogo"
          />
          <div className="text-center">
            <h1 className="title companyTitle">DMM</h1>
            <h2 className="title block companySubtitleFirstPart -mt-6 uppercase">
              <span>Distribuição e</span>
              <span className="block companySubtitleSecondPart">
                Manutenção Industrial
              </span>
            </h2>
          </div>
        </div>
        <div id="contactInfo" className="flex justify-between items-center">
          <div id="phone" className="flex items-center gap-4">
            <Phone />
            <div>
              <p className="font-semibold">WhatsApp:</p>
              <p>+55 81 9 8302 2802</p>
            </div>
          </div>
          <div id="address" className="flex items-center gap-4">
            <MapPinned />
            <div>
              <p className="font-semibold">Endereço:</p>
              <p>Rua Maria Gomes da Silva, n° 105</p>
              <p>Ouro Preto, Olinda - PE, CEP 53370-680</p>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};
