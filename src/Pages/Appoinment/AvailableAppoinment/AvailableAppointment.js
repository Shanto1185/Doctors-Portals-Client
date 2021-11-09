import React, { useState } from 'react';
import { Container } from '@mui/material';
import { Grid } from '@mui/material'
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';


const appoinmetns = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 5
    },
    {
        id: 4,
        name: 'Pediaotic Dental',
        time: '06.00 AM - 07.00 AM',
        space: 10
    },
    {
        id: 5,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 AM',
        space: 5
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 AM - 08.00 AM',
        space: 10
    },
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography style={{ fontWeight: "400", textAlign: 'center', margin: '5px' }} variant="h3">
                appoinment available {date.toDateString()}
            </Typography>
            {bookingSuccess && <Typography style={{ textAlign: 'center', margin: '5px' }} variant="p">
                Booking Is Successed
            </Typography>}
            <Grid container spacing={2}>
                {
                    appoinmetns.map(appoinment => <Booking
                        key={appoinment.id}
                        appoinment={appoinment}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;