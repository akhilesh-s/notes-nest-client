'use client';

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export default function HomePage(): JSX.Element {
  const router = useRouter();

  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>Homepage</section>
      <button onClick={() => router.push('/signup')}>Signup</button>
    </main>
  );
}
