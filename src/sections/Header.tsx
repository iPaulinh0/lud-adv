import Logo from '../../public/logo.svg'
import { Navbar } from '../components/Navbar'
import { List } from 'phosphor-react'

export function Header() {
  return (
    <div className='w-screen max-w-[1200px] h-28 flex items-center justify-between border-b-2 border-sand-100 max-[1240px]:max-w-[976px] max-[1000px]: px-8'>
      <div className=''></div>
      <div className='max-[1000px]:hidden'></div>
      <img src={Logo} alt="Ludmila Advogada logo dourada" className='w-40'/>
      <Navbar />
      <button className='hidden max-[1000px]:block'>
        <List size={36} className='text-sand-100'/>
      </button>
    </div>
  )
}