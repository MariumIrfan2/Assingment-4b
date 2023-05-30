import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SMButton from "./SMButton";

function ScreenHeader(props) {
    const { title, buttonsList } = props;
    const navigate = useNavigate();

    return (
        <>
            <Box className="p-4 mb-4 bg-white shadow d-flex align-items-center justify-content-between">
                <Box>
                    <SMButton
                        onClick={() => {
                            navigate(-1);
                        }}
                        startIcon={<ArrowBackIcon />}
                    />
                </Box>
                <Typography variant="h4" className="text-start">
                    {title}
                </Typography>
                <Box>
                    {buttonsList && Array.isArray(buttonsList) && buttonsList.length > 0
                        ? buttonsList.map((x, i) => (
                            <SMButton key={i} label={x.label} variant="contained"
                            endIcon={x.icon}
                            onClick={x.onClick} />
                        ))
                        : null}
                </Box>
            </Box>
        </>
    );
}
export default ScreenHeader;