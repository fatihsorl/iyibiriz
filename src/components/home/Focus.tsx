"use client";

import { focus } from "@/lib/content";
import { AnimatedSection, FadeItem, fadeUp } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

const toneClass = { ice: "", gold: "gold", navy: "navy" } as const;

export function Focus() {
  return (
    <AnimatedSection id="focus" className="focus" stagger>
      <FadeItem className="focus-title">
        <div>
          <p className="eyebrow">{focus.eyebrow}</p>
        </div>
        <h2>
          {focus.title.map((line, i) => (
            <span key={line}>
              {line}
              {i < focus.title.length - 1 && <br />}
            </span>
          ))}
        </h2>
      </FadeItem>
      <div className="focus-grid">
        {focus.cards.map((card) => (
          <MotionLink
            key={card.no}
            variants={fadeUp}
            href={card.href}
            className={`focus-card ${toneClass[card.tone]}`}
          >
            <span className="focus-no">{card.no}</span>
            <p className="kicker">{card.kicker}</p>
            <h3>
              {card.title.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < card.title.length - 1 && <br />}
                </span>
              ))}
            </h3>
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <b>{card.cta}</b>
          </MotionLink>
        ))}
      </div>
    </AnimatedSection>
  );
}
