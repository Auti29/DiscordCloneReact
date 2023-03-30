import React from 'react';
import "./Login.css";
import { Button } from "@mui/material";

function Login() {

  const signIn = () => {
    
  }

  return (
    <div className='login'>
      <div className="login__logo"><img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png" alt="" /></div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login
