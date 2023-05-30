import { IconButton } from "@mui/material";

export default function SMIconButton(props) {
    const { color, iconComponent, disabled, onClick } = props;
    return (
        <>
            <IconButton aria-label="delete"
                onClick={onClick}
                disabled={disabled}
                color={color}>
                {iconComponent}
            </IconButton>
        </>
    )
}