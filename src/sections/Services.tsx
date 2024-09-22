import { Users, Scales, ShoppingBag, ArrowLineRight } from "phosphor-react"

export function Services() {
  return(
    <div className="w-screen bg-gradient-to-r from-gray-100 to-sand-50 flex flex-col items-center justify-center py-8 px-4 gap-8">
        <h1 className="font-bold text-[2rem] text-blue-sky max-sm:text-2xl">ÁREAS DE ATUAÇÃO</h1>

        <div className="flex items-center justify-center gap-10 max-lg:gap-5 max-sm:flex-col">

          <div className="flex flex-col items-center justify-center max-sm:flex-row max-[450px]:flex-col max-[450px]:items-center">
            <div className="flex flex-col items-center gap-7 max-sm:gap-1 max-sm:mr-10 max-[450px]:mr-0">
              <Users weight="fill" className="text-blue-sky text-[80px] max-lg:text-[40px]" />
              <h2 className="font-bold text-xl text-blue-sky uppercase text-center mb-2 tracking-widest max-lg:text-lg max-md:text-base max-xs:text-sm">Direito de <br /> Familia</h2>
            </div>
            <p className="text-base text-blue-sky italic text-center max-lg:text-xs max-sm:text-base max-xs:text-xs">
              Pensão alimentícia, guarda de filhos, <br/>
              partilha de bens, união estável... <br/>
            </p>
            <button className="font-medium text-indigo-blue flex items-center gap-2 border-b border-blue-dark-sky/0 hover:text-blue-dark-sky mt-4 hover:border-blue-dark-sky/100 transition-all">Saiba mais <ArrowLineRight /></button>
          </div>

          <div className="flex flex-col items-center justify-center max-sm:flex-row max-[450px]:flex-col ">
            <div className="flex flex-col items-center gap-7 max-sm:gap-1 max-sm:mr-10 max-[450px]:mr-0">
              <Scales weight="fill" className="text-blue-sky text-[80px] max-lg:text-[40px]" />
              <h2 className="font-bold text-xl text-blue-sky uppercase text-center mb-2 tracking-widest max-lg:text-lg max-md:text-base max-xs:text-sm">Direito <br /> Civil</h2>
            </div>
            <p className="text-base text-blue-sky italic text-center max-lg:text-xs max-sm:text-base max-xs:text-xs">
              Contratos, dívidas e obrigações, <br/>
              reparação de danos, direitos na internet... <br/>
            </p>
            <button className="font-medium text-indigo-blue flex items-center gap-2 border-b border-blue-dark-sky/0 hover:text-blue-dark-sky mt-4 hover:border-blue-dark-sky/100 transition-all">Saiba mais <ArrowLineRight /></button>
          </div>

          <div className="flex flex-col items-center justify-center max-sm:flex-row max-[450px]:flex-col ">
            <div className="flex flex-col items-center gap-7 max-sm:gap-1 max-sm:mr-10 max-[450px]:mr-0">
              <ShoppingBag weight="fill" className="text-blue-sky text-[80px] max-lg:text-[40px]" />
              <h2 className="font-bold text-xl text-blue-sky uppercase text-center mb-2 tracking-widest max-lg:text-lg max-md:text-base max-xs:text-sm">Direito do <br /> Consumidor</h2>
            </div>
            <p className="text-base text-blue-sky italic text-center max-lg:text-xs max-sm:text-base max-xs:text-xs">
              Vícios e defeitos no produto, práticas comerciais <br/>
              abusivas, publicidade enganosa, cobranças indevidas... <br/>
            </p>
            <button className="font-medium text-indigo-blue flex items-center gap-2 border-b border-blue-dark-sky/0 hover:text-blue-dark-sky mt-4 hover:border-blue-dark-sky/100 transition-all">Saiba mais <ArrowLineRight /></button>
          </div>
        </div>

    </div>
  )
}