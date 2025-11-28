import "./style.css";
import { CompanyServices } from "./components/CompanyServices/CompanyServices";
import { CompanyMission } from "./components/CompanyMission/CompanyMission";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div id="banner">
        <div className="flex flex-col justify-center items-center px-8 lg:px-0">
          <p className="highlight-title-text text-center">
            Soluções industriais eficazes
          </p>
          <p className="my-7 text-center">
            Peças, serviços e suporte técnico que aumentam a performance da sua
            operação.
          </p>

          <Link to="/catalogo" id="bannerCTA">
            Conheça nossos produtos
          </Link>
        </div>
      </div>

      <CompanyServices />
      <CompanyMission />
    </div>
  );
};
