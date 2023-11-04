import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

const NarrowLayout = () => {
  return (
    <Container disableGutters maxWidth="xs">
      <Outlet />
    </Container>
  );
};

export default NarrowLayout;
