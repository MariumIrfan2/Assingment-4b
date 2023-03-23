import { Button, Grid, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postFBData } from "../../config/firebaseBaseMethods";

export default function InstituteForm() {

    const navigate = useNavigate();
    const [model, setModel] = useState({});
    let instituteType = [
        {
            insituteType: "School",
            key: "school"
        },
        {
            insituteType: "College",
            key: "college"
        },
        {
            insituteType: "University",
            key: "university"
        },
        {
            insituteType: "Institute",
            key: "institute"
        }
    ]

    let createInstitue = () => {
        console.log(model)
        postFBData("InstiuteRegistration", model,)
            .then((res) => {
                console.log(res)
                alert("Instuted Registered")
            })
            .catch((err) => {
                console.log(err)
                alert("Registration Error")
            })
    }
    return (
        <>
            <Box className='text-center'>
                <Typography variant='h4'>Institute Registration Form</Typography>
                <Grid contanier className='text-center'>

                    <Grid item md={4} className='p-2 m-3'>
                        <TextField type='text' required
                            label="Institute name"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, instituteName: e.target.value })}
                        />

                    </Grid>


                    <Grid item md={6} className='p-2 m-3'>
                        <TextField type='text' required
                            label="Institue Short Name"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, instituteShortName: e.target.value })}
                        />
                    </Grid>

                    <Grid item md={6} className='p-2 m-3'>

                        <TextField type='number' required
                            label="No of campus "
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, noOfCampus: e.target.value })}
                        />
                    </Grid>

                    <Grid item md={6} className='p-2 m-3'>
                        <Typography variant="body">Institute Type: </Typography>
                        <select onChange={(e) => setModel({
                            ...model,
                            instituteType: e.target.value
                        })} >
                            <option>Select</option>
                            {instituteType.map((x, i) => {
                                return <option key={i}
                                    value={x.key}>
                                    {x.insituteType}
                                </option>
                            })}
                        </select>
                    </Grid>

                    <Grid item md={6} className='p-2 m-3'>
                        <p>Campus Details</p>
                        <TextField type='text' required

                            label="Campus detail in Array"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, instituteShortName: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={6} className='p-2 m-3'>
                        <TextField type='text' required
                            label="Location"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, instituteShortName: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={6} className='p-2 m-3'>
                        <TextField type='text' required
                            label="Address"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, instituteShortName: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={6} className='p-2 m-3'>
                        <TextField type='text' required
                            label="Contact"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, instituteShortName: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={6} className='p-2 m-3'>
                        <TextField type='text' required
                            label="Owner Contact"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, instituteShortName: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={6} className='p-2 m-3'>
                        <TextField type='email' required
                            label="Owner Email"
                            variant="outlined"
                            onChange={(e) => setModel({ ...model, instituteShortName: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={6} className='p-2 m-3'>
                        <Button
                            onClick={createInstitue}
                            variant='contained'
                        >Register Institute</Button>

                    </Grid>



                </Grid>
            </Box>
        </>
    )
}


