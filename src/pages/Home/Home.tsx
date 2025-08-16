import "./style.css";
import { CompanyServices } from "./components/CompanyServices/CompanyServices";
import { CompanyMission } from "./components/CompanyMission/CompanyMission";
import { Footer } from "../../shared/components/Footer/Footer";

export const Home = () => {
  return (
    <div>
      <div id="banner">
        <div className="flex flex-col justify-center items-center">
          <p className="highlight-title-text">Soluções industriais eficazes</p>
          <p className="my-7">
            Peças, serviços e suporte técnico que aumentam a performance da sua
            operação.
          </p>

          <button id="bannerCTA">Conheça nossos produtos</button>
        </div>
      </div>

      <CompanyServices />
      <CompanyMission />
      <Footer />
    </div>
  );
};
