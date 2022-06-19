import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={`flex fixed h-20 bg-white text-xl flex-row px-10 w-full top-0 text-primary-darkBlue justify-between items-center my-0 z-30`}>
            <Link href="/">
                <a>
                    Open-Source @ Illinois
                </a>
            </Link>
            <div className='flex gap-10'>
                <Link href='/calendar'>
                    <a>Calendar</a>
                </Link>
                <a href='https://github.com/open-source-at-illinois'>Github</a>
                <a href='https://discord.gg/sKYtc9QhuP'>Discord</a>
            </div>
        </div>
    )
}

export default Navbar;