import Navigation from '@/sections/Navigation';
import HeroSection from '@/sections/HeroSection';
import EquipmentSection from '@/sections/EquipmentSection';
import ProjectsSection from '@/sections/ProjectsSection';
import MaintenanceSection from '@/sections/MaintenanceSection';
import ContactSection from '@/sections/ContactSection';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div dir="rtl" className="relative">
      <Navigation />
      <main>
        <HeroSection />
        <EquipmentSection />
        <ProjectsSection />
        <MaintenanceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}