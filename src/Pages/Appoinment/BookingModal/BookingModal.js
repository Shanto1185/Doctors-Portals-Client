import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ handleClose, open, appoinment, date, setBookingSuccess }) => {
    const { user } = useAuth()
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)
    const { name, time } = appoinment;



    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        console.log(newInfo)
        setBookingInfo(newInfo);
    }

    const handleSubmit = e => {
        e.preventDefault();
        // alert('Your submission is completed');
        //collect data
        const appoinment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // console.log(appoinment)
        //send data to server
        fetch('http://localhost:5000/appoinments', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleClose();
                }
            })


    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography sx={{ mt: 2, fontWeight: 'bolder' }} id="transition-modal-title" variant="h4" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ widh: '90 %', margin: 1 }}
                            disabled
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ widh: '90 %', margin: 1 }}
                            id="outlined-size-small"
                            name='patientName'
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ widh: '90 %', margin: 1 }}
                            id="outlined-size-small"
                            name='email'
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ widh: '90 %', margin: 1 }}
                            id="outlined-size-small"
                            name='phone'
                            onBlur={handleOnBlur}
                            defaultValue='Phone-Number'
                            size="small"
                        />
                        <TextField
                            sx={{ widh: '90 %', margin: 1 }}
                            disabled
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <br />
                        <Button type='submit' variant="contained">Submit</Button>
                        {/* <Typography variant="h5" id="transition-modal-description" sx={{ mt: 2 }}>
                        {time}
                    </Typography> */}
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;