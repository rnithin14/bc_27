import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Header from "../../organisms/header/index";
import SideMenu from "../../organisms/sideMenu/index";
import { sideMenuData } from "../../organisms/sideMenu/props";
import theme from "../../../theme";

interface Modalprops {
  children?: React.ReactNode;
  location?: string;
  onChange?: any;
}

const Wrapper = styled("abbr")({
  display: "grid",
  gridTemplateRows: "max-content calc(100vh - 80px)",
  gap: "80px",
});
const Content = styled("div")({
  display: "grid",
  gridTemplateColumns: "max-content auto",
});

const Layout: React.FC<Modalprops> = ({ children, location, onChange }) => {
  return (
    <Wrapper>
      <div>
        <Header location={location} onChange={onChange} />
      </div>
      <Content>
        <SideMenu {...sideMenuData}></SideMenu>
        <Grid item sx={{ background: theme.palette.grey[100] }}>
          {children}
        </Grid>
      </Content>
    </Wrapper>
  );
};

export default Layout;
