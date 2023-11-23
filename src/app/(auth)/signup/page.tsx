'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import logger from '@/lib/logger';
import { Network } from '@/lib/network';
import Utils from '@/lib/utils';

import withAuth from '@/components/hoc/withAuth';
import SignUp from '@/components/signup/signup';

import { ISignupUser } from '@/common/types/user';
import { UrlManager } from '@/provider/urlManager';

const Signup = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSignup = async (signupData: ISignupUser): Promise<void> => {
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

  return <SignUp errorMessage={errorMessage} handleSignup={handleSignup} />;
};

export default withAuth(Signup, 'auth');
