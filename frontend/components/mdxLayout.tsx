import { PropsWithChildren } from 'react';

const PostLayout = (props: PropsWithChildren) => {
  return (
    <div className='dark:bg-dark-bg mx-8 md:mx-auto md:w-[50%] text-lg my-5 pb-5 post text-justify'>
      {props.children}
    </div>
  );
};

export default PostLayout;
