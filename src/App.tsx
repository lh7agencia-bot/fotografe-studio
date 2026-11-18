/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesAndAbout } from './components/ServicesAndAbout';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-slate-900">
      <Header />
      <main>
        <HeroSection />
        <ServicesAndAbout />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
