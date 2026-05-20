"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  stagger?: boolean;
  /** Sayfa açılışında hemen göster — route geçişinde scroll sıçramasını önler */
  immediate?: boolean;
};

export function AnimatedSection({
  children,
  className = "",
  id,
  stagger: useStagger = false,
  immediate = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const show = immediate || isInView;

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={immediate ? false : "hidden"}
      animate={show ? "visible" : "hidden"}
      variants={useStagger ? stagger : fadeUp}
    >
      {children}
    </motion.section>
  );
}

export function FadeItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
