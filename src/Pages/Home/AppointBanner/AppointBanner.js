import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Container } from '@mui/material';

const appoinmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: ' darken, luminosity',
    marginTop: 200
};
const AppointBanner = () => {
    return (
        <Container>
            <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: '-105px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }} item xs={12} md={6}>
                        <Box>
                            <Typography sx={{ mb: 5 }} variant="h5" component="div" color="text.secondary">
                                Appoinmet
                            </Typography>
                            <Typography sx={{ color: 'white', fontWeight: 'bold', my: 2 }} variant="h4" component="div" color="text.secondary">
                                Make An Appointment Today
                            </Typography>
                            <Typography sx={{ color: 'white', mb: 2 }} variant="p" component="div" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nam quos, quam vitae non velit in magni dignissimos numquam facere.
                            </Typography>
                            <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
};

export default AppointBanner;