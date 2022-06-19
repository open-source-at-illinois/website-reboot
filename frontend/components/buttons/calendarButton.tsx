import { Icon } from "@iconify/react";

const CalendarButton = () => {
    return (
        <button className="flex flex-row text-white bg-primary-lightOrange hover:bg-primary-darkOrange duration-300 rounded-lg items-center gap-4 p-2">
            <Icon icon="akar-icons:calendar" color="white" className='text-xl' />
            <div className='mr-2'>
                Add Calendar
            </div>
        </button>
    )
}

export default CalendarButton;