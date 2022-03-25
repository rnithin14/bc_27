import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputField from "../../atoms/inputfield/index";
import Image from "../../atoms/image/index";
import logo from "../../../assets/logo/logo_white.svg";
import Avatar from "../../atoms/avatar/index";
import userImage from "../../../assets/images/user.svg";
import Icon from "../../atoms/icon";
import message from "../../../assets/icons/message.svg";
import notifications from "../../../assets/icons/notifications.svg";
import { styled } from "@mui/material/styles";
import locationIcon from "../../../assets/icons/location.svg";
import Grid from "@mui/material/Grid";
import { UserDataContext } from "../../../context/userDetails";

interface HeaderProps {
  location?: string;
  onChange?: any;
}
const StyledAppBar = styled(AppBar)({
  padding: "10px 40px",
  height: "80px",
});

const StyledGrid = styled(Grid)({ marginLeft: "150px" });

const Header = ({ location, onChange }: HeaderProps) => {

  const {userData} = React.useContext(UserDataContext);

  return (
    <Box>
      <StyledAppBar
        sx={{ backgroundColor: "primary.600" }}
        data-testid="Header"
      >
        <Toolbar>
          <Image src={logo} alt="Green Commute logo" />

          <StyledGrid>
            <InputField
              location={userData.userLocation}
              startAdorment={<Icon src={locationIcon} />}
              onChange={onChange}
            />
          </StyledGrid>

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={6}
          >
            <Grid item>
              <Icon src={message} />
            </Grid>

            <Grid item>
              <Icon src={notifications} />
            </Grid>
            <Grid item>
              <Avatar src={userImage} />
            </Grid>
          </Grid>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Header;
