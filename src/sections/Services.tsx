import { Users, Scales, FileText, ShoppingBag } from "phosphor-react"

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
              Lorem ipsum dolor sit amet, consectetur <br/>
              adipiscing elit, sed do eiusmod tempor <br/>
              incididunt ut labore et doilore magna i <br/>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center max-sm:flex-row max-[450px]:flex-col ">
            <div className="flex flex-col items-center gap-7 max-sm:gap-1 max-sm:mr-10 max-[450px]:mr-0">
              <Scales weight="fill" className="text-blue-sky text-[80px] max-lg:text-[40px]" />
              <h2 className="font-bold text-xl text-blue-sky uppercase text-center mb-2 tracking-widest max-lg:text-lg max-md:text-base max-xs:text-sm">Direito <br /> Criminal</h2>
            </div>
            <p className="text-base text-blue-sky italic text-center max-lg:text-xs max-sm:text-base max-xs:text-xs">
              Lorem ipsum dolor sit amet, consectetur <br/>
              adipiscing elit, sed do eiusmod tempor <br/>
              incididunt ut labore et doilore magna i <br/>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center max-sm:flex-row max-[450px]:flex-col ">
            <div className="flex flex-col items-center gap-7 max-sm:gap-1 max-sm:mr-10 max-[450px]:mr-0">
              <ShoppingBag weight="fill" className="text-blue-sky text-[80px] max-lg:text-[40px]" />
              <h2 className="font-bold text-xl text-blue-sky uppercase text-center mb-2 tracking-widest max-lg:text-lg max-md:text-base max-xs:text-sm">Direito do <br /> Consumidor</h2>
            </div>
            <p className="text-base text-blue-sky italic text-center max-lg:text-xs max-sm:text-base max-xs:text-xs">
              Lorem ipsum dolor sit amet, consectetur <br/>
              adipiscing elit, sed do eiusmod tempor <br/>
              incididunt ut labore et doilore magna i <br/>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center max-sm:flex-row max-[450px]:flex-col">
            <div className="flex flex-col items-center gap-7 max-sm:gap-1 max-sm:mr-10 max-[450px]:mr-0">
              <FileText weight="fill" className="text-blue-sky text-[80px] max-lg:text-[40px]" />
              <h2 className="font-bold text-xl text-blue-sky uppercase text-center mb-2 tracking-widest max-lg:text-lg max-md:text-base max-xs:text-sm">Serviços <br /> Extrajudiciais</h2>
            </div>
            <p className="text-base text-blue-sky italic text-center max-lg:text-xs max-sm:text-base max-xs:text-xs">
              Lorem ipsum dolor sit amet, consectetur <br/>
              adipiscing elit, sed do eiusmod tempor <br/>
              incididunt ut labore et doilore magna i <br/>
            </p>
          </div>

        </div>

    </div>
  )
}