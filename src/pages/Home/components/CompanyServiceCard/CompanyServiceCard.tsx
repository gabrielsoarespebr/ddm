import type { CompanyServiceProps } from "../../../../types/companyServiceProps";
import "./style.css";

export const CompanyServiceCard = ({ companyService }: CompanyServiceProps) => {
  const textSplitted = companyService.description.split(
    companyService.descriptionHighlightPart
  );

  return (
    <div className="company-service flex justify-center items-center gap-20">
      <div className="company-service-image-border w-70 h-105 rounded-lg">
        <img
          src={companyService.imageUrl}
          alt={companyService.textAlt}
          loading="lazy"
          className="w-70 h-105 translate-8 object-cover rounded-lg"
        />
      </div>
      <div>
        <div className="company-service-title">
          <p>{companyService.id}</p>
          <p>{companyService.title}</p>
        </div>
        <p className="company-service-description">
          {textSplitted[0]}
          <span className="highlight-text">
            {companyService.descriptionHighlightPart}
          </span>
          {textSplitted[1]}
        </p>
      </div>
    </div>
  );
};
