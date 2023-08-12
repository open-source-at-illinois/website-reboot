import Loading from '../components/views/loading';

const Interest = () => {
  return (
    <div className='h-full overflow-x-auto'>
      <iframe
        className='mx-auto'
        src='https://forms.gle/LwzGDr3zfU9ZRBFf9'
        width='500'
        height='800'>
        <Loading />
      </iframe>
    </div>
  );
};

export default Interest;
