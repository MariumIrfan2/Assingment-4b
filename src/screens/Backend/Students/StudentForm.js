import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Delete, Get, Post, Put } from '../../../config/Axios/apibasemethods';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export default function StudentForm() {

    const [model, setModel] = useState({});
    const [isLoading, setisLoading] = useState([]);
    const navigate = useNavigate()

    let { id } = useParams();
    // console.log(id)

    let postdata = () => {
        Post('/students', id,
            {
                firstName: model.firstName,
                lastName: model.lastName,
                email: model.email,
                password: model.password,
                contact: model.contact,
            }).then((res) => {
                console.log(res);
                setModel({ ...res.data });
                navigate('/backendstudentlist')
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let getdata = () => {
        Get('/students').then((res) => {
            console.log(res.data.data);
            setModel({ ...res.data.data });
        })
            .catch((err) => {
                console.log(err);
            });
    };







    useEffect(() => {
        getdata();
    }, []);

    return <div>
        <Box className='text-center m-5 p-5'>

            <Typography variant='h2'>Student Form</Typography>
            <Grid contanier className=''>

                <Grid item md={6} className='p-2 m-3'>
                    <TextField
                        type='First Name' required
                        label="First Name"
                        variant="outlined"
                        onChange={(e) => setModel({ ...model, firstName: e.target.value })}
                    />
                </Grid>
                <Grid item md={6} className='p-2 m-3'>
                    <TextField type='Last Name' required
                        label="Last Name"
                        variant="outlined"
                        onChange={(e) => setModel({ ...model, lastName: e.target.value })}
                    />
                </Grid>
                <Grid item md={6} className='p-2 m-3'>
                    <TextField type='email' required
                        label="Email"
                        variant="outlined"
                        onChange={(e) => setModel({ ...model, email: e.target.value })}
                    />
                </Grid>
                <Grid item md={6} className='p-2 m-3'>

                    <TextField type='password' required
                        label="Password"
                        variant="outlined"
                        onChange={(e) => setModel({ ...model, password: e.target.value })}
                    />
                </Grid>
                <Grid item md={6} className='p-2 m-3'>

                    <TextField type='number' required
                        label="Contact"
                        variant="outlined"
                        onChange={(e) => setModel({ ...model, contact: e.target.value })}
                    />
                </Grid>

                <Grid item md={6} className='p-2 m-3'>
                    <div>
                        <Button
                            onClick={postdata}
                            variant='contained'
                        >Submit</Button>
                    </div>
                </Grid>
            </Grid>
        </Box>
    </div>

}
