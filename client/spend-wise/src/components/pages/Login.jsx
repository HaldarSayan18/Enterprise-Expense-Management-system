import React, { useEffect, useState } from 'react';
import "../assets/styles/Page.css";
import { toast, ToastContainer } from 'react-toastify';
// material ui & bootstrap
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { FormControl, IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const [loginData, setLoginData] = useState({
        id: '',
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
            // toast.error(tempErrors.id, { position: "top-right" });
        } else if (loginData.id.length < 3) {
            tempErrors.id = "Enter id properly.";
            // toast.error(tempErrors.id, { position: "top-right" });
        } else if (loginData.id.length > 3) {
            tempErrors.id = "";
        }
        if (!loginData.password) {
            tempErrors.password = "Password is required.";
            // toast.error(tempErrors.password, { position: "top-right" });
        } else if (loginData.password.length < 8) {
            tempErrors.password = "Password length must be more than 8.";
            // toast.error(tempErrors.password, { position: "top-right" });
        } else if (loginData.password.length >= 8) {
            tempErrors.password = ""
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).every((key) => !tempErrors[key]);
    };

    // Automatically validate when form data changes
    useEffect(() => {
        const isValid = validateLogin();
    }, [loginData]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateLogin()) {
            console.log("Form Data Submitted:", loginData);
            toast.success(`Logged in successfully.`, {
                position: "top-center",
                autoClose: 2000,
            });
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

    // Toggle password visibility
    const handleShowPassword = () => {
        setShowPassword((prevShow) => !prevShow);
    };

    return (
        <Box className="login-container">
            <ToastContainer />

            {/* login with */}
            <Box className="login-details1">
                <p id='login1'> Sign</p>
                {/* <Divider /> */}
                {/* google */}
                <Button variant="outlined" href='/login' startIcon={<GoogleIcon />} sx={{
                    width: "95%",
                    height: "10%",
                    borderRadius: "10px"
                }}>
                    Sign in with Google
                </Button>
                {/* facebook */}
                <Button variant="outlined" href='/login' startIcon={<FacebookIcon />} sx={{
                    width: "95%",
                    height: "10%",
                    borderRadius: "10px"
                }}>
                    Sign in with Facebook
                </Button>
                {/* email */}
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
                {/* employee id */}
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

                {/* password */}
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    id="outlined-required2"
                    label="Password"
                    placeholder="Enter your password"
                    name='password'
                    value={loginData.password}
                    onChange={handleChange}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                    sx={{ width: "95%" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <Link to="/">
                    <Button variant="contained" type='submit' endIcon={<LoginIcon />} sx={{ width: "100%" }}>
                        Sign in
                    </Button>
                </Link>
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
