import { Icon } from '@iconify/react';
import Link from 'next/link'

const Navbar = () => {
    return (
        <header>
            <div className={`hidden md:flex fixed h-20 bg-white text-xl flex-row px-10 w-full top-0 text-primary-darkBlue justify-between items-center my-0 z-30`}>
                <Link href="/">
                    <a className='hover:text-primary-lightBlue duration-300' >
                        Open-Source @ Illinois
                    </a>
                </Link>
                <div className='flex gap-10'>
                    <Link href='/calendar'>
                        <a className='hover:text-primary-lightBlue duration-300'>Calendar</a>
                    </Link>
                    <a className='hover:text-primary-lightBlue duration-300' href='/logistics'>Logistics</a>
                    <a className='hover:text-primary-lightBlue duration-300' href='https://discord.gg/sKYtc9QhuP'>Discord</a>
                </div>
            </div>
            <div className={`flex md:hidden fixed h-14 bg-white text-md flex-row px-10 w-full top-0 text-primary-darkBlue justify-between items-center my-0 z-30`}>
                <Link href="/">
                    <a className='hover:text-primary-lightBlue duration-300'>
                        Open-Source @ Illinois
                    </a>
                </Link>
                {/*burger menu*/}
                <div className='flex flex-row items-center gap-5'>
                    <Link href='/calendar'>
                        <Icon icon="akar-icons:calendar" className='text-lg text-primary-darkBlue hover:text-primary-lightBlue duration-200' />
                    </Link>
                    <a className='hover:text-primary-lightBlue duration-300' href='/logistics'>
                        <Icon icon="fluent:fast-acceleration-20-regular" className='text-xl text-primary-darkBlue hover:text-primary-lightBlue duration-200' />
                    </a>
                    <a className='hover:text-primary-lightBlue duration-300' href='https://discord.gg/sKYtc9QhuP'>
                        <Icon icon="akar-icons:discord-fill" className='text-lg text-primary-darkBlue hover:text-primary-lightBlue duration-200' />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navbar;