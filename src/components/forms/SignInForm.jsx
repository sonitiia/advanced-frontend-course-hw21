import { Button, FormControlLabel, Link, Stack } from "@mui/material";
import StyledTextField from "../styled/StyledTextField";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { PROFILE_ROUTE, SIGN_UP_ROUTE } from "../../app/Routes";
import useAuth from "../../auth/useAuth";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "all" });

  const navigate = useNavigate();

  const { signIn } = useAuth();

  const onSubmit = async (data) => {
    try {
      const { email, password, rememberMe } = data;
      await signIn({ email, password, rememberMe });

      navigate(PROFILE_ROUTE);
    } catch {
      setError("password", {
        type: "invalidPassword",
        message: "Invalid credentials.",
      });
    }
  };

  return (
    <Stack gap={2} onSubmit={handleSubmit(onSubmit)} component="form">
      <StyledTextField
        label="Email Address *"
        color="primary"
        register={{
          ...register("email", {
            required: {
              value: true,
              message: "Field is required!",
            },
            maxLength: {
              value: 320,
              message: "Max length is 100 symbols!",
            },
            pattern: {
              value: /[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]{2,}\.[A-Z|a-z]{2,}/,
              message: "Enter a valid email!",
            },
          }),
        }}
        helperText={errors?.email ? errors.email.message : " "}
        err={!!errors?.email}
      />

      <StyledTextField
        label="Password *"
        color="primary"
        register={{
          ...register("password", {
            required: {
              value: true,
              message: "Field is required!",
            },
            minLength: {
              value: 8,
              message: "Min length is 8 symbols!",
            },
            maxLength: {
              value: 32,
              message: "Max length is 32 symbols!",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
              message: "Enter a valid email!",
            },
          }),
        }}
        helperText={errors?.password ? errors.password.message : " "}
        err={!!errors?.password}
      />

      <FormControlLabel
        control={<Checkbox {...register("rememberMe")} />}
        label="Remember me"
      />

      <Button variant="contained" type="submit" sx={{ mt: 4 }}>
        Sign in
      </Button>

      <Stack flexDirection="row" justifyContent="space-between">
        <Link variant="caption" to={"#"} component={RouterLink}>
          Forgot password?
        </Link>
        <Link variant="caption" to={SIGN_UP_ROUTE} component={RouterLink}>
          Don't have an account? Sign up
        </Link>
      </Stack>
    </Stack>
  );
};

export default SignInForm;
