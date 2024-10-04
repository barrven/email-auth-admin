'use client';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import { UserContext } from '@/services/UserContext'; // Import the context

const Layout = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {

    if (!loading && !user && router.pathname !== '/sign-in' && router.pathname !== '/sign-up') {
        console.log('----',user)
        router.push('/sign-in');
    }

  }, [user, loading, router]);

  return (
    <UserContext.Provider value={user}>
      <div>
        <Navbar/>
        {children}
      </div>
    </UserContext.Provider>
  );
};

export default Layout;
