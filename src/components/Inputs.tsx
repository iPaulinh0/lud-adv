interface InputFieldProps {
  label: string
  placeholder: string
  type: "text" | "number" | "email"
  htmlForLabel: string
}

export function Inputs({ label, placeholder, type, htmlForLabel }: InputFieldProps) {
  return(
    <div className="flex flex-1 flex-col gap-2 mb-9">
      <label htmlFor={htmlForLabel} className="font-bold text-xl text-gray-200 max-[]:text-base">{label}</label>
      <input 
        id={htmlForLabel}
        placeholder={placeholder}
        type={type}
        className="
        bg-blue-dark-sky border border-indigo-blue
          py-7 px-6 w-[37.5rem] h-6
          rounded-lg text-base
        text-gray-200
          focus:outline-none focus:border-sun-orange appearance-none
          max-md:w-[30rem]
          max-md:h-3
          max-[480px]:w-[24rem]
          max-[385px]:w-[20rem]
        "
      />
    </div>
  )
}