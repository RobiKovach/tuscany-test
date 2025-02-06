import React, { useState, useEffect, useRef } from "react";

export default function AnimatedNumber({ number, label }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const ref = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateNumber(0, number, 2000);
          observer.current.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => observer.current?.disconnect();
  }, [number]);

  const animateNumber = (start, end, duration) => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCurrentNumber(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  return (
    <div className="numbers-welcome__item item-welcome" ref={ref}>
      <div className="item-welcome__title">{currentNumber}+</div>
      <div className="item-welcome__description">{label}</div>
    </div>
  );
}
