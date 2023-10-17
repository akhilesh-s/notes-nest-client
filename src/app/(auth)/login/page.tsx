'use client';
import React, { useState } from 'react';

import logger from '@/lib/logger';
import Utils from '@/lib/utils';

const Login = (): JSX.Element => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (): void => {
    if (Utils.isValidEmailId(emailId)) {
      logger('submit');
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter valid Email Id');
      logger('not valid email id');
    }
  };

  return (
    <section className='container mx-auto p-4'>
      <p className='mb-4 text-2xl font-bold'>Login</p>
      <form className='mx-auto max-w-md'>
        <input
          className='mb-4 w-full rounded border border-gray-300 p-2'
          onChange={(e) => setEmailId(e.target.value)}
          placeholder='Enter Username'
          type='text'
          value={emailId}
        />
        <input
          className='mb-4 w-full rounded border border-gray-300 p-2'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter Password'
          type='password'
          value={password}
        />
        <button
          className='rounded bg-blue-500 p-2 text-white hover:bg-blue-700'
          onClick={handleSubmit}
          type='button'
        >
          Login
        </button>
        {errorMessage && (
          <div className='mt-2 text-red-500'>{errorMessage}</div>
        )}
      </form>
    </section>
  );
};

export default Login;
