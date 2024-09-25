import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogHeader, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { ArrowLineRight, ShoppingBag } from "phosphor-react";
import { toast } from "sonner";

export function Consumer() {

  function handleOverbooking() {
    toast.info(
      'Overbooking, ou preterição de embarque, é uma situação que ocorre quando uma companhia aérea vende mais bilhetes do que a capacidade da aeronave.',
      {duration: 10000}
    )
  }

  return(
    <div className="flex flex-col items-center justify-center max-sm:flex-row max-[450px]:flex-col">
            <div className="flex flex-col items-center gap-7 max-sm:gap-1 max-sm:mr-10 max-[450px]:mr-0">
              <ShoppingBag weight="fill" className="text-blue-sky text-[80px] max-lg:text-[40px]" />
              <h2 className="font-bold text-xl text-blue-sky uppercase text-center mb-2 tracking-widest max-lg:text-lg max-md:text-base max-xs:text-sm">Direito do <br /> Consumidor</h2>
            </div>
            <p className="text-base text-blue-sky italic text-center max-w-80 max-lg:text-xs max-sm:text-base max-xs:text-xs max-[890px]:hidden">
              Pensão alimentícia, guarda de filhos, <br/>
              partilha de bens, união estável, <br/>
              casamento e regime de bens...
            </p>
            
            <AlertDialog>
              <AlertDialogTrigger className="font-medium text-indigo-blue flex items-center gap-2 border-b border-blue-dark-sky/0
                  hover:text-blue-dark-sky mt-4 
                  hover:border-blue-dark-sky/100 
                  transition-all 
                  max-sm:text-base max-xs:text-sm max-xs:hidden"
              >
                    Saiba mais <ArrowLineRight />
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-blue-dark-sky border-gray-700">
                <AlertDialogHeader className="flex flex-row items-center gap-4 text-sand-100"> <ShoppingBag size={32} weight="fill"/> Direito do Consumidor</AlertDialogHeader>
                <ul className="text-sand-50 font-light flex flex-col gap-2">
                  <li>Vícios e defeitos de produtos</li>
                  <Separator />
                  <li>Práticas comerciais abusivas</li>
                  <Separator />
                  <li>Contratos de adesão</li>
                  <Separator />
                  <li>Publicidade enganosa</li>
                  <Separator />
                  <li>Direito de arrependimento</li>
                  <Separator />
                  <li>Cobranças indevidas</li>
                  <Separator />
                  <li><button className="underline hover:text-sun-orange" onClick={handleOverbooking}>Overbooking</button> e idenizações</li>
                  <Separator />
                  <li>Garantias e trocas</li>
                  <Separator />
                  <li>Proteção de dados do consumidor</li>
                  <Separator />
                  <li>Atendimento ao cliente e reclamações</li>
                </ul>
                <AlertDialogAction className="bg-gradient-to-r from-orange to-sun-orange text-gray-200">Fechar</AlertDialogAction>
              </AlertDialogContent>
            </AlertDialog>

            <Drawer>
              <DrawerTrigger onClick={() => window.scrollTo(950,0)}
                className="font-medium text-indigo-blue hidden items-center gap-2 border-b border-blue-dark-sky/0
                  hover:text-blue-dark-sky mt-4 
                  hover:border-blue-dark-sky/100 
                  transition-all 
                  max-sm:text-base max-xs:text-sm max-xs:mt-1 max-xs:flex">Saiba mais <ArrowLineRight />
                </DrawerTrigger>
                <DrawerContent className="h-[calc(100vh-7.5rem)] bg-blue-night/95 backdrop-blur-sm border-gray-800 px-5">
          	      <div className="flex items-center gap-4 mt-10 justify-center">
                    <ShoppingBag weight="fill" size={48} className="text-sand-50"/>
                    <p className="text-sand-50 text-xl font-semibold">Direito do Consumidor</p>
                  </div>

                    <ul className="text-sand-50 text-sm flex flex-col gap-3 mt-4">
                      <li>Vícios e defeitos de produtos</li>
                      <Separator className="text-sand-50" />
                      <li>Práticas comerciais abusivas</li>
                      <Separator className="text-sand-50" />
                      <li>Contratos de adesão</li>
                      <Separator className="text-sand-50" />
                      <li>Publicidade enganosa</li>
                      <Separator className="text-sand-50" />
                      <li>Direito de arrependimento</li>
                      <Separator className="text-sand-50" />
                      <li>Cobranças indevidas</li>
                      <Separator className="text-sand-50" />
                      <li><button onClick={handleOverbooking} className="underline m-b1">Overbooking</button> e Indenizações</li>
                      <Separator className="text-sand-50" />
                      <li>Garantias e trocas</li>
                      <Separator className="text-sand-50" />
                      <li>Proteção de dados do consumidor</li>
                      <Separator className="text-sand-50" />
                      <li>Atendimento ao cliente e reclamações</li>
                    </ul>
                  
                </DrawerContent>
            </Drawer>
          </div>
  )
}