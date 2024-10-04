'use client';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { auth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import { UserContext } from '@/services/UserContext'; // Import the context

const Layout = ({ children }) => {
  const [user] = useAuthState(auth);  // Destructure the user from the hook
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user && router.pathname !== '/sign-in' && router.pathname !== '/sign-up') {
        router.push('/sign-in');
      }
    });

    return () => unsubscribe();
  }, [router]);

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
