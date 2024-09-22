import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { ArrowLineRight, Users } from "phosphor-react";

export function Family() {
  return(
    <div className="flex flex-col items-center justify-center max-sm:flex-row max-[450px]:flex-col">
            <div className="flex flex-col items-center gap-7 max-sm:gap-1 max-sm:mr-10 max-[450px]:mr-0">
              <Users weight="fill" className="text-blue-sky text-[80px] max-lg:text-[40px]" />
              <h2 className="font-bold text-xl text-blue-sky uppercase text-center mb-2 tracking-widest max-lg:text-lg max-md:text-base max-xs:text-sm">Direito de <br /> Familia</h2>
            </div>
            <p className="text-base text-blue-sky italic text-center max-w-80 max-lg:text-xs max-sm:text-base max-xs:text-xs max-[890px]:hidden">
              Pensão alimentícia, guarda de filhos, <br/>
              partilha de bens, união estável, <br/>
              casamento e regime de bens...
            </p>
            <Drawer>
              <DrawerTrigger onClick={() => window.scrollTo(0,0)}
                className="font-medium text-indigo-blue flex items-center gap-2 border-b border-blue-dark-sky/0
                  hover:text-blue-dark-sky mt-4 
                  hover:border-blue-dark-sky/100 
                  transition-all 
                  max-sm:text-base max-xs:text-sm max-xs:mt-1">Saiba mais <ArrowLineRight />
                </DrawerTrigger>
                <DrawerContent className="h-[calc(100vh-7.5rem)] bg-blue-night/95 backdrop-blur-sm border-gray-800 px-5">
          	      <div className="flex items-center gap-4 mt-10 justify-center">
                    <Users weight="fill" size={48} className="text-sand-50"/>
                    <p className="text-sand-50 text-xl font-semibold">Direito de Família</p>
                  </div>

                    <ul className="text-sand-50 text-sm flex flex-col gap-3 mt-4">
                      <li>Pensão alimentícia</li>
                      <Separator className="text-sand-50" />
                      <li>Guarda de filhos</li>
                      <Separator className="text-sand-50" />
                      <li>Adoção</li>
                      <Separator className="text-sand-50" />
                      <li>Partilha de bens</li>
                      <Separator className="text-sand-50" />
                      <li>União estável</li>
                      <Separator className="text-sand-50" />
                      <li>Reconhecimento de Paternidade/Maternidade</li>
                      <Separator className="text-sand-50" />
                      <li>Regulamentação de visitas</li>
                      <Separator className="text-sand-50" />
                      <li>Tutela e Curatela</li>
                      <Separator className="text-sand-50" />
                      <li>Violência Doméstica e Familiar</li>
                      <Separator className="text-sand-50" />
                      <li>Alteração de nome</li>
                      <Separator className="text-sand-50" />
                      <li>Casamento e Regime de bens</li>
                      <Separator />
                      <li>Alvarás judiciais em assuntos familiares</li>
                    </ul>
                  
                </DrawerContent>
            </Drawer>
          </div>
  )
}