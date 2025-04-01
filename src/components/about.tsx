"use client";

import { useSectionInView } from "@/src/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("A propos");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>A propos</SectionHeading>
      <p className="mb-3">
        Après avoir obtenu un diplôme de baccalauréat, j'ai décidé de poursuivre
        ma passion pour la comptabilité et j'ai obtenu un diplôme de Master en
        Finances et comptabilité. Je me suis inscrite à divers sites pour
        continuer à apprendre davantage. Je suis également familière avec Sage
        Koala, Odoo, Excel avancé, Pennylane. Je cherche toujours à apprendre de
        nouveaux défis. Je suis actuellement à la recherche d'un poste horaire
        qui correspond à mes compétences. <br />
        {/* <span className="font-medium">full-stack web development</span>.{" "} */}
        En dehors de la Comptabilité et de la finance, J'aime les sports
        extrèmes, faire des randonnées J'aime aussi apprendre de nouvelles
        choses, ce qui me permettent toujours d'être polyvalente dans mes
        réalisations. Je rafraîchis mes connaissances sur le PCG 2005. Et je
        travaille à perfectionner mon anglais
      </p>
    </motion.section>
  );
}
