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
            <Box className="p-2 mb-4 bg-white shadow d-flex align-items-center">
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
                            <Tooltip key={i} title={x.tooltip}>
                                {x.displayField}
                            </Tooltip>
                        ))
                        : null}
                </Box>
            </Box>
        </>
    );
}
export default ScreenHeader;