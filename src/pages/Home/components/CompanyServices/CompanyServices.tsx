import "./style.css";
import industrialGear from "../../../../assets/images/industrialGear.webp";
import industrialWorker from "../../../../assets/images/industrialWorker.webp";
import { CompanyServiceCard } from "../CompanyServiceCard/CompanyServiceCard";
import type { CompanyService } from "../../../../types/companyService";

export const CompanyServices = () => {
  const companyServiceList: CompanyService[] = [
    {
      id: 1,
      title: "Distribuição de peças industriais",
      description:
        "Fornecemos peças industriais essenciais para diversas indústrias, garantindo qualidade e confiabilidade no fornecimento de componentes críticos.",
      descriptionHighlightPart: "peças industriais",
      imageUrl: industrialGear,
      textAlt: "Peças industriais",
      horizontalPosition: "left",
    },
    {
      id: 2,
      title: "Serviços industriais",
      description:
        "Prestamos serviços especializados, como reparo e manutenção de equipamentos industriais, atendendo à necessidade de nossos clientes por soluções rápidas e eficazes para manter a produtividade de suas operações.",
      descriptionHighlightPart:
        "reparo e manutenção de equipamentos industriais",
      imageUrl: industrialWorker,
      textAlt: "Trabalhador na indústria",
      horizontalPosition: "right",
    },
  ];

  return (
    <div id="company-services" className="px-20 py-10">
      <p className="highlight-title-text text-center">Serviços</p>

      {companyServiceList.map((companyService) => (
        <CompanyServiceCard
          key={companyService.id}
          companyService={companyService}
        />
      ))}
    </div>
  );
};
