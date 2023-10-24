'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import logger from '@/lib/logger';
import { Network } from '@/lib/network';
import Utils from '@/lib/utils';

import { UrlManager } from '@/provider/urlManager';

const Login = (): JSX.Element => {
  const [loginData, setLoginData] = useState({
    userId: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (): Promise<void> => {
    if (loginData.userId) {
      setErrorMessage('');

      try {
        const url = UrlManager.getLoginUrl();

        const payload = {
          method: 'POST',
        };

        const data = {
          userId: loginData.userId,
          password: loginData.password,
        };

        const resp = await Network.fetch(url, payload, data);

        if (resp.ok) {
          Utils.setCookie('isLoggedIn', true, 1);
          router.push('/');
        }
      } catch (error) {
        setErrorMessage('Please check username and password');
      }
    } else {
      setErrorMessage('Please enter valid Email Id or Username');
      logger('not valid email id');
    }
  };

  return (
    <div className='m-4 mx-auto my-0 mt-2 flex max-w-sm flex-col justify-items-center rounded p-5 shadow-xl'>
      <p className='mb-4 text-2xl font-bold'>Login</p>
      <form className='mx-auto max-w-md'>
        <input
          className='mb-4 w-full rounded border border-gray-300 p-2'
          onChange={(e) =>
            setLoginData((prev) => ({
              ...prev,
              userId: e.target.value,
            }))
          }
          placeholder='Enter Username'
          type='text'
          value={loginData.userId}
        />
        <input
          className='mb-4 w-full rounded border border-gray-300 p-2'
          onChange={(e) =>
            setLoginData((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          placeholder='Enter Password'
          type='password'
          value={loginData.password}
        />
        <button
          className='rounded bg-blue-500 p-2 text-white hover:bg-blue-700'
          onClick={handleSubmit}
          type='button'
        >
          Login
        </button>
        <button
          className='ml-2 rounded bg-blue-500 p-2 text-white hover:bg-blue-700'
          onClick={() => router.push('/signup')}
          type='button'
        >
          SignUp
        </button>
        {errorMessage && (
          <div className='mt-2 text-red-500'>{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default Login;
