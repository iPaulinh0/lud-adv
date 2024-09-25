import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import WhatsAppLogo from '../assets/whatsapp.svg'
import QRCode from '../assets/whatsapp-link.png'
import { Separator } from "./ui/separator";

export function WhatsApp() {

  return(
    <div>
      <Popover>
        <PopoverTrigger className="fixed bottom-10 right-10 max-xs:bottom-2 max-xs:right-2">
          <img src={WhatsAppLogo} alt="" className="w-16 max-xs:w-12 " />
        </PopoverTrigger>
        <PopoverContent className="flex flex-col justify-center gap-2 bg-blue-dark-sky w-56 h-80 text-sand-50 text-sm border-gray-700" align="end">
          <p>Escaneie o QRCode</p>
          <img src={QRCode} alt="QRCode para redirecionar pro WhatsApp" className="rounded-lg"/>
          <Separator />
          <p>Ou siga o link abaixo:</p>
          <a href="https://dm.wa.link/59sl5s" target="_blank" className="bg-gradient-to-r from-orange to-sun-orange rounded-sm text-center py-1 text-sm text-gray-100 font-semibold">WhatsApp</a>
        </PopoverContent>
      </Popover>
    </div>
  )
}