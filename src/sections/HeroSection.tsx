import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const container = textContainerRef.current;
    const hero = heroRef.current;
    if (!container || !hero) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      container.style.opacity = '1';
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(container, {
        opacity: 0,
        scrollTrigger: {
          trigger: hero,
          start: 'bottom top',
          end: 'bottom -50%',
          scrub: true,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* 🔥 BACKGROUND SMOKE VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          zIndex: 0,
          filter: isMobile
            ? 'blur(60px) saturate(0.3)'
            : 'blur(100px) saturate(0.3)',
        }}
      >
        <source src="/hero-smoke.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.6)', zIndex: 1 }}
      />

      {/* LEFT LABEL */}
      <div
        className="absolute z-[3] flex flex-col items-start"
        style={{
          top: '50%',
          right: '8%',
          transform: 'translateY(-50%)',
        }}
      >
        <div
          style={{
            color: '#eab580',
            opacity: 0.6,
            fontSize: 'clamp(0.7rem, 1vw, 0.875rem)',
            fontWeight: 700,
            letterSpacing: '0.2em',
            marginBottom: '10px',
          }}
        >
          FREEJ ZAMAN LLC
        </div>

        <div
          style={{
            color: '#eab580',
            opacity: 0.6,
            fontSize: 'clamp(0.7rem, 1vw, 0.875rem)',
            fontWeight: 700,
            letterSpacing: '0.2em',
          }}
        >
          فريج زمان
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div
        ref={textContainerRef}
        className="absolute flex flex-col items-center justify-center px-5"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '900px',
          zIndex: 2,
        }}
      >
        {/* 🔥 TEXT VIDEO (CORRECT WAY) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            zIndex: 0,
            opacity: 0.25, // 👈 مهم جدًا (بدل 0)
            filter: 'brightness(1.2) contrast(1.1)',
          }}
        >
          <source src="/hero-text-video.mp4" type="video/mp4" />
        </video>

        {/* HEADING */}
        <h1
          className="relative z-10 font-black text-center"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            lineHeight: 1,
            color: 'white',
            margin: 0,
          }}
        >
          حلول المطابخ المتكاملة
        </h1>

        {/* DESCRIPTION */}
        <p
          className="relative z-10 text-center mt-6"
          style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            maxWidth: '440px',
            lineHeight: 1.7,
          }}
        >
          تجهيز المطاعم الجديدة والحالية وصيانة المعدات في جميع أنحاء المنطقة
        </p>

        {/* BUTTON */}
        <button
          onClick={() => scrollToSection('#maintenance')}
          className="relative z-10 mt-8 font-semibold transition-all duration-300"
          style={{
            padding: '12px 32px',
            border: '1px solid #eab580',
            borderRadius: '9999px',
            color: '#eab580',
            background: 'transparent',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#eab580';
            e.currentTarget.style.color = '#1c1d20';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#eab580';
          }}
        >
          طلب صيانة
        </button>
      </div>

      {/* SCROLL ICON */}
      <button
        onClick={() => scrollToSection('#equipment')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] animate-bounce"
      >
        <ChevronDown size={32} style={{ color: '#eab580', opacity: 0.7 }} />
      </button>
    </section>
  );
}
