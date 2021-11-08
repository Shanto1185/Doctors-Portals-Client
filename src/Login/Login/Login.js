import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import login from '../../images/login.png'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { loginWithGoogl } = useAuth();

    const [logninData, setLoginData] = useState({})

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

        e.preventDefault();
        console.log('clicked')
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom component="div">
                        Login
                        <form onSubmit={handleSubimt}>
                            <TextField
                                onChange={handleLogin}
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Your Email"
                                type="password"
                                variant="standard"
                                name="email"
                            />
                            <TextField
                                onChange={handleLogin}
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Password"
                                type="password"
                                variant="standard"
                                name="password"
                            />
                            <Button
                                sx={{ width: '75%', m: 2 }}
                                variant="contained"
                                type="submit"
                            >
                                Login
                            </Button>

                            <Button
                                sx={{ width: '75%', m: 2 }}
                                variant="contained"
                                onClick={loginWithGoogl}
                            >
                                Login With Google
                            </Button>



                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button
                                    variant="text">
                                    New to Doctors Portal? Please Register.
                                </Button>
                            </NavLink>
                        </form>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;