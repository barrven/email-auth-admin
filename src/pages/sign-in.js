'use client'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';
import style from '@/styles/Form.module.css'


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res = await signInWithEmailAndPassword(email, password);
        console.log({res});
        // sessionStorage.setItem('user', true);
        setEmail('');
        setPassword('');
        router.push('/');
    } catch(e){
        console.error(e);
    }
  };

  return (
    <div className={style.formParent}>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
            </div>
            
            <button type="submit">Sign In</button>

            <div className={style.centered}>
                <a onClick={()=>{ router.push('/sign-up'); }} >
                    Go to sign up
                </a>
          </div>
        </form>

    </div>
  );
};

export default SignIn;
