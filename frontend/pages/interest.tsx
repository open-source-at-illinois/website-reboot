import Loading from '../components/views/loading';

const Interest = () => {
  return (
    <div className='h-full overflow-x-auto'>
      <iframe
        className='mx-auto'
        src='https://docs.google.com/forms/d/e/1FAIpQLSfSNE6Fiz-lcRnkjX0MZFQE_69qzP9Vq6HrdfOzIUDVx9CD2Q/viewform?embedded=true'
        width='500'
        height='800'>
        <Loading />
      </iframe>
    </div>
  );
};

export default Interest;
