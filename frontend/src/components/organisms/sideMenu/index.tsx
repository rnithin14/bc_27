import React from "react";
import { StyledBorder, Wrapper } from "./styles";
import Avatar from "../../atoms/avatar";
import Icon from "../../atoms/icon";
import { SideMenuProps } from "./props";
import { useLocation } from "react-router-dom";
import { useStyledMenu } from "./hooks";
import Typography from "../../atoms/typography";

const Sidemenu: React.FC<SideMenuProps> = ({ menuItems }) => {
  const location = useLocation();
  return (
    <Wrapper>
      {menuItems.map((item, key) => {
        const StyledMenuItem = useStyledMenu(location.pathname || "", item.to);
        return (
          <StyledMenuItem to={item.to} key={key}>
            {item.icon && (
              <Avatar
                sx={{
                  backgroundColor:
                    location.pathname === item.to ? "transparent" : "grey.100",
                }}
              >
                <Icon src={item.icon}></Icon>
              </Avatar>
            )}
            <Typography variant="body2">{item.children}</Typography>
            {location.pathname === item.to && <StyledBorder></StyledBorder>}
          </StyledMenuItem>
        );
      })}
    </Wrapper>
  );
};

export default Sidemenu;
