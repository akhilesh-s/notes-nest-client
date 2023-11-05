'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import logger from '@/lib/logger';
import { Network } from '@/lib/network';
import Utils from '@/lib/utils';

import withAuth from '@/components/hoc/withAuth';
import Login from '@/components/login/login';

import { ILoginUser } from '@/common/types/user';
import { UrlManager } from '@/provider/urlManager';

const LoginPage = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (loginData: ILoginUser): Promise<void> => {
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

        if (resp) {
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

  return <Login errorMessage={errorMessage} handleLogin={handleSubmit} />;
};

export default withAuth(LoginPage, 'all');
