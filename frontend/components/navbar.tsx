import Link from 'next/link'

const Navbar = () => {
    return (
        <header>
        <div className={`sm:hidden md:flex fixed h-20 bg-white text-xl flex-row px-10 w-full top-0 text-primary-darkBlue justify-between items-center my-0 z-30`}>
            <Link href="/">
                <a className='hover:text-primary-lightBlue duration-300'>
                    Open-Source @ Illinois
                </a>
            </Link>
            <div className='flex gap-10'>
                <Link href='/calendar'>
                    <a className='hover:text-primary-lightBlue duration-300'>Calendar</a>
                </Link>
                <a className='hover:text-primary-lightBlue duration-300' href='https://github.com/open-source-at-illinois'>Github</a>
                <a className='hover:text-primary-lightBlue duration-300' href='https://discord.gg/sKYtc9QhuP'>Discord</a>
            </div>
        </div>
        <div className={`flex md:hidden fixed h-20 bg-white text-xl flex-row px-10 w-full top-0 text-primary-darkBlue justify-between items-center my-0 z-30`}>
            <Link href="/">
                <a className='hover:text-primary-lightBlue duration-300'>
                    Open-Source @ Illinois
                </a>
            </Link>
        </div>
        </header>
    )
}

export default Navbar;