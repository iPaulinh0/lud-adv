// import { Inputs } from "../components/Inputs";
// import { SelectionField } from "../components/SelectionField";

import { useEffect } from "react";

export function Contact() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return(
    <div className="flex flex-col mt-16 gap-9 items-center w-screen mb-16">
      <div data-tf-live="01J8DMN2JM8XBVG1WTSYJCHT1J"></div>
      {/* <h1 className="font-bold text-[2rem] text-gray-200">ENTRE EM CONTATO</h1>

      <form>
        <Inputs type="text" placeholder="Insira seu nome completo" label="Nome" htmlForLabel="name"/>
        <Inputs type="number" placeholder="Número de telefone" label="WhatsApp" htmlForLabel="number"/>
        <Inputs type="email" placeholder="Seu melhor e-mail para contato" label="E-mail" htmlForLabel="email"/>
        <SelectionField />
        <button type="submit" className="
          w-[37.5rem] py-4 flex items-center justify-center
          bg-gradient-to-r from-orange to-sun-orange
          rounded-lg font-bold text-gray-100 text-2xl
          max-md:w-[30rem]
          max-[480px]:w-[24rem]
          max-[391px]:w-[20rem]
          max-[391px]:h-12
          max-[391px]:items-center
          max-[391px]:justify-center
          max-[391px]:text-sm
          max-[350px]:w-[16rem]
          "
          >
          Enviar
        </button>
      </form> */}
    </div>
  )
}