'use client';

import React from 'react';

import logger from '@/lib/logger';
import { Network } from '@/lib/network';

import withAuth from '@/components/hoc/withAuth';

import { UrlManager } from '@/provider/urlManager';

const Home = (): JSX.Element => {
  const handleSubmit = async (): Promise<void> => {
    try {
      const url = `${UrlManager.getBaseUrl()}/notesnest/addnote`;
      const payload = { method: 'POST' };

      const data = {
        note: 'Note 1',
      };
      const resp = await Network.fetch(url, payload, data);
      logger(resp, 'response');
    } catch (error) {
      logger(error, 'request failed with error');
    }
  };

  return (
    <div className='max-sm mx-auto my-0 flex max-w-sm flex-col p-4'>
      <p className='bg-white'>Note Nest HomePage</p>
      <button onClick={handleSubmit}>Get ID</button>
    </div>
  );
};

export default withAuth(Home, 'protected');
