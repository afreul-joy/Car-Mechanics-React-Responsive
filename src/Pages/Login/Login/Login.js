import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const {signInUsingGoogle} = useAuth()
  return (
    <div>
      <h1>This is say login</h1>
      <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
    </div>
  );
};

export default Login;