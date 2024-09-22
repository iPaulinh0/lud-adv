import MainIMG from '../assets/lud.jpg'
import { User, MapPin } from 'phosphor-react'

export function Hero() {
  return (
    <div className='w-screen max-w-[1200px] items-center my-16 flex justify-between max-lg:max-w-[976px]
     max-md:max-w-[768px]
     max-sm:flex-col
     '
     >
      <img src={MainIMG} alt="Advogada Ludmila com mão embaixo do queixo." className='w-80 border border-sand rounded-br-md rounded-tr-md rounded-tl-md max-md:w-64'/>
      <div className='hidden max-sm:flex max-sm:flex-col max-sm:items-center max-sm:my-4'>
        <p className='font-bold text-xl text-gray-200 max-md:text-base max-[385px]:text-sm'>Ludmila Oliveira Amazonas | OAB/AM: 0000</p>
        <p className='font-bold text-xl text-gray-200 max-md:text-base max-[385px]:text-sm'>Manaus | AM</p>
      </div>
      <div>
        <p className='text-base w-[35rem] h-[12rem] text-gray-100 italic
          max-md:text-xs
          max-md:w-[24rem]
          max-md:h-[8rem]
          max-md:mb-4
          max-sm:text-center
          max-sm:w-[35rem]
          max-sm:text-base
          max-sm:mb-16
          max-xs:text-xs
          max-xs:w-[24rem]
          max-[385px]:w-[20rem]
          max-[385px]:text-8px
          '
          >
          Lorem ipsum dolor sit <strong className='font-bold text-indigo-blue'>amet</strong>, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat, Duis autre irure dolor in
          reprehenderit in <strong className='font-bold text-indigo-blue'>voluptate velit</strong> esse cillum dolore eu fugiat nulla {' '}
          <strong className='font-bold text-indigo-blue'>pariatur</strong>. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='flex gap-8 items-center mb-2 max-md:gap-4 max-sm:hidden'>
          <User weight='fill' className='text-indigo-blue text-[32px] max-md:text-[20px]'/>
          <p className='font-bold text-xl text-gray-200 max-md:text-base'>Ludmila Oliveira Amazonas | OAB/AM: 0000</p>
        </div>
        <div className='flex gap-8 items-center max-md:gap-4 max-sm:hidden'>
          <MapPin weight='fill' className='text-indigo-blue text-[32px] max-md:text-[20px]'/>
          <p className='font-bold text-xl text-gray-200 max-md:text-base'>Manaus | AM</p>
        </div>
      </div>
    </div>
  )
}