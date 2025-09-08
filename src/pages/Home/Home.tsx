import "./style.css";
import { CompanyServices } from "./components/CompanyServices/CompanyServices";
import { CompanyMission } from "./components/CompanyMission/CompanyMission";
import { Footer } from "../../shared/components/Footer/Footer";

export const Home = () => {
  return (
    <div>
      <div id="banner">
        <div className="flex flex-col justify-center items-center px-8 lg:px-0">
          <p className="highlight-title-text text-center">Soluções industriais eficazes</p>
          <p className="my-7 text-center">
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
