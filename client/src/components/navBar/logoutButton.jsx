import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/features/authSlice';

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <li className="btn-nav">
      <button onClick={() => dispatch(logout())}>Logout</button>
    </li>
  )
};

export default Logout;