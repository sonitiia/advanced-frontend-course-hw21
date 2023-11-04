import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const PageNotFoundRoute = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1, { replace: true });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt="20%">
      <Typography variant="h2">Page not found</Typography>
      <Button variant="contained" size="large" onClick={handleBackClick}>
        Go back
      </Button>
    </Box>
  );
};

export default PageNotFoundRoute;
