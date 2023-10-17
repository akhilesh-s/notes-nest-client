'use client';

import React, { useState } from 'react';

import logger from '@/lib/logger';
import Utils from '@/lib/utils';

const Signup = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = (): void => {
    if (!username || !emailId || !password || !confirmedPassword) {
      setErrorMessage('All fields are required.');
    } else if (!Utils.isValidEmailId(emailId)) {
      setErrorMessage('Please Enter Valid Email Id');
    } else if (password !== confirmedPassword) {
      setErrorMessage('Passwords do not match.');
    } else if (!Utils.isValidPassword(password)) {
      setErrorMessage(
        'Password should contain Minimum eight characters, at least one letter and one number: '
      );
      logger('pwd', password);
    } else {
      setErrorMessage('');
      logger('User registered successfully!');
    }
  };

  return (
    <div className='container mx-auto p-4'>
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
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Enter your username'
          type='text'
          value={username}
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
          onChange={(e) => setEmailId(e.target.value)}
          placeholder='Enter your email'
          type='email'
          value={emailId}
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
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'
          type='password'
          value={password}
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
          onChange={(e) => setConfirmedPassword(e.target.value)}
          placeholder='Confirm your password'
          type='password'
          value={confirmedPassword}
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
    </div>
  );
};

export default Signup;
