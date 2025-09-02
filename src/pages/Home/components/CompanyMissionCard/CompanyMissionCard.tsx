import "./style.css";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import type { MissionProps } from "../../../../types/MissionProps";
import { Eye, Gem, Target } from "lucide-react";

export const CompanyMissionCard = ({ mission }: MissionProps) => {
  // Framer motion
  const companyMissionCard = useRef(null);
  const isInView = useInView(companyMissionCard, { once: true });

  return (
    <div
      className={
        (mission.horizontalPosition === "center" && "flex justify-center") ||
        (mission.horizontalPosition === "right" && "flex justify-end") ||
        ""
      }
    >
      <motion.div
        ref={companyMissionCard}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 2 }}
        className="mission-card"
      >
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
      </motion.div>
    </div>
  );
};
