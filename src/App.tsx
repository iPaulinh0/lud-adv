import { WhatsApp } from "./components/WhasApp";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Toaster } from "sonner";

export function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
      <WhatsApp />
      <Toaster richColors position="top-center"/>
    </div>
  )
}

