import React from "react";
import Chip from "@mui/material/Chip";
import CloseIcon from "@mui/icons-material/Close";
import MuiTypography from "../typography/index";

type chipProps = {
  label: string;
  handleDelete?: any;
  sx?: any;
  className?: any;
};

const index = (props: chipProps) => {
  return (
    <Chip
      data-testid="chip-tag"
      label={<MuiTypography variant="caption2">{props.label}</MuiTypography>}
      variant="filled"
      onDelete={props.handleDelete}
      deleteIcon={<CloseIcon data-testid="delete-icon" />}
      className={props.className}
    />
  );
};

export default index;
