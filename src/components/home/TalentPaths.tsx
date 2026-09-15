"use client";

import { talentPaths } from "@/lib/content";
import { AnimatedSection, FadeItem, fadeUp } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Link from "next/link";

export function TalentPaths() {
  return (
    <AnimatedSection id="talent" className="talent" stagger>
      <FadeItem className="section-head">
        <div>
          <p className="eyebrow">{talentPaths.eyebrow}</p>
        </div>
        <h2>
          {talentPaths.title.map((line, i) => (
            <span key={line}>
              {line}
              {i < talentPaths.title.length - 1 && <br />}
            </span>
          ))}
        </h2>
      </FadeItem>
      <div className="talent-paths">
        {talentPaths.paths.map((path) => (
          <motion.article key={path.no} variants={fadeUp} className={path.young ? "young" : ""}>
            <p className="path-no">{path.no}</p>
            <h3>{path.title}</h3>
            <p>{path.body}</p>
            {path.items && (
              <ul>
                {path.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            <Link href={path.href}>{path.cta}</Link>
          </motion.article>
        ))}
      </div>
      <FadeItem>
        <p className="talent-note">{talentPaths.note}</p>
      </FadeItem>
    </AnimatedSection>
  );
}
