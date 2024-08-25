import Loading from '../components/views/loading';

const Interest = () => {
  return (
    <div className='h-full overflow-x-auto'>
      <iframe
        className='mx-auto'
        src='https://forms.gle/r6Mvsy6ctgc5jrLY6'
        width='500'
        height='800'>
        <Loading />
      </iframe>
    </div>
  );
};

export default Interest;
