import { Family } from "./services/family"
import { Civil } from "./services/civil"
import { Consumer } from "./services/consumer"

export function Services() {
  return(
    <div id="services" className="w-screen bg-gradient-to-r from-gray-100 to-sand-50 flex flex-col items-center justify-center py-8 px-4 gap-8">
        <h1 className="font-bold text-3xl text-blue-sky max-sm:text-xl">ÁREAS DE ATUAÇÃO</h1>

        <div className="flex gap-32 max-lg:gap-5 max-[890px]:gap-20 max-sm:flex-col max-xs:gap-10">
          <Family />
          <Civil />
          <Consumer />
        </div>

    </div>
  )
}