import "./style.css";
import { CompanyMissionCard } from "../CompanyMissionCard/CompanyMissionCard";
import type { Mission } from "../../../../types/Mission";
import businessHandshake from "../../../../assets/images/businessHandshake.webp";
import womanWithPlant from "../../../../assets/images/womanWithPlant.webp";
import industrialWorker2 from "../../../../assets/images/industrialWorker2.webp";

export const CompanyMission = () => {
  const missionList: Mission[] = [
    {
      id: 1,
      title: "Visão",
      description:
        "Tornar-se líder no setor industrial, sendo a primeira escolha dos clientes e parceiros no Brasil",
      imageUrl: businessHandshake,
      textAlt: "Trabalhador industrial",
      horizontalPosition: "left",
    },
    {
      id: 2,
      title: "Valores",
      description:
        "Atuamos com ética e responsabilidade ambiental, garantindo a segurança dos colaboradores e oferecendo entregas sustentáveis aos nossos clientes",
      imageUrl: womanWithPlant,
      textAlt: "Empresários se cumprimentando",
      horizontalPosition: "center",
    },
    {
      id: 3,
      title: "Missão",
      description:
        "Oferecer soluções industriais inovadoras de excelência, contribuindo para o desenvolvimento do setor e o bem-estar da sociedade",
      imageUrl: industrialWorker2,
      textAlt: "Cientista segurando planta",
      horizontalPosition: "right",
    },
  ];

  return (
    <div id="company-mission" className="px-40 py-10">
      <p className="highlight-title-text text-center">Nossa filosofia</p>
      <ul className="flex flex-col gap-14">
        {missionList.map((mission) => (
          <li key={mission.id}>
            <CompanyMissionCard mission={mission} />
          </li>
        ))}
      </ul>
    </div>
  );
};
