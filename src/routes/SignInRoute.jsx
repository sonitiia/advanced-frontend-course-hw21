import React from "react";
import SignInForm from "../components/forms/SignInForm";
import { Avatar, Stack, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import StyledNarrowStack from "../components/styled/StyledNarrowStack";

const SignInRoute = () => {
  return (
    <StyledNarrowStack
      flexDirection="column"
      alignItems="center"
      justifyContent="center">
      <Stack flexDirection="column" alignItems="center" gap={2}>
        <Avatar
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            alignSelf: "center",
          }}>
          <LockOutlinedIcon
            sx={{ color: (theme) => theme.palette.secondary.contrast }}
          />
        </Avatar>
        <Typography variant="h5">Sign in</Typography>
      </Stack>
      <SignInForm />
      <Typography textAlign="center" variant="caption" mt={8}>
        Copyright © Your Website 2023.
      </Typography>
    </StyledNarrowStack>
  );
};

export default SignInRoute;
