import { Button } from "@mui/material"

function SMButton(props) {
    const { label, disabled, fullWidth, endIcon, startIcon, onClick, variant } = props

    return ( 
   <>

        <Button
            variant={variant}
            disabled={disabled}
            fullWidth={fullWidth}
            endIcon={endIcon}
            startIcon={startIcon}
            onClick={onClick}
        >
            {label}

        </Button>
    </>)
}
export default SMButton;