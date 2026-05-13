import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Phone, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const ref = useScrollReveal<HTMLDivElement>({
    y: 50,
    duration: 0.4,
  });

  return (
    <section
      id="contact"
      className="relative z-[1]"
      style={{
        padding: 'clamp(2rem, 4vw, var(--space-lg)) clamp(1rem, 4vw, 4rem) clamp(4rem, 8vw, var(--space-xl))',
        background: 'var(--color-bg)',
      }}
    >
      <div ref={ref} className="text-center max-w-xl mx-auto">
        <h2
          className="font-bold text-white"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            lineHeight: 1.0,
          }}
        >
          تواصل معنا
        </h2>

        <h3
          className="mt-6 font-semibold"
          style={{
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            color: 'var(--color-accent)',
          }}
        >
          Freej Zaman LLC
        </h3>

        <p
          className="mt-2"
          style={{
            color: 'var(--color-text-secondary)',
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
          }}
        >
          فريق متخصص محترف على أعلى مستوى في جميع أنحاء المنطقة
        </p>

        <div className="flex flex-col items-center mt-8" style={{ gap: 'var(--space-sm)' }}>
          {/* Phone */}
          <a
            href="tel:+971563440445"
            className="flex items-center gap-3 transition-all duration-300 group"
            style={{
              color: 'var(--color-text-primary)',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              textDecoration: 'none',
            }}
          >
            <Phone size={20} style={{ color: 'var(--color-accent)' }} />
            <span className="border-b border-transparent group-hover:border-gold transition-all duration-300">
              +971 56 344 0445
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/971563440445"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-all duration-300 group"
            style={{
              color: 'var(--color-text-primary)',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              textDecoration: 'none',
            }}
          >
            <MessageCircle size={20} style={{ color: '#25D366' }} />
            <span className="border-b border-transparent group-hover:border-gold transition-all duration-300">
              واتساب: +971 56 344 0445
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}