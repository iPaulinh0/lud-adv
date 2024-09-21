import Logo from '../../public/logo.svg'
import { InstagramLogo, WhatsappLogo } from 'phosphor-react'


export function Footer() {
  return(
    <div className="w-screen max-w-[1200px] h-52 border-t border-sand-100 flex flex-col items-center justify-center pt-3">
      
      <div className='flex gap-36 items-center mb-5'>
        <img src={Logo} alt="Logotipo Ludmila Advogada dourado" className='w-40' />
        <nav className='flex flex-row gap-2'>
          <a href="#">
            <InstagramLogo weight='fill' size={35} className='text-sand-100'/>
          </a>
          <a href="">
            <WhatsappLogo weight='fill' size={35} className='text-sand-100'/>
          </a>
        </nav>
      </div>

      <p className='text-sm text-gray-200 mb-1'>Todos os direitos reservados © Ludmila Oliveira Amazonas | OAB/AM: 0000</p>
      <p className='text-xs text-gray-200'>Criado por <a href="https://www.linkedin.com/in/paulo-victor-208954162/" target='_blank' className='font-bold text-sand-100 hover:underline'>Paulo Victor</a></p>
    </div>
  )
}