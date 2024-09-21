import { Contact } from "./sections/Contact";
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
    </div>
  )
}

