import React from "react";
import { Link as MuiLink } from "@mui/material";

type LinkProps = {
  children: string;
  handleClick?: any;
  component?: any;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | "heading"
    | "caption1"
    | "caption2";
};

const Link = (props: LinkProps) => {
  return (
    <MuiLink
      data-testid="Link"
      component={props.component}
      variant={props.variant}
      onClick={props.handleClick}
    >
      {props.children}
    </MuiLink>
  );
};

export default Link;
