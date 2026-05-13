export default function Footer() {
  return (
    <footer
      className="relative z-[1]"
      style={{
        padding: 'var(--space-md) clamp(1rem, 4vw, 4rem)',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg)',
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <span
          className="text-sm"
          style={{
            color: 'var(--color-text-secondary)',
            fontWeight: 500,
          }}
        >
          Freej Zaman LLC
        </span>
        <span
          className="text-sm"
          style={{
            color: 'var(--color-text-secondary)',
            opacity: 0.5,
            fontWeight: 500,
          }}
        >
          جميع الحقوق محفوظة
        </span>
      </div>
    </footer>
  );
}