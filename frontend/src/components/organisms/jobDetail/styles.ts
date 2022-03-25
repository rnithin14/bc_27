import { Divider, styled } from "@mui/material";
import theme from "../../../theme";
import Button from "../../atoms/button";
import MenuItem from "../../atoms/menuItem";
import Card from "../../molecules/card";
import List from "../../molecules/list";

export const Wrapper = styled("div")(
  () => `
      display: grid;
      gap: ${theme.spacing(6)};
      background: ${theme.palette.background.default};
      border-radius:12px;
      width: 100%;
    `
);

export const StyledCard = styled(Card)(
  () => `
      padding: ${theme.spacing(6)} ${theme.spacing(5)} ${theme.spacing(
    5
  )} ${theme.spacing(5)};
    `
);

export const ContentDiv = styled("div")(
  () => `
      display: grid;
      gap: ${theme.spacing(2)};
      margin-bottom: ${theme.spacing(6)};
    `
);

export const StyledDiv = styled("div")(
  () => `
      display: grid;
      gap: ${theme.spacing(2)};
      grid-template-columns: max-content max-content;
      align-items: center
    `
);

export const StyledDivider = styled(Divider)(
  () => `
     border-color: ${theme.palette.grey[100]};
    `
);

export const StyledButton = styled(Button)(
  () => `
      display: grid;
      gap: ${theme.spacing(2)};
      grid-template-columns: max-content auto;     
      background: ${theme.palette.background.default};
      box-shadow: 0px -2px 8px rgba(125, 125, 125, 0.12);
      border-radius: 0px 0px ${theme.spacing(3)} ${theme.spacing(3)};
      padding: ${theme.spacing(5)} ${theme.spacing(21)};
    `
);

export const RoutesHead = styled("div")(
  () => `
      display: grid;
      grid-template-columns: max-content auto; 
      gap: ${theme.spacing(3)};    
    `
);

export const LocationWrapper = styled("div")(
  () => `
      background: ${theme.palette.background.default};
      box-shadow: 0px 2px 8px rgba(125, 125, 125, 0.12);
      border-radius: ${theme.spacing(3)};
      display: grid;
      grid-template-columns: max-content auto;
      align-items: center;
      justify-content: space-between;
      gap: ${theme.spacing(4)};
      padding: ${theme.spacing(5)} ${theme.spacing(4)};
    `
);

export const LocationDiv = styled("div")(
  () => `
      display: grid;
      gap: ${theme.spacing(0)};
    `
);

export const Locations = styled("div")(
  () => `
      display: grid;
      align-items: center;
      grid-template-columns: max-content auto;
      gap: ${theme.spacing(3)};
    `
);

export const RoutesIcons = styled("div")(
  () => `
      display: grid;
      align-items: center;
      grid-template-columns: repeat(2, max-content);
      gap: ${theme.spacing(3)};
    `
);

export const RouteButton = styled(Button)(
  () => `
    padding: 0;
    min-width: max-content;
    margin: 0;
    display: inline-block;

    `
);

export const RideContent = styled("div")(
  () => `
    display: grid;
    grid-template-columns: repeat(3, max-content);
    gap: ${theme.spacing(6)};
    margin-bottom: ${theme.spacing(2)};
    align-items: center;
    `
);

export const Margin = styled("div")(
  () => `
    margin: 0 ${theme.spacing(5)};
    `
);

export const RideInfo = styled("div")(
  () => `
    margin-bottom: ${theme.spacing(3)};
    `
);

export const StyledList = styled(List)(
  () => `
    margin-bottom: ${theme.spacing(3)};
    `
);

export const StyledLink = styled(MenuItem)(
  () => `
    text-decoration: none;
    margin-top: ${theme.spacing(4)};
    margin-bottom: ${theme.spacing(6)};
    display: inline-block;
    `
);
