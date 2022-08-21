import Loading from '../components/views/loading';

const Interest = () => {
  return (
    <div className='h-full'>
      <iframe
        className='mx-auto'
        src='https://docs.google.com/forms/d/e/1FAIpQLSfSNE6Fiz-lcRnkjX0MZFQE_69qzP9Vq6HrdfOzIUDVx9CD2Q/viewform?embedded=true'
        width='640'
        height='762'>
        <Loading />
      </iframe>
    </div>
  );
};

export default Interest;
