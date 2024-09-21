import MainIMG from '../assets/lud.jpg'
import { User, MapPin } from 'phosphor-react'

export function Hero() {
  return (
    <div className='w-screen max-w-[1200px] items-center my-16 flex justify-between'>
      <img src={MainIMG} alt="Advogada Ludmila com mão embaixo do queixo." className='w-80 border border-sand rounded-br-md rounded-tr-md rounded-tl-md'/>
      <div>
        <p className='text-base w-[35rem] h-[12rem] text-gray-100 italic'>
          Lorem ipsum dolor sit <strong className='font-bold text-blue-sky'>amet</strong>, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat, Duis autre irure dolor in
          reprehenderit in <strong className='font-bold text-blue-sky'>voluptate velit</strong> esse cillum dolore eu fugiat nulla {' '}
          <strong className='font-bold text-blue-sky'>pariatur</strong>. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='flex gap-8 items-center mb-2'>
          <User size={32} weight='fill' className='text-blue-sky'/>
          <p className='font-bold text-xl text-gray-200'>Ludmila Oliveira Amazonas | OAB/AM: 0000</p>
        </div>
        <div className='flex gap-8 items-center'>
          <MapPin size={32} weight='fill' className='text-blue-sky'/>
          <p className='font-bold text-xl text-gray-200'>Manaus | AM</p>
        </div>
      </div>
    </div>
  )
}