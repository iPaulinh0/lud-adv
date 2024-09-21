import Logo from '../../public/logo.svg'
import { Navbar } from '../components/Navbar'

export function Header() {
  return (
    <div className='w-screen max-w-[1200px] h-28 flex items-center justify-between border-b-2 border-sand'>
      <div></div>
      <div></div>
      <img src={Logo} alt="Ludmila Advogada logo dourada" className='w-40'/>
      <Navbar />
    </div>
  )
}