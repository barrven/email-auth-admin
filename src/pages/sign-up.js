'use client'
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import style from '@/styles/Form.module.css'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  //calling this hook will return an array in which the first value
  //is a createUserWithEmailAndPassword function that allows us to create a user. 
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res = await createUserWithEmailAndPassword(email, password);
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
        <h1>Sign up</h1>
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
            
            <button type="submit">Sign Up</button>

            <div className={style.centered}>
                <a onClick={()=>{ router.push('/sign-in'); }} >
                    Go to sign in
                </a>
          </div>
        </form>

    </div>
  );
};

export default SignUp;
