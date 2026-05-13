import { useScrollReveal } from '@/hooks/useScrollReveal';

const equipmentData = [
  {
    id: 1,
    title: 'أفران',
    titleEn: 'Ovens',
    description: 'أفران تجارية عالية الأداء لتلبية جميع احتياجات الطهي في مطبخك',
    image: '/images/equipment-ovens.jpg',
  },
  {
    id: 2,
    title: 'شوايات',
    titleEn: 'Grills',
    description: 'شوايات ثقيلة ومتينة للاستخدام التجاري المكثف',
    image: '/images/equipment-grills.jpg',
  },
  {
    id: 3,
    title: 'ثلاجات',
    titleEn: 'Refrigerators',
    description: 'أنظمة تبريد تجارية متطورة لحفظ الطازج',
    image: '/images/equipment-refrigerators.jpg',
  },
  {
    id: 4,
    title: 'فريزرات',
    titleEn: 'Freezers',
    description: 'وحدات تجميد صناعية لحفظ المنتجات بأعلى جودة',
    image: '/images/equipment-freezers.jpg',
  },
  {
    id: 5,
    title: 'هودات',
    titleEn: 'Hoods',
    description: 'هودات شفط وتهوية احترافية لبيئة عمل آمنة',
    image: '/images/equipment-hoods.jpg',
  },
  {
    id: 6,
    title: 'معدات بيتزا',
    titleEn: 'Pizza Equipment',
    description: 'محطات تحضير بيتزا كاملة بأحدث التقنيات',
    image: '/images/equipment-pizza.jpg',
  },
];

export default function EquipmentSection() {
  const gridRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.equipment-card',
    stagger: 0.1,
    y: 50,
    duration: 0.5,
  });

  return (
    <section
      id="equipment"
      className="relative z-[1]"
      style={{
        minHeight: '100vh',
        padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 4rem)',
        background: 'linear-gradient(to bottom, #1c1d20 0%, transparent 30%), #1c1d20',
      }}
    >
      {/* Section header */}
      <div className="text-center mb-16">
        <div
          className="mx-auto mb-4"
          style={{
            width: '60px',
            height: '2px',
            background: 'var(--color-accent)',
          }}
        />
        <h2
          className="font-bold text-white"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            lineHeight: 1.0,
          }}
        >
          المعدات
        </h2>
        <p
          className="mt-4 mx-auto"
          style={{
            color: 'var(--color-text-secondary)',
            maxWidth: '500px',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          }}
        >
          نوفر أحدث المعدات التجارية للمطابخ المطاعم بأعلى جودة
        </p>
      </div>

      {/* Equipment grid */}
      <div
        ref={gridRef}
        className="grid gap-6 max-w-7xl mx-auto"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        }}
      >
        {equipmentData.map((item) => (
          <div
            key={item.id}
            className="equipment-card glass-panel overflow-hidden group"
            style={{
              padding: 'var(--space-md)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-surface)',
            }}
          >
            <div className="overflow-hidden rounded" style={{ height: '200px' }}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div
              className="inline-block mt-4 px-2 py-0.5 rounded text-xs font-bold"
              style={{
                background: 'var(--color-accent)',
                color: 'var(--color-bg)',
                fontFamily: '"Courier New", monospace',
                fontSize: '0.75rem',
                letterSpacing: '0.5px',
              }}
            >
              {item.titleEn}
            </div>

            <h3
              className="mt-2 font-semibold text-white"
              style={{
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                lineHeight: 1.2,
              }}
            >
              {item.title}
            </h3>

            <p
              className="mt-2"
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                lineHeight: 1.7,
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}