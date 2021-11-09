import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import login from '../../images/login.png'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { user, error, loginWithGoogl, handleOldLogin, isLoading } = useAuth();

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

        handleOldLogin(logninData?.email, logninData?.password)

        e.preventDefault();
        console.log(logninData.email, logninData.password)
        console.log('clicked')
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom component="div">
                        Login
                        {!isLoading && <form onSubmit={handleSubimt}>
                            <TextField
                                onBlur={handleLogin}
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Your Email"
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
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">
                            Login Successful</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}
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