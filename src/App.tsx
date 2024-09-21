import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";

export function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

