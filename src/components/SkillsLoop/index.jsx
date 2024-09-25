import { assets } from "../../assets";
import ProgressCard from "../ProgressCard";
import { useEffect, useRef } from "react";

const SkillsLoop = () => {
  const { CSS, HTML, JavaScript, ReactImg, Tailwind, TypeScript, NodeJS } =
    assets;
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const firstElement = marquee.firstElementChild;
    const clone = firstElement.cloneNode(true);
    marquee.appendChild(clone);

    const animate = () => {
      const firstElementWidth = firstElement.offsetWidth;
      marquee.style.transition = "transform 20s linear";
      marquee.style.transform = `translateX(-${firstElementWidth}px)`;

      const onTransitionEnd = () => {
        marquee.style.transition = "none";
        marquee.style.transform = "translateX(0)";
        marquee.appendChild(marquee.firstElementChild);
        setTimeout(() => {
          marquee.style.transition = "transform 20s linear";
          marquee.style.transform = `translateX(-${firstElementWidth}px)`;
          animate();
        }, 50);
      };

      marquee.addEventListener("transitionend", onTransitionEnd, {
        once: true,
      });
    };

    animate();
  }, []);

  return (
    <div className="relative overflow-hidden my-20">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="h-full w-11 bg-gradient-to-r from-dark to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-11 bg-gradient-to-l from-dark to-transparent"></div>
      </div>
      <div className="flex" ref={marqueeRef}>
        <div className="flex flex-nowrap justify-center gap-4 items-center">
          <ProgressCard href={CSS} text="CSS" />
          <ProgressCard href={Tailwind} text="Tailwind" />
          <ProgressCard href={ReactImg} text="React" />
          <ProgressCard href={HTML} text="HTML" />
          <ProgressCard href={JavaScript} text="JavaScript" />
          <ProgressCard href={TypeScript} text="TypeScript" />
          <ProgressCard href={NodeJS} text="NodeJS" />
        </div>
      </div>
    </div>
  );
};

export default SkillsLoop;
