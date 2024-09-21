import { Inputs } from "../components/Inputs";
import { SelectionField } from "../components/SelectionField";

export function Contact() {
  return(
    <div className="flex flex-col mt-16 gap-9 items-center w-screen">
      <h1 className="font-bold text-[2rem] text-gray-200">ENRTRE EM CONTATO</h1>

      <form>
        <Inputs type="text" placeholder="Insira seu nome completo" label="Nome" htmlForLabel="name"/>
        <Inputs type="number" placeholder="Número de telefone" label="WhatsApp" htmlForLabel="number"/>
        <Inputs type="email" placeholder="Seu melhor e-mail para contato" label="E-mail" htmlForLabel="email"/>
        <SelectionField />
        <button type="submit" className="w-[37.5rem] py-4 bg-gradient-to-r from-orange to-sun-orange rounded-lg font-bold text-gray-100 text-2xl">
          Enviar
        </button>
      </form>
    </div>
  )
}