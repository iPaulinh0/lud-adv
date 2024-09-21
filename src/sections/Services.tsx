import { Users, Scales, FileText, ShoppingBag } from "phosphor-react"

export function Services() {
  return(
    <div className="w-screen bg-gradient-to-r from-gray-100 to-sand-50 flex flex-col items-center justify-center py-8 px-4 gap-8">
        <h1 className="font-bold text-[2rem] text-blue-sky">ÁREAS DE ATUAÇÃO</h1>

        <div className="flex items-center justify-center gap-10">

          <div className="flex flex-col items-center justify-center">
            <Users size={80} weight="fill" className="text-blue-sky mb-7" />
            <h2 className="font-bold text-xl text-blue-sky uppercase text-center mb-2 tracking-widest">Direito de <br /> Familia</h2>
            <p className="text-base text-blue-sky italic text-center">
              Lorem ipsum dolor sit amet, consectetur <br/>
              adipiscing elit, sed do eiusmod tempor <br/>
              incididunt ut labore et doilore magna i <br/>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Scales size={80} weight="fill" className="text-blue-sky mb-7" />
            <h2 className="font-bold text-xl text-blue-sky uppercase text-center mb-2 tracking-widest">Direito <br /> Criminal</h2>
            <p className="text-base text-blue-sky italic text-center">
              Lorem ipsum dolor sit amet, consectetur <br/>
              adipiscing elit, sed do eiusmod tempor <br/>
              incididunt ut labore et doilore magna i <br/>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <ShoppingBag size={80} weight="fill" className="text-blue-sky mb-7" />
            <h2 className="font-bold text-xl text-blue-sky uppercase text-center mb-2 tracking-widest">Direito do <br /> Consumidor</h2>
            <p className="text-base text-blue-sky italic text-center">
              Lorem ipsum dolor sit amet, consectetur <br/>
              adipiscing elit, sed do eiusmod tempor <br/>
              incididunt ut labore et doilore magna i <br/>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <FileText size={80} weight="fill" className="text-blue-sky mb-7" />
            <h2 className="font-bold text-xl text-blue-sky uppercase text-center mb-2 tracking-widest">Serviços <br /> Extrajudiciais</h2>
            <p className="text-base text-blue-sky italic text-center">
              Lorem ipsum dolor sit amet, consectetur <br/>
              adipiscing elit, sed do eiusmod tempor <br/>
              incididunt ut labore et doilore magna i <br/>
            </p>
          </div>

        </div>

    </div>
  )
}