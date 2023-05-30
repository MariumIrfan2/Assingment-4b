import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Delete, Get, Post, Put } from '../../../config/Axios/apibasemethods';

export default function InstitueFormBackend() {

    let api = "http://localhost:5000/api/institutes";

    const [model, setModel] = useState([]);
    const [isLoading, setisLoading] = useState([]);



    let getdata = () => {
        Get('/institutes').then((res) => {
            console.log(res.data.data);
            setModel({ ...res.data.data });
        })
            .catch((err) => {
                console.log(err);
            });
    };

    let postdata = () => {
        Post('/institutes',
            {
                name: model.name,
                shortName: model.name,
                address: model.address,
                tel: model.tel

            }).then((res) => {
                console.log(res);
                setModel({ ...res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let putdata = () => {
        Put('/institutes', '64722aef822e57f6a604223a',
            {
                name: model.name,
                shortName: model.name,
                address: model.address,
                tel: model.tel
            }).then((res) => {
                console.log(res.data);
                setModel({ ...res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let delData = () => {
        Delete('/institutes', '64722aef822e57f6a604223a').then((res) => {
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

                <Typography variant='h2'>Institute Form</Typography>
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
                            label="Address"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, address: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={6} className='p-2 m-3'>
                        <TextField type='number' required
                            label="Tel"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, tel: e.target.value })}
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
