import React, { useEffect, useState } from 'react';
import "../assets/styles/Page.css";
import { toast, ToastContainer } from 'react-toastify';
import { Box, TextField, Button, Grid, FormControl, Avatar } from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [profileImage, setProfileImage] = useState(<PersonPinIcon />);
    const [showPassword, setShowPassword] = useState(false);
    const [profileData, setProfileData] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        designation: '',
        department: '',
        address: '',
    });
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle profile image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Validation logic
    const validateProfile = () => {
        // let tempErrors = {};

        // if (!profileData.id) tempErrors.id = "Employee ID is required.";
        // if (!profileData.name) tempErrors.name = "Name is required.";
        // if (!profileData.email.includes('@')) tempErrors.email = "Invalid email format.";
        // if (!profileData.phone.match(/^\d{10}$/)) tempErrors.phone = "Invalid phone number.";
        // if (!profileData.designation) tempErrors.designation = "Designation is required.";
        // if (!profileData.department) tempErrors.department = "Department is required.";
        // if (!profileData.address) tempErrors.address = "Address is required.";
        // setErrors(tempErrors);
        // return Object.keys(tempErrors).length === 0;
    };

    useEffect(() => {
        validateProfile();
    }, [profileData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateProfile()) {
            console.log("Profile Updated:", profileData);
            toast.warning("Profile updated successfully.", { position: "top-center", autoClose: 2000 });
        } else {
            toast.error("Please fix the errors.", { position: "top-center" });
        }
    };

    return (
        <Box sx={{ padding: "1%", display: "flex", flexDirection: "column" }}>
            <ToastContainer />
            <FormControl component='form' onSubmit={handleSubmit} sx={{ gap: "10px" }}>
                {/* add profile image */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <label htmlFor="upload-profile-image">
                        <input type="file" id="upload-profile-image" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                        <Avatar
                            src={profileImage ? profileImage : <PersonPinIcon />}
                            sx={{ width: 120, height: 120, cursor: "pointer" }}
                        />
                    </label>
                </Box>
                <Grid container spacing={2}>
                {/* employee id */}
                    <Grid item xs={6}>
                        <TextField fullWidth label="Employee ID" name="id" value={profileData.id} onChange={handleChange} error={!!errors.id} helperText={errors.id} />
                    </Grid>
                    {/* employee name */}
                    <Grid item xs={6}>
                        <TextField fullWidth label="Full Name" name="name" value={profileData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} />
                    </Grid>
                    {/* employee email */}
                    <Grid item xs={6}>
                        <TextField fullWidth label="Email" name="email" value={profileData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} />
                    </Grid>
                    {/* employee mobile */}
                    <Grid item xs={6}>
                        <TextField fullWidth label="Phone Number" name="phone" value={profileData.phone} onChange={handleChange} error={!!errors.phone} helperText={errors.phone} />
                    </Grid>
                    {/* employee designation */}
                    <Grid item xs={6}>
                        <TextField fullWidth label="Designation" name="designation" value={profileData.designation} onChange={handleChange} error={!!errors.designation} helperText={errors.designation} />
                    </Grid>
                    {/* employee department */}
                    <Grid item xs={6}>
                        <TextField fullWidth label="Department" name="department" value={profileData.department} onChange={handleChange} error={!!errors.department} helperText={errors.department} />
                    </Grid>
                    {/* employee address */}
                    <Grid item xs={12}>
                        <TextField fullWidth label="Address" name="address" multiline rows={3} value={profileData.address} onChange={handleChange} error={!!errors.address} helperText={errors.address} />
                    </Grid>
                </Grid>
                <Box sx={{ marginTop: "20px" }}>
                    <Link to="#">
                        <Button variant="contained" color='secondary' type='button' endIcon={<TipsAndUpdatesIcon />} sx={{ width: "100%" }}>
                            Update Profile
                        </Button>
                    </Link>
                </Box>
            </FormControl>
        </Box>
    );
};

export default Profile;
