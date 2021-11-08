import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from './../Service/Service';


const services = [
    {
        id: 1,
        name: 'Fluoride Treatment',
        description: 'lorem lorem loremloremloremloremloremlorem loremloremlorem loremlorem lorem lorem lorem loremlorem ',
        img: fluoride
    },
    {
        id: 2,
        name: 'Cavity  Filling',
        description: 'lorem lorem loremloremloremloremloremlorem loremloremlorem loremlorem lorem lorem lorem loremlorem ',
        img: cavity
    },
    {
        id: 3,
        name: 'Teeth Whitening',
        description: 'lorem lorem loremloremloremloremloremlorem loremloremlorem loremlorem lorem lorem lorem loremlorem ',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ my: 2, color: 'primary.main' }} variant="p" component="div" color="text.secondary">
                    Our Services
                </Typography>
                <Typography sx={{ mt: 2, mb: 6, fontWeight: 500 }} variant="h4" component="div">
                    Services We Provied
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;