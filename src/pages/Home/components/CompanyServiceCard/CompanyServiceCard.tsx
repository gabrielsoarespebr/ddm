import "./style.css";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import type { CompanyServiceProps } from "../../../../types/companyServiceProps";

export const CompanyServiceCard = ({ companyService }: CompanyServiceProps) => {
  const textSplitted = companyService.description.split(
    companyService.descriptionHighlightPart
  );

  // Framer motion
  const companyServiceTextContainer = useRef(null);
  const isInView = useInView(companyServiceTextContainer, { once: true });
  const getImageAnimationState = () => {
    if (!isInView) return "idle";
    return companyService.horizontalPosition === "right" ? "toLeft" : "toRight";
  };

  return (
    <div
      className={
        "company-service flex justify-center items-center gap-20 " +
        (companyService.horizontalPosition === "right"
          ? "flex-row-reverse"
          : "")
      }
    >
      <div className="company-service-image-border w-70 h-105 rounded-lg">
        <motion.img
          variants={{
            idle: { x: 0, y: 0 },
            toRight: { x: 30, y: 30 },
            toLeft: { x: -30, y: -30 },
          }}
          initial="idle"
          animate={getImageAnimationState()}
          transition={{ duration: 2 }}
          src={companyService.imageUrl}
          alt={companyService.textAlt}
          loading="lazy"
          className="w-70 h-105 object-cover rounded-lg"
        ></motion.img>
      </div>
      <motion.div
        ref={companyServiceTextContainer}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 2 }}
      >
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
      </motion.div>
    </div>
  );
};
