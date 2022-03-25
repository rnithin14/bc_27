import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MuiTypography from "../typography/index";

type Props = {
  label: string;
  name?:string
  check: boolean;
  onChange?: any;
};

const checkbox = ({ label, check, onChange }: Props) => {
  const [checked, setChecked] = useState(check);
  const handleChange = () => {
    setChecked(!checked);
    onChange(checked);
  };
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          data-testid="Checkbox"
         
          onChange={handleChange}
        />
      }
      label={<MuiTypography variant="body2">{label}</MuiTypography>}
    />
  );
};

export default checkbox;
