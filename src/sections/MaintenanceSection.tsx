import { useState, type FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CheckCircle } from 'lucide-react';

export default function MaintenanceSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    issueType: '',
    equipmentType: '',
    location: '',
    phone: '',
    notes: '',
  });

  const formRef = useScrollReveal<HTMLDivElement>({
    y: 50,
    duration: 0.6,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.issueType && formData.equipmentType && formData.location && formData.phone) {
      setSubmitted(true);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    background: 'var(--color-form-bg)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--color-text-primary)',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '6px',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'var(--color-text-secondary)',
  };

  return (
    <section
      id="maintenance"
      className="relative z-[1]"
      style={{
        padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 4rem)',
        background: 'var(--color-bg)',
      }}
    >
      <div
        ref={formRef}
        className="mx-auto"
        style={{
          maxWidth: '700px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: 'clamp(1.5rem, 4vw, var(--space-lg))',
          boxShadow: '0 0 40px rgba(234,181,128,0.05)',
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="font-bold text-white"
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
              lineHeight: 1.0,
            }}
          >
            طلب صيانة
          </h2>
          <p
            className="mt-4"
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            }}
          >
            املأ التفاصيل وسيقوم فريقنا بالتواصل معك في أقرب وقت
          </p>
        </div>

        {submitted ? (
          <div
            className="flex flex-col items-center justify-center text-center"
            style={{ gap: 'var(--space-md)', minHeight: '300px' }}
          >
            <CheckCircle size={64} style={{ color: 'var(--color-success)' }} />
            <h3
              className="font-semibold text-white"
              style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}
            >
              شكراً لك!
            </h3>
            <p style={{ color: 'var(--color-success)', fontSize: '1rem' }}>
              سنقوم بالتواصل معك خلال 24 ساعة
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 'var(--space-md)' }}>
            {/* Issue Type */}
            <div>
              <label style={labelStyle}>نوع المشكلة *</label>
              <select
                required
                value={formData.issueType}
                onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-form-focus)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <option value="" disabled>اختر نوع المشكلة</option>
                <option value="malfunction">عطل في المعدات</option>
                <option value="installation">طلب تركيب</option>
                <option value="routine">صيانة دورية</option>
                <option value="emergency">إصلاح طارئ</option>
                <option value="consultation">استشارة</option>
              </select>
            </div>

            {/* Equipment Type */}
            <div>
              <label style={labelStyle}>نوع المعدة *</label>
              <select
                required
                value={formData.equipmentType}
                onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-form-focus)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <option value="" disabled>اختر نوع المعدة</option>
                <option value="oven">فرن</option>
                <option value="grill">شواية</option>
                <option value="refrigerator">ثلاجة</option>
                <option value="freezer">فريزر</option>
                <option value="hood">هود</option>
                <option value="pizza">معدات بيتزا</option>
                <option value="other">أخرى</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label style={labelStyle}>الموقع *</label>
              <input
                type="text"
                required
                placeholder="أدخل عنوان المطعم أو المنطقة"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-form-focus)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Phone */}
            <div>
              <label style={labelStyle}>رقم الهاتف *</label>
              <input
                type="tel"
                required
                placeholder="+971 XX XXX XXXX"
                pattern="[+0-9\s]*"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-form-focus)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Notes */}
            <div>
              <label style={labelStyle}>ملاحظات</label>
              <textarea
                rows={4}
                placeholder="وصف المشكلة أو الطلب..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-form-focus)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full font-bold transition-all duration-300 active:scale-[0.98]"
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--color-accent)',
                color: 'var(--color-bg)',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-accent-strong)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-accent)';
              }}
            >
              إرسال الطلب
            </button>
          </form>
        )}
      </div>
    </section>
  );
}