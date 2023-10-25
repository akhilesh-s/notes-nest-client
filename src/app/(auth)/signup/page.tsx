'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import logger from '@/lib/logger';
import { Network } from '@/lib/network';
import Utils from '@/lib/utils';

import { UrlManager } from '@/provider/urlManager';

const Signup = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const [signupData, setSignupData] = useState({
    username: '',
    emailId: '',
    password: '',
    confirmedPassword: '',
  });

  const handleSignup = async (): Promise<void> => {
    if (
      !signupData.username ||
      !signupData.emailId ||
      !signupData.password ||
      !signupData.confirmedPassword
    ) {
      setErrorMessage('All fields are required.');
    } else if (!Utils.isValidEmailId(signupData.emailId)) {
      setErrorMessage('Please Enter Valid Email Id');
    } else if (signupData.password !== signupData.confirmedPassword) {
      setErrorMessage('Passwords do not match.');
    } else if (!Utils.isValidPassword(signupData.password)) {
      setErrorMessage(
        'Password should contain Minimum eight characters, at least one letter and one number and one special character: '
      );
      logger('pwd', signupData.password);
    } else {
      setErrorMessage('');

      try {
        const url = UrlManager.getSignupUrl();
        const data = {
          email: signupData.emailId,
          username: signupData.username,
          password: signupData.password,
        };
        const payload = {
          method: 'POST',
        };

        const res = await Network.fetch(url, payload, data);

        if (res.ok) {
          router.push('/login');
        }

        logger(res, 'User registered successfully!');
      } catch {
        setErrorMessage('Email or username already exists');
      }
    }
  };

  return (
    <div className='m-4 mx-auto my-0 mt-2 flex max-w-sm flex-col justify-items-center rounded p-5 shadow-xl'>
      <h2 className='mb-4 text-2xl font-bold'>Signup</h2>
      <div className='mb-4'>
        <label
          className='mb-2 block text-sm font-bold text-gray-700'
          htmlFor='username'
        >
          Username
        </label>
        <input
          className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
          id='username'
          onChange={(e) =>
            setSignupData((prev) => ({
              ...prev,
              username: e.target.value,
            }))
          }
          placeholder='Enter your username'
          type='text'
          value={signupData.username}
        />
      </div>
      <div className='mb-4'>
        <label
          className='mb-2 block text-sm font-bold text-gray-700'
          htmlFor='email'
        >
          Email
        </label>
        <input
          className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
          id='email'
          onChange={(e) =>
            setSignupData((prev) => ({
              ...prev,
              emailId: e.target.value,
            }))
          }
          placeholder='Enter your email'
          type='email'
          value={signupData.emailId}
        />
      </div>
      <div className='mb-4'>
        <label
          className='mb-2 block text-sm font-bold text-gray-700'
          htmlFor='password'
        >
          Password
        </label>
        <input
          className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
          id='password'
          onChange={(e) =>
            setSignupData((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          placeholder='Enter your password'
          type='password'
          value={signupData.password}
        />
      </div>
      <div className='mb-6'>
        <label
          className='mb-2 block text-sm font-bold text-gray-700'
          htmlFor='confirmPassword'
        >
          Confirm Password
        </label>
        <input
          className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
          id='confirmPassword'
          onChange={(e) =>
            setSignupData((prev) => ({
              ...prev,
              confirmedPassword: e.target.value,
            }))
          }
          placeholder='Confirm your password'
          type='password'
          value={signupData.confirmedPassword}
        />
      </div>
      {errorMessage && <p className='mb-4 text-red-500'>{errorMessage}</p>}
      <button
        className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
        onClick={handleSignup}
        type='button'
      >
        Signup
      </button>
      <button
        className='focus:shadow-outline focus:outline-nones mt-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
        onClick={() => router.push('/login')}
        type='button'
      >
        Login
      </button>
    </div>
  );
};

export default Signup;
