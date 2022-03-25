import React from "react";
import { Typography as MuiTypography } from "@mui/material";

type TypographyProps = {
  children: React.ReactNode;
  variant:
    | "heading"
    | "h1"
    | "h2"
    | "h3"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption1"
    | "caption2";
  sx?: any;
  color?: string;
};
const index = (props: TypographyProps) => {
  return (
    <MuiTypography
      data-testid="typography-tag"
      variant={props.variant}
      color={props.color}
      sx={props.sx}
    >
      {props.children}
    </MuiTypography>
  );
};

export default index;
