import React, { useState } from 'react';
import "../assets/styles/Page.css";
// material ui & bootstrap
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { FormControl } from '@mui/material';

const Login = () => {
    const [loginData, setLoginData] = useState({
        id:'',
        password: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update form data
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Validation logic
    const validateLogin = () => {
        let tempErrors = {};

        if (!loginData.id) {
            tempErrors.id = "Employee ID is required.";
        } else if (loginData.id.length < 3) {
            tempErrors.id = "Enter id properly.";
        } else if (loginData.id.length > 3) {
            tempErrors.id = "";
        }
        if (!loginData.password) {
            tempErrors.password = "Password is required.";
        } else if (loginData.password.length < 8) {
            tempErrors.password = "Password length must be more than 8.";
        } else if (loginData.password.length >= 8) {
            tempErrors.password = ""
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).every((key) => !tempErrors[key]);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateLogin()) {
            console.log("Form Data Submitted:", loginData);
            alert("Login successful!");
            // Clear the form (optional)
            setLoginData({
                id: '',
                password: ''
            });
            setErrors({});
        } else {
            console.log("Login failed.");
        }
    };

    const [errors, setErrors] = useState({});
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
            <FormControl component='form' className="login-details2" onSubmit={handleSubmit}>
                <p id='login2'>In</p>
                {/* <Divider /> */}
                <TextField
                    type='text'
                    autoComplete='off'
                    id="outlined-required1"
                    label="Employee Id"
                    placeholder="Enter your id"
                    name='id'
                    value={loginData.id}
                    onChange={handleChange}
                    error={Boolean(errors.id)}
                    helperText={errors.id}
                    sx={{ width: "95%" }}
                />
                <TextField
                    type='password'
                    id="outlined-required2"
                    label="Password"
                    placeholder="Enter your password"
                    name='password'
                    value={loginData.password}
                    onChange={handleChange}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                    sx={{ width: "95%" }}
                />
                <Button variant="contained" type='submit' endIcon={<LoginIcon />} sx={{ width: "95%" }}>
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
                <Box className=""></Box>
            </FormControl>
        </Box>
    )
}

export default Login
