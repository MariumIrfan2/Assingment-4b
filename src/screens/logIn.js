import { Grid, Box, TextField, Typography, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../config/firebaseBaseMethods";


function LogIn() {
    const navigate = useNavigate();
    const [model, setModel] = useState({});

    let signIn = () => {
        console.log(model)
        loginUser(model)
            .then((res) => {
                console.log(res)
                alert("logged in successfully")
            })
            .catch((err) => {
                console.log(err)
                alert("Login Error: Incorrect Email or Password")
            })
    }

    return (
        <Box className='text-center m-5 p-5'>

            <Typography variant='h2'>LogIn</Typography>
            <Grid contanier className=''>

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
                        <Button className="p-3 m-2 text-primary" variant="filled" onClick={() => { navigate("/signup") }}>Already have an account? Signup instead </Button>
                    </div>
                    <div>
                        <Button
                            onClick={signIn}
                            variant='contained'
                        >LogIn</Button>
                    </div>



                </Grid>
            </Grid>
        </Box>
    )
}

export default LogIn;