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
  key: number;
}

const EventDetailCard: FC<Props> = ({ event, key }) => {
  const formattedTime = moment(event.when).format('MMMM Do [at] h:mm A');
  return (
    <div
      key={key}
      className={`flex flex-col cursor-default items-stretch justify-between w-80 
              shadow-card dark:text-white dark:shadow-dark-card dark:hover:shadow-dark-card-hover 
              hover:shadow-card-hover p-5 rounded-xl duration-500 ${cardStyleByPoints(
                event.points
              )}`}>
      <span className='flex flex-row items-center mb-2'>
        {event.points > PRIORITY_THRESHOLD ? (
          <Icon
            icon='bi:star-fill'
            className='flex text-lg mr-3 text-yellow-400'
          />
        ) : null}
        <h2 className='text-center text-lg '>{event.name}</h2>
      </span>
      <div>
        <p className='text-left text-gray-700 dark:text-gray-300'>
          {formattedTime}
        </p>
        <p className='text-left text-gray-700 dark:text-gray-300'>
          {event.where}
        </p>
        <p className='text-right text-sm font-thin text-gray-700 dark:text-gray-300'>
          {event.points} pts
        </p>
      </div>
    </div>
  );
};

export default EventDetailCard;
