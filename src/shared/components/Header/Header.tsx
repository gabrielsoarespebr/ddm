import "./style.css";
import dmmLogo from "../../../assets/images/dmmLogo.webp";

export const Header = () => {
  return (
    <header className="p-2">
      <div className="w-1/3 -mt-1 flex items-center">
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
    </header>
  );
};
