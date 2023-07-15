import React, { useState } from "react";

import { TextField,  Button,Box } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { creds } from "../../credentials";
import { useNavigate } from "react-router-dom";

 
const Login = () => { 
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = creds?.find(vv=>vv?.email===email)
    if (!user) {
      toast.error('User does not exist ', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    else if (user?.password != password) {
        toast.error('Password does not match ', {
          position: toast.POSITION.TOP_RIGHT
        })
    }
    else {
      localStorage.setItem('creds', email);
     navigate('/')
    }
   
  
    
  }
  return ( 
    <Box style ={{backgroundImage: 'url("https://wallpapercave.com/wp/wp2383941.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: "cover",height:"100vh",opacity:0.7,display:"flex",justifyContent:"center",alignItems:"center" }}>
      <Box style={{ maxWidth: "max-content", backgroundImage: "linear-gradient(60deg, blue, violet,yellow)",padding:"20px",borderRadius:"10px" }}>
        <h3>Login to see your faviourite characters</h3>
        
        <form onSubmit={handleSubmit} autoComplete="off"  >
            
                 <TextField 
                    label="Email"
                    required
                    color="primary"
            type="email"
            onChange={e => setEmail(e.target.value)}
                        value={email}
                   placeholder="email Or username"
                    fullWidth
                    sx={{mb: 2, mt:3,backgroundColor:"aquamarine"}}
                />
                 <TextField 
                    label="Password"
                    required
                    color="primary"
            type="password"
            onChange={e => setPassword(e.target.value)}
                        value={password}
                    fullWidth
                    sx={{mb: 2,backgroundColor:"aquamarine"}}
                 />
          <Button sx={{backgroundColor:"green"}} backgroundColor="green" variant="outlined" color="primary" type="submit" >Login</Button>
             
        </form>
        <ToastContainer />
        </Box>
      </Box>
       
     );
}

export default Login