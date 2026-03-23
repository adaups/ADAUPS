import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

export function useAnimatedCounter(end: number, duration = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    let rafId: number;
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          rafId = window.requestAnimationFrame(step);
        }
      };
      rafId = window.requestAnimationFrame(step);
    } else {
      setCount(0);
    }
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [end, duration, isInView]);

  return { count, ref };
}
