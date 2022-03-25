import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Icon from "../icon";

const StyledInputField = styled(TextField)(({ theme }) => ({
  width: "340px",
  input: { color: "white" },
  borderBottom: "1px solid white",
  padding: `${theme.spacing(1)} 0`,
}));

interface InputFieldProps {
  location?: string;
  placeholder?: string;

  startAdorment?: any;
  sx?: any;
  color?: any;
  onChange?: any;
}
const index = (props: InputFieldProps) => {
  const [value, setValue] = React.useState(props.location);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };
  return (
    <StyledInputField
      data-testid="inputField"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <Icon src={props.startAdorment} />
          </InputAdornment>
        ),
      }}
      variant="standard"
      placeholder={props.placeholder}
      sx={props.sx}
      color={props.color}
      value={value}
      onChange={handleChange}
    ></StyledInputField>
  );
};
export default index;
