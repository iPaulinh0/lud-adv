import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";

import WhastAppLogo from './assets/whatsapp.svg'
import { Toaster } from "sonner";

export function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
      <a href="#">
        <img src={WhastAppLogo} alt="" className="w-16 fixed bottom-10 right-10 max-xs:w-12 max-xs:bottom-2 max-xs:right-2" />
      </a>
      <Toaster richColors position="top-center"/>
    </div>
  )
}

