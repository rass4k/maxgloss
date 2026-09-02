import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import AntesDespues from "@/components/AntesDespues";
import Proceso from "@/components/Proceso";
import Ceramico from "@/components/Ceramico";
import Trabajos from "@/components/Trabajos";
import Cotizador from "@/components/Cotizador";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] pb-[68px] text-white md:pb-0">
      <Navbar />

      <Hero />

      <Servicios />

      <AntesDespues />

      <Proceso />

      <Ceramico />

      <Trabajos />

      <Cotizador />

      <Footer />

      <WhatsAppFloating />

      <MobileBottomNav />
    </main>
  );
}