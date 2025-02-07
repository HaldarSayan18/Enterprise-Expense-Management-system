import React from 'react';
import "../assets/styles/Page.css";
// material ui & bootstrap
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const Login = () => {
    return (
        <Box className="login-container">
            {/* login with */}
            <Box className="login-details1">
                <p id='login1'> Sign</p>
                {/* <Divider /> */}
                    <Button variant="outlined" href='/login' startIcon={<GoogleIcon />} sx={{
                        width: "95%",
                        height: "10%",
                        borderRadius: "10px"
                    }}>
                        Sign in with Google
                    </Button>
                <Button variant="outlined" href='/login' startIcon={<FacebookIcon />} sx={{
                    width: "95%",
                    height: "10%",
                    borderRadius: "10px"
                }}>
                    Sign in with Facebook
                </Button>
                <Button variant="outlined" href='/login' startIcon={<EmailIcon />} sx={{
                    width: "95%",
                    height: "10%",
                    borderRadius: "10px"
                }}>
                    Sign in Email Id
                </Button>
                <Box className="policy">
                    <span>
                        By signing up, you agree to the <a href='/login'>terms & conditions</a> of the service and acknowledge our <a href='/login'>private policy</a>.
                    </span>
                </Box>
            </Box>
            {/* login */}
            <Box className="login-details2">
                <p id='login2'>In</p>
                {/* <Divider /> */}
                <TextField
                    type='text'
                    required
                    id="outlined-required1"
                    label="Email or phone number"
                    placeholder="Enter email or phone number"
                    sx={{ width: "95%" }}
                />
                <TextField
                    type='password'
                    required
                    id="outlined-required2"
                    label="Password"
                    placeholder="Enter your password"
                    sx={{ width: "95%" }}
                />
                <Button variant="contained" endIcon={<LoginIcon />} sx={{ width: "95%" }}>
                    Sign in
                </Button>
                <Box className="form-check">
                    <span>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </span>
                    <a href='/login'>forgot password?</a>
                </Box>
                <Box className="">

                </Box>
            </Box>
        </Box>
    )
}

export default Login
