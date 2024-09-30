import MainIMG from '../assets/lud.jpg'
import { User, MapPin } from 'phosphor-react'

export function Hero() {
  return (
    <div id='home' className='w-screen max-w-[1200px] items-center my-16 flex justify-between max-lg:max-w-[976px]
     max-md:max-w-[768px]
     max-sm:flex-col
     '
     >
      <img src={MainIMG} alt="Advogada Ludmila com mão embaixo do queixo." className='w-80 border border-sand rounded-br-md rounded-tr-md rounded-tl-md max-md:w-64'/>
      <div className='hidden max-sm:flex max-sm:flex-col max-sm:items-center max-sm:my-4'>
        <p className='font-bold text-xl tracking-wider text-gray-200 max-md:text-base max-[391px]:text-xs'>Ludmila Oliveira Amazonas | OAB/AM 16.646</p>
        <p className='font-bold text-xl tracking-wider text-gray-200 max-md:text-base max-[391px]:text-xs'>Manaus | AM</p>
      </div>
      <div>
        <p className='text-sm tracking-widest w-[35rem] h-[12rem] text-gray-100 italic mb-2
          max-md:text-xs
          max-md:w-[24rem]
          max-md:h-[8rem]
          max-md:mb-4
          max-sm:text-justify
          max-sm:hyphens-auto
          max-sm:w-[35rem]
          max-sm:text-base
          max-sm:mb-16
          max-sm:tracking-wide
          max-xs:text-xs
          max-xs:w-[24rem]
          max-[391px]:w-[20rem]
          max-[391px]:text-8px
          '
          >
          Me chamo Ludmila Oliveira Amazonas, advogada <strong className='font-semibold text-indigo-blue'>formada em Direito</strong> pela FAMETRO, e <strong className='font-semibold text-indigo-blue'>pós-graduanda em Direito Civil</strong>,
          Atuo nas áreas de direito do consumidor, família e serviços extrajudiciais, onde posso usar minha <strong className='font-semibold text-indigo-blue'>proatividade</strong> e <strong className='font-semibold text-indigo-blue'>criatividade </strong> 
          para solucionar os problemas das pessoas, especialmente nos momentos em que mais precisam.
          Sempre busco entender as situações com sensibilidade, conectando cada detalhe para oferecer um apoio verdadeiro e próximo aos meus clientes.

        </p>
        <div className='flex gap-8 items-center mb-2 max-md:gap-4 max-sm:hidden'>
          <User weight='fill' className='text-indigo-blue text-[24px] max-md:text-[20px]'/>
          <p className='font-bold text-lg tracking-tight text-gray-200 max-md:text-base'>Ludmila Oliveira Amazonas | OAB/AM 16.646</p>
        </div>
        <div className='flex gap-8 items-center max-md:gap-4 max-sm:hidden'>
          <MapPin weight='fill' className='text-indigo-blue text-[24px] max-md:text-[20px]'/>
          <p className='font-bold text-lg tracking-tight text-gray-200 max-md:text-base'>Manaus | AM</p>
        </div>
      </div>
    </div>
  )
}