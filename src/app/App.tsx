import { HeroSection } from './components/HeroSection';
import { DestinationsGallery } from './components/DestinationsGallery';
import { ChatbotSection } from './components/ChatbotSection';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <DestinationsGallery />
      <ChatbotSection />
      <BookingForm />
      <Footer />
      <ChatWidget />
      <Toaster position="top-right" theme="dark" />
    </div>
  );
}