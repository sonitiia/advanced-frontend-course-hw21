import { TextField } from "@mui/material";

const StyledTextField = ({
  type,
  register,
  helperText,
  placeholder,
  label,
  color,
}) => {
  return (
    <TextField
      variant="outlined"
      type={type}
      {...register}
      helperText={helperText}
      placeholder={placeholder}
      label={label}
      color={color}
    />
  );
};

export default StyledTextField;
