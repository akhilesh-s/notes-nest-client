'use client';

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useEffect } from 'react';

import { AuthService } from '@/services/authService';

export default function HomePage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const checkLoggedInStatus = (): void => {
      const loggedIn = AuthService.isLoggedIn();

      if (!loggedIn) {
        router.push('/login');
      }
    };

    checkLoggedInStatus();
  }, [router]);

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
        <p className='bg-white'>Note Nest HomePage</p>
      </div>
    </main>
  );
}
