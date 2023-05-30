import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Delete, Get, Post, Put } from '../../../config/Axios/apibasemethods';

export default function TeacherForm() {

    let api = "http://localhost:5000/api/teachers";

    const [model, setModel] = useState([]);
    const [isLoading, setisLoading] = useState([]);

    let getdata = () => {
        Get('/teachers').then((res) => {
            console.log(res.data.data);
            setModel({ ...res.data.data });
        })
            .catch((err) => {
                console.log(err);
            });
    };

    let postdata = () => {
        Post('/teachers',
            {
                name: model.name,
                course: model.course,
                contact: model.contact

            }).then((res) => {
                console.log(res);
                setModel({ ...res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let putdata = () => {
        Put('/teachers', '647228da822e57f6a6042219',
            {
                name: model.name,
                course: model.course,
                contact: model.contact
            }).then((res) => {
                console.log(res.data);
                setModel({ ...res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let delData = () => {
        Delete('/teachers', '646cdd593ddb0e6530ea0c13').then((res) => {
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
            <Box className='text-center m-5 p-5'>

                <Typography variant='h2'>Teacher Form</Typography>
                <Grid contanier className=''>

                    <Grid item md={6} className='p-2 m-3'>
                        <TextField
                            type='text' required
                            label="First Name"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, name: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={6} className='p-2 m-3'>
                        <TextField type='text' required
                            label="Course"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, course: e.target.value })}
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
