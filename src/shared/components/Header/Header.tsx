import "./style.css";
import dmmLogo from "../../../assets/images/dmmLogo.webp";
import { Navbar } from "../Navbar/Navbar";
import { MapPinned, Phone } from "lucide-react";
import { CartBtn } from "../CartBtn/CartBtn";

export const Header = () => {
  return (
    <header className="flex">
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
      <div className="flex flex-col justify-between">
        <div className="pt-6 flex justify-around items-center">
          <div id="contactInfo" className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Phone />
              <div>
                <p>WhatsApp:</p>
                <p>+55 81 XXXX XXXX</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPinned />
              <div>
                <p>Endereço:</p>
                <p>XXXXXXXX</p>
              </div>
            </div>
          </div>
          <CartBtn />
        </div>
        <Navbar />
      </div>
    </header>
  );
};
