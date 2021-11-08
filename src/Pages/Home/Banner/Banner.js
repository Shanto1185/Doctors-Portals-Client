import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const bannerBackground = {
    background: `url(${bg})`
}
const position = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container style={bannerBackground} >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }} item xs={12} md={6}>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', my: 5 }} variant="h3">
                                Your New Smile <br /> Starts Here
                            </Typography>
                            <Typography variant="p">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, perferendis.
                            </Typography>
                            <Link to="/appoinment"> <Button variant="contained">Get Appoinment</Button></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={position}>
                        <img src={chair}
                            style={{ width: '350px' }}
                            alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;