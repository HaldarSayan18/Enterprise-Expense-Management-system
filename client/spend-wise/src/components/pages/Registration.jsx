import React, { useState } from 'react';
import "../assets/styles/Page.css";
import { Box, Button, FormControl } from '@mui/material';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
// import {toast, ToastContainer}from 'react-toastify'

const Registration = () => {
  // validation
  const [formData, setFormData] = useState({
    id: '',
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    rePassword: ''
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validation logic
  const validate = () => {
    let tempErrors = {};

    if (!formData.id) {
      tempErrors.id = "Employee ID is required.";
    } else if (formData.id.length < 3) {
      tempErrors.id = "Enter id properly.";
    } else if (formData.id.length > 3) {
      tempErrors.id = "";
    }
    if (!formData.fullName) {
      tempErrors.fullName = "Employee fullName is required.";
    } else if (formData.fullName.length <= 5) {
      tempErrors.fullName = "Employee fullName must be more than 5 characters.";
    } else {
      tempErrors.fullName = "";
    }
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    } else {
      tempErrors.email = ""
    }
    if (!formData.mobile) {
      tempErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      tempErrors.mobile = "Mobile number must be 10 digits.";
    } else {
      tempErrors.mobile = ""
    }
    if (!formData.password) {
      tempErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      tempErrors.password = "Password length must be more than 8.";
    } else if (formData.password.length >= 8) {
      tempErrors.password = ""
    }
    if (formData.password !== formData.rePassword) {
      tempErrors.rePassword = "Passwords do not match.";
    } else {
      tempErrors.repassword = ""
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).every((key) => !tempErrors[key]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);
      alert("Registration successful!");
      // Clear the form (optional)
      setFormData({
        id: '',
        fullName: '',
        email: '',
        mobile: '',
        password: '',
        rePassword: ''
      });
      setErrors({});
    } else {
      console.log("Validation failed.");
    }
  };

  return (
    <Box className="register-container">
      {/* <ToastContainer/> */}
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
        <FormControl className="user-details" component='form' noValidate onSubmit={handleSubmit}>
          <p id='register'>Create an Acocunt</p>
          <Grid container spacing={1} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            {/* id */}
            <TextField
              type='text'
              name='id'
              autoComplete='off'
              required
              id="outlined-empid"
              label="Employee Id"
              value={formData.id}
              onChange={handleChange}
              error={Boolean(errors.id)}
              // helperText={errors.id}

              sx={{ width: "79%" }}
            />
            {/* email */}
            <Grid size={5.5}>
              <TextField
                fullWidth
                // error
                type='email'
                name='email'
                autoComplete='off'
                value={formData.email}
                required
                id="outlined-email"
                label="Email id"
                placeholder="Enter your email"
                onChange={handleChange}
                error={Boolean(errors.email)}
              // helperText={errors.email}
              />
            </Grid>
            {/* mobile */}
            <Grid size={4}>
              <TextField
                fullWidth
                type='text'
                name='mobile'
                autoComplete='off'
                value={formData.mobile}
                required
                id="outlined-mobile"
                label="Contact number"
                placeholder="Enter your phone number"
                onChange={handleChange}
                error={Boolean(errors.mobile)}
              // helperText={errors.mobile}
              />
            </Grid>
            {/* name */}
            <TextField
              type='text'
              name='fullName'
              value={formData.fullName}
              required
              autoComplete='off'
              id="outlined-name"
              label="Employee name"
              placeholder="Enter your full name"
              sx={{ width: "79%" }}
              onChange={handleChange}
              error={Boolean(errors.fullName)}
              // helperText={errors.fullName}
            />
            {/* password */}
            <Grid size={4.8}>
              <TextField
                fullWidth
                type='password'
                name='password'
                value={formData.password}
                required
                id="outlined-password"
                label="Password"
                placeholder="Enter your password"
                onChange={handleChange}
                error={Boolean(errors.password)}
                // helperText={errors.password}
              />
            </Grid>
            {/* re-password */}
            <Grid size={4.8}>
              <TextField
                fullWidth
                type='password'
                name='rePassword'
                value={formData.rePassword}
                required
                id="outlined-re-password"
                label="Re-type Password"
                placeholder="Confirm your password"
                onChange={handleChange}
                error={Boolean(errors.rePassword)}
                // helperText={errors.rePassword}
              />
            </Grid>
          </Grid>
          <Box className="form-check">
            <input className="form-check-input" type="checkbox" name='check' defaultChecked id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              By clicking you agree our <a href='/register'>Terms of use</a> and <a href='/register'>Policies</a>.
            </label>
          </Box>
          <Button type='submit' variant="contained" startIcon={<ExitToAppIcon />} sx={{ width: "80%" }}>
            Register
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Registration
