export function Navbar() {
  return(
    <div className="flex justify-center items-center gap-10 max-[1000px]:hidden">
      <a href="#home" className="font-medium flex items-center gap-2 text-base text-sand-50 border-b border-indigo-blue border-hidden hover:border-solid hover:text-indigo-blue transition-all">
        Início
      </a>
      <a href="#services" className="font-medium text-base text-sand-50 border-b border-indigo-blue border-hidden hover:border-solid hover:text-indigo-blue transition-all">
        Serviços
      </a>
      <a href="#contact" className="font-medium text-base text-sand-50 border-b border-indigo-blue border-hidden hover:border-solid hover:text-indigo-blue transition-all">
        Contato
      </a>
    </div>
  )
}