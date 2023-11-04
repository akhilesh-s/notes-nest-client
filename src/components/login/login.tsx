import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { ILoginUser } from '@/common/types/user';

interface ILoginProps {
  errorMessage: string;
  handleLogin: (data: ILoginUser) => void;
}

const Login = (props: ILoginProps): JSX.Element => {
  const { errorMessage, handleLogin } = props;
  const [loginData, setLoginData] = useState({
    userId: '',
    password: '',
  });

  const router = useRouter();

  const handleSubmit = (): void => {
    handleLogin(loginData);
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
