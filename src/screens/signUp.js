import { Grid, Box, TextField, Typography, Button, InputLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignUpUser } from "../config/firebaseBaseMethods";


function SignUp() {
    const navigate = useNavigate();

    const [model, setModel] = useState({});
    let CategoryType = ["Admin", "Student", "Teacher", "Institute"];

    let createUser = () => {
        console.log(model)
        SignUpUser(model)
            .then((res) => {
                console.log(res)
                alert("Signed up successfully")
            })
            .catch((err) => {
                console.log(err)
                alert("sign up Error")
            })
    }

    return (
        <Box className='text-center m-5 p-5'>


            <Typography variant='h2'>SignUp</Typography>
            <Grid contanier className=''>

                <Grid item md={4} className='p-2 m-3'>
                    <TextField type='text' required
                        label="Name"
                        variant="outlined"
                        onChange={(e) => setModel({ ...model, userName: e.target.value })}
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
                    <div>
                        <Button className="p-3 m-2 text-primary"
                            variant="filled"
                            onClick={() => { navigate("/login") }}>Already have an account? Login instead </Button>
                    </div>
                    <div>
                        <br />
                        <Button
                            onClick={createUser}
                            variant='contained'
                        >SignUp</Button>
                    </div>

                </Grid>
            </Grid>
        </Box>
    )
}

export default SignUp;