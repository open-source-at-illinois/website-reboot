import { Icon } from '@iconify/react';

const CalendarButton = () => {
  return (
    <a
      className='flex flex-row text-white bg-primary-lightOrange hover:bg-primary-darkOrange duration-300 rounded-lg items-center gap-4 p-2'
      href='https://bit.ly/3AOYya8'>
      <Icon icon='akar-icons:calendar' color='white' className='text-xl' />
      <div className='mr-2'>Add Calendar</div>
    </a>
  );
};

export default CalendarButton;
