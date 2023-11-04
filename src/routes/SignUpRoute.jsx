import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import StyledNarrowStack from "../components/styled/StyledNarrowStack";
import SignUpForm from "../components/forms/SignUpForm";

const SignUpRoute = () => {
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
        <Typography variant="h5">Sign up</Typography>
      </Stack>
      <SignUpForm />
      <Typography textAlign="center" variant="caption" mt={8}>
        Copyright © Your Website 2023.
      </Typography>
    </StyledNarrowStack>
  );
};

export default SignUpRoute;
