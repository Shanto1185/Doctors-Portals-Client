import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import login from '../../images/login.png'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const [logninData, setLoginData] = useState({})
    const { user, error, loginWithGoogl, handleCreteNewUser, isLoading } = useAuth();

    const handleLogin = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const newLoginData = { ...logninData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }

    const handleSubimt = e => {
        if (logninData?.password !== logninData?.password2) {
            alert('your password did not match')
        }
        handleCreteNewUser(logninData.email, logninData.password, logninData.name)
        console.log(logninData.email, logninData.password)
        e.preventDefault();
        console.log('clicked')
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom component="div">
                        Register
                        {!isLoading && <form onSubmit={handleSubimt}>
                            <TextField
                                onBlur={handleLogin}
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Your Name"
                                type="name"
                                variant="standard"
                                name="name"
                            />
                            <TextField
                                onBlur={handleLogin}
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Your Email"
                                type="email"
                                variant="standard"
                                name="email"
                            />
                            <TextField
                                onBlur={handleLogin}
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Password"
                                type="password"
                                variant="standard"
                                name="password"
                            />
                            <TextField
                                onBlur={handleLogin}
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Confirm Your Password"
                                type="password"
                                variant="standard"
                                name="password2"
                            />
                            <Button
                                sx={{ width: '75%', m: 2 }}
                                variant="contained"
                                type="submit"
                            >
                                Register
                            </Button>


                            <Button
                                sx={{ width: '75%', m: 2 }}
                                variant="contained"
                                onClick={loginWithGoogl}
                            >
                                Register With Google
                            </Button>


                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button
                                    variant="text">
                                    Already have an account? Please Login.
                                </Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Registration Successful</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Register;