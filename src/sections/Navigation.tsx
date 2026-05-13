import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'المعدات', href: '#equipment' },
  { label: 'المشاريع', href: '#projects' },
  { label: 'طلب صيانة', href: '#maintenance' },
  { label: 'تواصل معنا', href: '#contact' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(currentScrollY);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        setActiveSection(`#${section.id}`);
      }
    });
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 right-0 left-0 z-50 h-16 px-4 md:px-8 flex items-center justify-between transition-transform duration-400 ease-out"
        style={{
          background: 'rgba(28,29,32,0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        <div className="text-sm font-bold text-white tracking-widest">
          FREEJ ZAMAN
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium transition-colors duration-300 hover:text-gold"
              style={{
                color: activeSection === link.href ? '#eab580' : 'rgba(255,255,255,0.8)',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#maintenance')}
            className="text-sm font-medium px-5 py-2 border border-gold text-gold rounded-pill transition-all duration-300 hover:bg-gold hover:text-bg"
          >
            طلب صيانة
          </button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8"
          style={{ background: 'var(--color-bg)' }}
        >
          <button
            className="absolute top-4 left-4 text-white p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-2xl font-bold text-white transition-colors duration-300 hover:text-gold"
              style={{
                animation: `reveal-up 0.3s ease-out ${i * 0.05}s forwards`,
                opacity: 0,
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}