'use client';
import React, { useState } from 'react';

import logger from '@/lib/logger';
import Utils from '@/lib/utils';

const Login = (): JSX.Element => {
  const [loginData, setLoginData] = useState({
    emailId: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (): void => {
    if (Utils.isValidEmailId(loginData.emailId)) {
      logger('submit');
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter valid Email Id');
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
              emailId: e.target.value,
            }))
          }
          placeholder='Enter Username'
          type='text'
          value={loginData.emailId}
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
        {errorMessage && (
          <div className='mt-2 text-red-500'>{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default Login;
