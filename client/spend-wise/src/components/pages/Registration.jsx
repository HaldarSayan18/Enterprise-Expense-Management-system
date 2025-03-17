import React, { useEffect, useState } from 'react';
import "../assets/styles/Page.css";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
// material ui components
import { Box, Button, FormControl, IconButton, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Registration = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // validation
  const [formData, setFormData] = useState({
    id: '',
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    rePassword: '',
    isChecked: false
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
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
      tempErrors.fullName = "Employee Full Name is required.";
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

  // Handle focus on inputs
  const handleFocus = (field) => {
    setFocusedField(field);
  };

  // Handle blur to remove focus
  const handleBlur = () => {
    setFocusedField('');
  };

  // Automatically validate when form data changes
  useEffect(() => {
    const isValid = validate();
    setIsFormValid(isValid && formData.isChecked);
  }, [formData]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate() && formData.isChecked) {
      console.log("Form Data Submitted:", formData);
      toast.success(`${formData.fullName} have registered successfully.`, {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate('/login');
        // reset the form data
        setFormData({
          id: '',
          fullName: '',
          email: '',
          mobile: '',
          password: '',
          rePassword: '',
          isChecked: false
        });
      }, 2000);
      setErrors({});
    } else {
      console.log("Validation failed.");
    }
  };

  // Toggle password visibility
  const handleShowPassword = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  return (
    <Box className="register-container">
      <ToastContainer />
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
          <p id='register'>Create an Account</p>
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
              onFocus={() => handleFocus('id')}
              onBlur={handleBlur}
              error={Boolean(errors.id)}
              helperText={focusedField === 'id' && errors.id ? errors.id : ''}

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
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                error={Boolean(errors.email)}
                helperText={focusedField === 'email' && errors.email ? errors.email : ''}
              />
            </Grid>

            {/* mobile */}
            <Grid size={4}>
              <TextField
                fullWidth
                max={10}
                type='tel'
                name='mobile'
                autoComplete='off'
                value={formData.mobile}
                required
                id="outlined-mobile"
                label="Contact number"
                placeholder="Enter your phone number"
                onChange={handleChange}
                onFocus={() => handleFocus('mobile')}
                onBlur={handleBlur}
                error={Boolean(errors.mobile)}
                helperText={focusedField === 'mobile' && errors.mobile ? errors.mobile : ''}
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
              onFocus={() => handleFocus('fullName')}
              onBlur={handleBlur}
              error={Boolean(errors.fullName)}
              helperText={focusedField === 'fullName' && errors.fullName ? errors.fullName : ''}
            />

            {/* password */}
            <Grid size={4.8}>
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={formData.password}
                required
                id="outlined-password"
                label="Password"
                placeholder="Enter your password"
                onChange={handleChange}
                onFocus={() => handleFocus('password')}
                onBlur={handleBlur}
                error={Boolean(errors.password)}
                helperText={focusedField === 'password' && errors.password ? errors.password : ''}
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
            </Grid>

            {/* re-password */}
            <Grid size={4.8}>
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                name='rePassword'
                value={formData.rePassword}
                required
                id="outlined-re-password"
                label="Re-type Password"
                placeholder="Confirm your password"
                onChange={handleChange}
                onFocus={() => handleFocus('rePassword')}
                onBlur={handleBlur}
                error={Boolean(errors.rePassword)}
                helperText={focusedField === 'rePassword' && errors.rePassword ? errors.rePassword : ''}
              />
            </Grid>
          </Grid>
          {/* check-box */}
          <Box className="form-check">
            <input className="form-check-input" type="checkbox" name='isChecked' checked={formData.isChecked} id="flexCheckDefault" onChange={handleChange} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              By clicking you agree our <a href='/register'>Terms of use</a> and <a href='/register'>Policies</a>.
            </label>
          </Box>
          {/* submit button */}
          <Button id='submitBtn' type='submit' variant="contained" disabled={!isFormValid} startIcon={<ExitToAppIcon />} sx={{ width: "80%" }}>
            Register
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Registration
