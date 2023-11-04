'use client';

import Head from 'next/head';
import * as React from 'react';

import AppContainer from '@/container/appContainer';

export default function PageLayout(): JSX.Element {
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
      <AppContainer />
    </main>
  );
}
