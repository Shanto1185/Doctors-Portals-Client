import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useFirebase from './../../../hooks/useFirebase';

const Navigation = () => {
    const { user, logOut } = useFirebase();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/dashboard">
                        <Button color="inherit">Dashboard</Button>
                    </NavLink>
                    {
                        user?.email ?
                            <Button
                                variant="contained"
                                onClick={logOut}
                            >
                                LogOut
                            </Button>
                            :
                            <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;