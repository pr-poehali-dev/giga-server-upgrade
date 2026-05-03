import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/3cccbb48-c7af-4c18-9753-d0ab8e218ffb/files/4f63c554-4a9f-4ce5-84a7-4ddd36274989.jpg"
          alt="Black Panther"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 uppercase">
          Чёрная Пантера
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Оформи заказ — мы доставим силу и стиль прямо к тебе
        </p>
        <button className="mt-10 bg-white text-black px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300">
          Заказать сейчас
        </button>
      </div>
    </div>
  );
}