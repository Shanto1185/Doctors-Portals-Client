import React from 'react';
import Grid from '@mui/material/Grid';
import chari from '../../../images/chair.png'
import Calender from '../../Shared/Navigation/Calender/Calender';
import { Container } from '@mui/material';

const AppoinmentHeader = ({ date, setdate }) => {
    return (
        <Container xs={{ mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setdate={setdate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chari} alt=""
                        style={{ width: '350px' }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentHeader;