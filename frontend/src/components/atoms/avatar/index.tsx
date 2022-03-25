import React from "react";
import Avatar from "@mui/material/Avatar";

interface AvatarProps {
  children?: any;
  src?: string;
  alt?: string;
  sx?: any;
  color?: string;
}

const avatar = ({ children, src, alt, sx, color }: AvatarProps) => {
  return (
    <Avatar data-testid="avatar" src={src} alt={alt} sx={sx} color={color}>
      {children}
    </Avatar>
  );
};
export default avatar;
