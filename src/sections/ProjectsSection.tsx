import { useScrollReveal, useSmokeReveal } from '@/hooks/useScrollReveal';
import { Clock } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    name: 'تجديد مطعم الشاطئ',
    type: 'تجديد كامل',
    typeEn: 'Full Renovation',
    image: '/images/project-1.jpg',
    services: ['إزالة المعدات القديمة', 'تركيب أفران جديدة', 'تجهيز هودات شفط', 'تركيب ثلاجات تجارية'],
    duration: '14 يوم',
  },
  {
    id: 2,
    name: 'مطبخ مطعم النخبة',
    type: 'تجهيز جديد',
    typeEn: 'New Setup',
    image: '/images/project-2.jpg',
    services: ['تصميم مخطط المطبخ', 'تركيب معدات كاملة', 'تمديدات كهربائية', 'اختبار التشغيل'],
    duration: '21 يوم',
  },
  {
    id: 3,
    name: 'صيانة فندق الجوهرة',
    type: 'صيانة',
    typeEn: 'Maintenance',
    image: '/images/project-3.jpg',
    services: ['فحص شامل للمعدات', 'إصلاح أعطال الأفران', 'صيانة دورية للثلاجات', 'تنظيف الهودات'],
    duration: '3 أيام',
  },
];

export default function ProjectsSection() {
  const headerRef = useSmokeReveal<HTMLDivElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.project-card',
    stagger: 0.2,
    y: 50,
    duration: 0.5,
  });

  return (
    <section
      id="projects"
      className="relative z-[1]"
      style={{
        padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 4rem)',
        background: 'var(--color-bg)',
      }}
    >
      {/* Section header */}
      <div className="text-center mb-16" ref={headerRef}>
        <div
          className="mx-auto mb-4"
          style={{
            width: '60px',
            height: '2px',
            background: 'var(--color-accent)',
          }}
        />
        <h2
          className="smoke-heading font-bold text-white"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            lineHeight: 1.0,
          }}
        >
          مشاريعنا
        </h2>
        <p
          className="mt-4 mx-auto"
          style={{
            color: 'var(--color-text-secondary)',
            maxWidth: '500px',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          }}
        >
          نماذج من أعمالنا في تجهيز وصيانة المطابخ التجارية
        </p>
      </div>

      {/* Project cards */}
      <div ref={cardsRef} className="max-w-6xl mx-auto flex flex-col" style={{ gap: 'var(--space-lg)' }}>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card glass-panel overflow-hidden flex flex-col md:flex-row"
            style={{
              minHeight: '400px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
                style={{
                  borderRadius: 'var(--radius-md) 0 0 var(--radius-md)',
                }}
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div
              className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center"
              style={{ gap: 'var(--space-sm)' }}
            >
              {/* Type badge */}
              <span
                className="inline-block self-start px-2 py-0.5 rounded text-xs font-bold"
                style={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-bg)',
                  fontFamily: '"Courier New", monospace',
                  fontSize: '0.75rem',
                  letterSpacing: '0.5px',
                }}
              >
                {project.typeEn}
              </span>

              {/* Project name */}
              <h3
                className="font-semibold text-white"
                style={{
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  lineHeight: 1.2,
                  marginTop: 'var(--space-xs)',
                }}
              >
                {project.name}
              </h3>

              {/* Services */}
              <ul
                className="mt-2 space-y-1"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  lineHeight: 1.7,
                }}
              >
                {project.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span
                      className="inline-block rounded-full flex-shrink-0"
                      style={{
                        width: '6px',
                        height: '6px',
                        background: 'var(--color-accent)',
                      }}
                    />
                    {service}
                  </li>
                ))}
              </ul>

              {/* Duration */}
              <div
                className="flex items-center gap-2 mt-4 font-semibold"
                style={{
                  color: 'var(--color-accent)',
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                }}
              >
                <Clock size={18} />
                <span>مدة التنفيذ: {project.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}