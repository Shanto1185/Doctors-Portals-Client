import React from 'react';
import { Grid } from '@mui/material'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ appoinment, date }) => {
    const { name, time, space } = appoinment;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (

        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ p: 4 }} elevation={3} >
                    <Typography sx={{ color: 'info.main', fontWeight: 'bolder' }} variant="h4" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space}AVAILABLE SPACE
                    </Typography>
                    <Button onClick={handleOpen} sx={{ px: 2, my: 2 }} variant="contained">BOOK APPOINMETN</Button>
                </Paper>
            </Grid>
            <BookingModal

                handleClose={handleClose}
                open={open}
                appoinment={appoinment}
                date={date}
            >
            </BookingModal>
        </>
    );
};

export default Booking;