'use client';

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export default function HomePage(): JSX.Element {
  const router = useRouter();

  return (
    <main>
      <Head>
        <title>Notes Nest</title>
        <link href='https://fonts.googleapis.com' rel='preconnect' />
        <link
          href='https: //fonts.googleapis.com/css2? family= Nunito:wght@300 & display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='max-sm mx-auto my-0 flex max-w-sm flex-col p-4'>
        <p className='bg-white'>Notes Nest</p>
        <button
          className='focus:shadow-outline m-2 rounded  bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
          onClick={() => router.push('/signup')}
        >
          Signup
        </button>
        <button
          className='focus:shadow-outline m-2 rounded  bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
          onClick={() => router.push('/login')}
        >
          Login
        </button>
      </div>
    </main>
  );
}
