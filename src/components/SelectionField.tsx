export function SelectionField() {
  return(
    <div className="flex flex-1 flex-col gap-2 mb-9">
      <label htmlFor="services" className="font-bold text-xl text-gray-200">Serviço</label>
      <select id="services"
        className="
          bg-blue-dark-sky border border-indigo-blue
            py-4 px-6 w=[37.5rem] rounded-lg
            text-gray-400 text-base
            focus:outline-none focus:border-sun-orange
            max-md:w-[30rem]
            max-[480px]:w-[24rem]
            max-[385px]:w-[20rem]
            "
        >
          <option selected>Selecione o serviço desejado</option>
          <option value="direito-de-familia">Direito de Familia</option>
          <option value="direito-criminal">Direito Criminal</option>
          <option value="direito-do-consumidor">Direito do Consumidor</option>
          <option value="extrajudiciais">Serviços Extrajudiciais</option>
      </select>
    </div>
  )
}