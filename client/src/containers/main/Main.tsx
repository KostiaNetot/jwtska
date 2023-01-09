import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import Login from '../../components/login';
import { logoutUser } from '../../store/actions/action-creator';

function Main() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector((state: RootState) => !!state.auth.authData.accessToken);

  const renderProfile = () => (
    <div>
      <div>You successfully authorized</div>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  );

  return (
    <div>
      <h1>Main</h1>
      {isLoggedIn ? renderProfile() : <Login/>}
    </div>
  )
}

export default Main