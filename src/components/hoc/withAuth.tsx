'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import Loader from '@/components/Loader';

import { AuthService } from '@/services/authService';

type RouteRole = 'auth' | 'protected' | 'all';

export default function withAuth(
  Component: React.ComponentType,
  routeRole: RouteRole
): React.FC {
  const ComponentWithAuth: React.FC = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const isLoggedIn = AuthService.isLoggedIn();

      if (routeRole === 'protected' && !isLoggedIn) {
        router.push('/login');
      } else if (routeRole === 'auth' && isLoggedIn) {
        router.push('/');
      } else {
        setIsLoading(false);
      }
    }, [router]);

    if (!isLoading) {
      return <Component {...props} />;
    }

    return <Loader />;
  };

  return ComponentWithAuth;
}
