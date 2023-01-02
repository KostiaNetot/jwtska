import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../store';
import { loginUser } from '../../store/actions/action-creator';

function Login() {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ login, password }));
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='login'>Login: </label>
          <input
            name='login' 
            type='text' 
            value={login} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input 
            name='password' 
            type='password' 
            value={password} 
            onChange={handlePasswordChange} 
          />
        </div>
        <button type='submit'>Submit</button>
      </form>    
    </div>
  )
}

export default Login