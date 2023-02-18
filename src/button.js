import { Button, Box, Grid } from "@mui/material";

function Option(props) {
    return (
        <Box className='options'>
            <Button variant="contained">{props.btnValue}</Button>
        </Box>

    )
}

export default Button;