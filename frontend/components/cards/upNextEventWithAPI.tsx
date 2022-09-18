import { Icon } from '@iconify/react';
import moment from 'moment';
import useSWR, { Fetcher } from 'swr';
import {
  cardStyleByPoints,
  MaskedEventType,
  PRIORITY_THRESHOLD,
} from '../../pages/calendar';
import UpNextEvent from './upNextEvent';

const UpNextEventWithAPI = () => {
  const fetcher: Fetcher<MaskedEventType> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    'https://api.opensourceatillinois.com/events/latest',
    fetcher
  );

  if (error) {
    return <></>;
  }
  if (!data) {
    return <></>;
  }

  const event = data;
  const CURRENT_YEAR = moment().year();
  const DATE_FORMAT = 'MMM DD hh:mm A YYYY';
  const formattedTimeMoment = moment(
    `${event.when} ${CURRENT_YEAR}`,
    DATE_FORMAT,
    true
  );
  let formattedTime = event.when;
  if (formattedTimeMoment.isValid()) {
    formattedTime = formattedTimeMoment.fromNow();
    formattedTime +=
      ': ' + formattedTimeMoment.format('M/D[,] dddd [at] h:mm A');
  }

  return (
    <div className='flex flex-col md:flex-row gap-5 items-center w-fit my-8 mx-auto'>
      <div className='flex items-center md:items-start flex-col px-3 max-w-xl text-center'>
        <p className='flex text-center mx-auto text-gray-700 dark:text-gray-300 text-2xl mb-4'>
          Up Next
        </p>
        <p className='flex mx-auto text-gray-700 dark:text-gray-300 font-semibold'>
          {formattedTime}
        </p>
        <p className='flex mx-auto text-gray-700 dark:text-gray-300 font-semibold mb-2'>
          {event.where}
        </p>
        <p className='flex text-justify text-gray-700 dark:text-gray-300'>
          {event.description}
        </p>
      </div>
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
    </div>
  );
};

export default UpNextEventWithAPI;
