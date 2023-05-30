import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Delete, Get, Post, Put } from '../../../config/Axios/apibasemethods';



export default function CourseForm() {

    const [model, setModel] = useState([]);
    const [isLoading, setisLoading] = useState([]);

    let getdata = () => {
        Get('/courses').then((res) => {
            console.log(res.data.data);
            setModel({ ...res.data.data });
        })
            .catch((err) => {
                console.log(err);
            });
    };

    let postdata = () => {
        Post('/courses',
            {
                name: model.name,
                shortName: model.name,
                duration: model.duration,
                fee: model.fee

            }).then((res) => {
                console.log(res);
                setModel({ ...res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let putdata = () => {
        Put('/courses', '647480ef76d7ede8ee2fabd1',
            {
                name: model.name,
                shortName: model.name,
                duration: model.duration,
                fee: model.fee
            }).then((res) => {
                console.log(res.data);
                setModel({ ...res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let delData = () => {
        Delete('/courses', '646cdda23ddb0e6530ea0c16').then((res) => {
            console.log(res.data);
        })
            .catch((err) => {
                console.log(err);
            });
    };


    useEffect(() => {
        getdata();
    }, []);
    return (
        <div>
            <Box className='text-center m-2 p-3'>

                <Typography variant='h2'>Course Form</Typography>
                <Grid contanier className=''>

                    <Grid item md={6} className='p-2 m-3'>
                        <TextField
                            type='text' required
                            label="Name"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, name: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={6} className='p-2 m-3'>
                        <TextField
                            type='text' required
                            label="Short Name"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, shortName: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={6} className='p-2 m-3'>
                        <TextField type='text' required
                            label="duration"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, duration: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={6} className='p-2 m-3'>
                        <TextField type='number' required
                            label="Fee"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, fee: e.target.value })}
                        />
                    </Grid>


                    <Grid item md={6} className='p-2 m-3'>
                        <div>
                            <Button
                                onClick={postdata}
                                variant='contained'
                            >Submit</Button>
                        </div>

                        <br />
                        <div>
                            <Button
                                onClick={putdata}
                                variant='contained'
                            >Edit</Button>
                        </div>
                        <br />
                        <div>
                            <Button
                                onClick={delData}
                                variant='contained'
                            >Delete</Button>
                        </div>

                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
