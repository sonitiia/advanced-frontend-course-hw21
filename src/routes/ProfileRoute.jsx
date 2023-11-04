import { Button } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { SIGN_OUT_ROUTE } from "../app/Routes";

const ProfileRoute = () => {
  return (
    <div>
      <Button variant="contained" to={SIGN_OUT_ROUTE} component={RouterLink}>
        Sign out
      </Button>
    </div>
  );
};

export default ProfileRoute;
