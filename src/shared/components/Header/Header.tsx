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
            id="company-logo"
          />
          <div className="text-center">
            <h1 className="company-title">DMM</h1>
            <h2 className="title block company-subtitle-first-part -mt-6 uppercase">
              <span>Distribuição e</span>
              <span className="block company-subtitle-second-part">
                Manutenção Industrial
              </span>
            </h2>
          </div>
        </div>
        <div id="contact-info" className="flex justify-between items-center">
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
              <p>Olinda - PE</p>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};
