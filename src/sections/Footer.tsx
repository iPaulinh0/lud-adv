import Logo from '../../public/logo.svg'
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'


export function Footer() {
  return(
    <div className="w-screen max-w-[1200px] h-52 border-t border-sand-100 flex flex-col items-center justify-center pt-3">
      
      <div className='flex gap-36 items-center mb-5 max-[450px]:flex-col max-[450px]:gap-3 max-[450px]:mb-1'>
        <img src={Logo} alt="Logotipo Ludmila Advogada dourado" className='w-40' />
        <nav className='flex flex-row gap-2'>
          <a href="https://www.linkedin.com/in/ludmila-oliveira-amazonas-1a022b213/">
            <LinkedinLogo weight='fill' size={35} className='text-sand-100'/>
          </a>
          <a href="#">
            <InstagramLogo weight='fill' size={35} className='text-sand-100'/>
          </a>
          <a href="https://dm.wa.link/59sl5s" target='_blank'>
            <WhatsappLogo weight='fill' size={35} className='text-sand-100'/>
          </a>
        </nav>
      </div>

      <p className='text-sm text-gray-200 mb-1 max-xs:text-xs max-[450px]:text-[10px]'>Todos os direitos reservados © Ludmila Oliveira Amazonas</p>
      <p className='text-xs text-gray-200 max-[450px]:text-[10px]'>Criado por <a href="https://www.linkedin.com/in/paulo-victor-208954162/" target='_blank' className='font-bold text-sand-100 hover:underline'>Paulo Victor</a></p>
    </div>
  )
}