import { Icon } from '@iconify/react';

const Navbar = ({ height }) => {
    return (
        <div className={`h-${height} flex flex-row w-full fixed top-0 bg-gray-100 mx-0 py-4 justify-between items-center my-0`}>
            <h1 className='px-2'>
                Open-Source @ Illinois
            </h1>
            <div className='flex mr-4 gap-5'>
                <div>Github</div>
                <div>Discord</div>
                <div>Calendar</div>
            </div>
        </div>
    )
}

export default Navbar;