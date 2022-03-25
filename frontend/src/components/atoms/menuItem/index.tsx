import { Link } from "react-router-dom";
import React from "react";
import { MenuItemProps } from "./props";

const MenuItem: React.FC<MenuItemProps> = ({
  to,
  children,
  className,
  onClick,
}) => {
  return (
    <Link
      to={to}
      data-testid="menu-item"
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
