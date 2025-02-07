import React from 'react';
import "../assets/styles/Page.css";
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <Box className="register-container">
      <Box id="section-image"></Box>
      <Box id="section-content">
        {/* login option */}
        <Box sx={{
          display: "flex",
          marginLeft: "50%",
          boxSizing: "content-box"
        }}>
          <span> Already have account? <Link to='/login'><Button variant='contained' color='secondary'>Sign in</Button></Link></span>
        </Box>
        {/* create account */}
        <Box className="user-details">
          <p id='register'>Create an Acocunt</p>
          <TextField
            type='text'
            required
            id="outlined-required1"
            label="Employee Id"
            placeholder="Enter employee id"
            sx={{ width: "80%" }}
          />
          <TextField
            type='text'
            required
            id="outlined-required1"
            label="Email or phone number"
            placeholder="Enter email or phone number"
            sx={{ width: "80%" }}
          />
          <TextField
            type='password'
            required
            id="outlined-required2"
            label="Password"
            placeholder="Enter your password"
            sx={{ width: "80%" }}
          />
          <TextField
            type='password'
            required
            id="outlined-required2"
            label="Re-type Password"
            placeholder="Confirm your password"
            sx={{ width: "80%" }}
          />
          <Button variant="contained" startIcon={<ExitToAppIcon />} sx={{ width: "80%" }}>
            Register
          </Button>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  )
}

export default Registration
