import { Icon } from '@iconify/react';
import moment from 'moment';
import { FC } from 'react';
import {
  cardStyleByPoints,
  MaskedEventType,
  PRIORITY_THRESHOLD,
} from '../../pages/calendar';

export interface Props {
  event: MaskedEventType;
}

const UpNextEvent: FC<Props> = ({ event }) => {
  const relativeTime = moment(event.when).format('MMMM Do [at] h:mm A');
  return (
    <div className='flex flex-col md:flex-row gap-5 items-center w-fit mx-auto'>
      <div
        className={`flex flex-col mx-auto cursor-default items-stretch justify-between w-80 
            shadow-card dark:text-white dark:shadow-dark-card dark:hover:shadow-dark-card-hover 
            hover:shadow-card-hover p-5 rounded-xl duration-500 ${cardStyleByPoints(
              event.points
            )}`}>
        <span className='flex flex-row items-center justify-center'>
          {event.points > PRIORITY_THRESHOLD ? (
            <Icon
              icon='bi:star-fill'
              className='flex text-xl mr-3 text-yellow-400'
            />
          ) : null}
          <h2 className='text-center text-lg font-semibold'>{event.name}</h2>
        </span>
        <h2 className='text-center text-sm font-thin'>{event.points} points</h2>
      </div>
      <div className='px-3 max-w-xl'>
        <p className='text-left text-gray-700 dark:text-gray-300 font-semibold'>
          {relativeTime}
        </p>
        <p className='text-left text-gray-700 dark:text-gray-300 font-semibold'>
          {event.where}
        </p>
        <p className='text-left text-gray-700 dark:text-gray-300'>
          {event.description}
        </p>
      </div>
    </div>
  );
};

export default UpNextEvent;
