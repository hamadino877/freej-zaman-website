import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal<T extends HTMLElement>(
  options: {
    y?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    start?: string;
    childSelector?: string;
  } = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(element.children.length > 0 && options.childSelector
        ? element.querySelectorAll(options.childSelector)
        : element, { opacity: 1, y: 0 });
      return;
    }

    const targets = options.childSelector
      ? element.querySelectorAll(options.childSelector)
      : element;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y: options.y ?? 50,
        opacity: 0,
        duration: options.duration ?? 0.5,
        delay: options.delay ?? 0,
        stagger: options.stagger ?? 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: options.start ?? 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, element);

    return () => ctx.revert();
  }, [options.y, options.duration, options.delay, options.stagger, options.start, options.childSelector]);

  return ref;
}

export function useSmokeReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      element.classList.add('is-visible');
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => element.classList.add('is-visible'),
        once: true,
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return ref;
}