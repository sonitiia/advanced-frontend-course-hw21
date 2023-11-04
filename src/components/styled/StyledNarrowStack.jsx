import { Stack } from "@mui/material";
import React from "react";

const StyledNarrowStack = ({ children }) => {
  return (
    <Stack
      gap={4}
      flexDirection="column"
      justifyContent="center"
      sx={{ width: "100%", height: "100vh" }}>
      {children}
    </Stack>
  );
};

export default StyledNarrowStack;
