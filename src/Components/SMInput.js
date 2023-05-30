import { Label } from "@mui/icons-material";
import { TextField } from "@mui/material";


export default function SMInput(props) {
    const { label, type, variant, disabled, onChange, color, fullWidth, placeholder, required } = props;
    return (
        <>
            <TextField
                label={label}
                variant={variant}
                disabled={disabled}
                onChange={onChange}
                color={color}
                fullWidth={fullWidth}
                placeholder={placeholder}
                required={required}
                type={type}
            />
        </>
    )
}