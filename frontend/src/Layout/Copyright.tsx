import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LanguageSwitcher from "../Components/LanguageSwitcher";

const Copyright = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
      <Typography variant="body2" color="text.secondary" align="center">
        <Link component={RouterLink} to={"/"} rel="noopener noreferrer">
          SLS
        </Link>
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        Made with{" "}
        <FavoriteIcon sx={{ color: "red", verticalAlign: "middle" }} /> by{" "}
        <Link
          href="https://github.com/maxidragon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maksymilian Gala
        </Link>
      </Typography>
      <Typography align="center">
        <IconButton
          aria-label="GitHubIcon"
          href="https://github.com/maxidragon/SLSWebsite"
          target="_blank"
        >
          <GitHubIcon sx={{ color: "#000" }} fontSize="large" />
        </IconButton>
      </Typography>
      <LanguageSwitcher />
    </Box >
  );
};

export default Copyright;