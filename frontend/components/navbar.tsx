import { Icon } from '@iconify/react';

const Navbar = () => {
    return (
        <div className={`flex fixed h-20 text-xl flex-row px-10 w-full top-0 bg-gray-100 text-primary-darkBlue justify-between items-center my-0`}>
            <h1>
                Open-Source @ Illinois
            </h1>
            <div className='flex gap-10'>
                <div>Calendar</div>
                <div>Github</div>
                <div>Discord</div>
            </div>
        </div>
    )
}

export default Navbar;