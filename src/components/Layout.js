'use client'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { auth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

import { useRouter } from "next/router";
// import { signOut } from "firebase/auth";

import Navbar from "@/components/Navbar";


const Layout = ({ children }) => {
    const [user] = useAuthState(auth);
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
        <div>
            {/* You can include your Navbar or other components here */}
            <Navbar user={user}/>
            {children}
        </div>
    );
};

export default Layout;
