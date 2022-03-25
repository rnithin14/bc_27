import { styled } from "@mui/material";
import theme from "../../../theme";
import MenuItem from "../../atoms/menuItem";

export const Wrapper = styled("div")(
  () => `
      padding: ${theme.spacing(10)} 0;
      background: ${theme.palette.background.default};
    `
);

export const StyledMenuItem = styled(MenuItem)(
  () => `
      display: grid;
      grid-template-columns: max-content auto;
      gap: ${theme.spacing(3)};
      align-items: center;
      text-decoration: none;
      background: ${theme.palette.background.default};
      padding: ${theme.spacing(1)} ${theme.spacing(11)};
      color: ${theme.palette.text.primary};
      position: relative;
      margin-bottom: ${theme.spacing(4)};

    `
);

export const ActiveMenuItem = styled(MenuItem)(
  () => `
      display: grid;
      grid-template-columns: max-content auto max-content;      
      gap: ${theme.spacing(3)};
      align-items: center;
      text-decoration: none;
      background: ${theme.palette.gamma[300]};
      padding: ${theme.spacing(1)} ${theme.spacing(11)};
      color: ${theme.palette.primary[500]};
      position: relative;
      margin-bottom: ${theme.spacing(4)};
    `
);

export const StyledBorder = styled("div")(
  () => `
      width: ${theme.spacing(1)};
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      display: inline-block;
      border-radius: ${theme.spacing(1)} 0px 0px ${theme.spacing(1)};
      background: ${theme.palette.primary[500]};
    `
);
