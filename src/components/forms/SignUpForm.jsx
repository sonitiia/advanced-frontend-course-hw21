import { Button, FormControlLabel, Link, Stack } from "@mui/material";
import StyledTextField from "../styled/StyledTextField";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { PROFILE_ROUTE, SIGN_IN_ROUTE } from "../../app/Routes";
import useAuth from "../../auth/useAuth";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "all" });

  const navigate = useNavigate();

  const { signUp } = useAuth();

  const onSubmit = async (data) => {
    try {
      const { email, password, firstName, lastName, receivePromotions } = data;
      await signUp({
        email,
        password,
        firstName,
        lastName,
        receivePromotions,
      });

      navigate(PROFILE_ROUTE);
    } catch {
      setError("email", {
        type: "invalidCredentials",
        message: "Invalid credentials.",
      });
    }
  };

  return (
    <Stack gap={2} onSubmit={handleSubmit(onSubmit)} component="form">
      <Stack flexDirection="row" justifyContent="space-between" flexWrap="wrap">
        <StyledTextField
          label="First Name *"
          color="primary"
          register={{
            ...register("firstName", {
              required: {
                value: true,
                message: "Field is required!",
              },
              minLength: {
                value: 3,
                message: "Min length is 3 symbols!",
              },
              maxLength: {
                value: 100,
                message: "Max length is 100 symbols!",
              },
            }),
          }}
          helperText={errors?.firstName ? errors.firstName.message : " "}
          err={!!errors?.firstName}
        />
        <StyledTextField
          label="Last Name *"
          color="primary"
          register={{
            ...register("lastName", {
              required: {
                value: true,
                message: "Field is required!",
              },
              minLength: {
                value: 3,
                message: "Min length is 3 symbols!",
              },
              maxLength: {
                value: 100,
                message: "Max length is 100 symbols!",
              },
            }),
          }}
          helperText={errors?.lastName ? errors.lastName.message : " "}
          err={!!errors?.lastName}
          sx={{ width: "100%" }}
        />
      </Stack>
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
              message: "Enter a valid password!",
            },
          }),
        }}
        helperText={errors?.password ? errors.password.message : " "}
        err={!!errors?.password}
      />

      <FormControlLabel
        control={<Checkbox {...register("receivePromotions")} />}
        label="I want to receive inspiration, marketing promotions and updates via email."
      />

      <Button variant="contained" type="submit" sx={{ mt: 4 }}>
        Sign up
      </Button>
      <Stack flexDirection="row" justifyContent="flex-end">
        <Link variant="caption" to={SIGN_IN_ROUTE} component={RouterLink}>
          Already have an account? Sign in
        </Link>
      </Stack>
    </Stack>
  );
};

export default SignUpForm;
