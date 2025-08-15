import "./style.css";
import type { MissionProps } from "../../../../types/MissionProps";
import { Eye, Gem, Target } from "lucide-react";

export const CompanyMissionCard = ({ mission }: MissionProps) => {
  return (
    <div
      className={
        (mission.horizontalPosition === "center" && "flex justify-center") ||
        (mission.horizontalPosition === "right" && "flex justify-end") ||
        ""
      }
    >
      <div className="mission-card">
        <div>
          <div className="mission-title flex items-center gap-3">
            {(mission.title === "Visão" && <Eye />) ||
              (mission.title === "Valores" && <Gem />) ||
              (mission.title === "Missão" && <Target />)}
            <p>{mission.title}</p>
          </div>
          <p className="mission-description">{mission.description}</p>
        </div>
        <img src={mission.imageUrl} alt={mission.textAlt} loading="lazy" />
      </div>
    </div>
  );
};
