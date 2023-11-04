import React from 'react';

import withAuth from '@/components/hoc/withAuth';

const Home = (): JSX.Element => {
  return (
    <div className='max-sm mx-auto my-0 flex max-w-sm flex-col p-4'>
      <p className='bg-white'>Note Nest HomePage</p>
    </div>
  );
};

export default withAuth(Home, 'protected');
