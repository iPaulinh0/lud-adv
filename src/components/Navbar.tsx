export function Navbar() {
  return(
    <div className="w-[20rem] h-12 bg-gradient-to-r from-gray-100/15 to-gray-100/75 rounded-full p-13 flex gap-12 justify-center items-center max-[1000px]:hidden">
      <a href="#" className="font-bold text-base text-gray-200 active:shadow-xl active:bg-gradient-to-r active:from-gray-100 active:to-gray-400 active:rounded-full active:py-1 active:px-4 active:text-gray-950">Início</a>
      <a href="#" className="font-bold text-base text-gray-200">Serviços</a>
      <a href="#" className="font-bold text-base text-gray-200">Contato</a>
    </div>
  )
}