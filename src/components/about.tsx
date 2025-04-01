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
        Diplômée d’un Master en Finance et Comptabilité après un baccalauréat,
        je me passionne pour l'apprentissage continu dans mon domaine.
        Actuellement, je travaille en tant que comptable chez No Comment, où je
        mets en pratique mes compétences et approfondis mon expertise. Je
        maîtrise des outils tels que Sage Koala, Odoo, Excel avancé et
        Pennylane, et je suis constamment à la recherche de nouveaux défis pour
        enrichir mes compétences. Par ailleurs, je perfectionne mon anglais et
        mets à jour sur les nouveaux outils en vogue <br />
        <br />
        {/* <span className="font-medium">full-stack web development</span>.{" "} */}
        Ma polyvalence me permet de m'adapter à plusieurs domaines, notamment la
        relation clientèle, le BTP, l'administration et le design. En dehors de
        la comptabilité et de la finance, je suis adepte de sports extrêmes, de
        randonnées et de nouvelles découvertes, ce qui me permet de développer
        créativité et polyvalence dans mes réalisations. Je suis à la recherche
        d’un poste aligné à mes compétences, où je pourrais continuer à évoluer
        et contribuer efficacement.
        <br />
      </p>
    </motion.section>
  );
}
