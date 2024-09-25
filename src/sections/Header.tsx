import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Logo from '../../public/logo.svg'
import { Navbar } from '../components/Navbar'
import { List } from 'phosphor-react'
import { Separator } from '@/components/ui/separator'

export function Header() {
  return (
    <div className='w-screen max-w-[1200px] h-28 flex items-center justify-between border-b-2 border-sand-100 max-[1240px]:max-w-[976px] max-[1000px]: px-8'>
      <div className=''></div>
      <div className='max-[1000px]:hidden'></div>
      <img src={Logo} alt="Ludmila Advogada logo dourada" className='w-40'/>
      <Navbar />
      <Popover>
        <PopoverTrigger className='hidden max-md:block'>
          <List size={36} className='text-sand-100 focus:hidden'/>
        </PopoverTrigger>

        <PopoverContent className='flex flex-col justify-center gap-2 bg-blue-night w-32 h-36' align='end'>
          <a onClick={() => window.scroll({top: 100, left: 0, behavior: 'smooth'})} className='text-sand-50'>Início</a>
          <Separator className='text-sand-50'/>
          <a onClick={() => window.scroll({top: 800, left: 0, behavior: 'smooth'})} className='text-sand-50'>Serviços</a>
          <Separator className='text-sand-50'/>
          <a onClick={() => window.scroll({top: 1450, left: 0, behavior: 'smooth'})} className='text-sand-50'>Contato</a>
        </PopoverContent>
      </Popover>
    </div>
  )
}