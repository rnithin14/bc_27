import React from "react";

export interface MenuItemProps {
  to: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const menuItemData: MenuItemProps = {
  to: "#",
};
