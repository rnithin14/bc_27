import { styled } from "@mui/material";
import theme from "../../../theme";
import Button from "../../atoms/button";
import Image from "../../atoms/image";

export const HorizontalWrapper = styled("div")(
  () => `
  padding: ${theme.spacing(4)} ${theme.spacing(5)};
  position: relative;
  background: ${theme.palette.background.default};
  border-radius: 12px;
  display: grid;
  grid-template-areas:
        "logo more"
        "content content"
        "routes time";
  min-width: 320px;

  `
);

export const VerticalWrapper = styled("div")(
  () => `
  padding: ${theme.spacing(4)} ${theme.spacing(5)};
  position: relative;
  background: ${theme.palette.background.default};
  border-radius: 12px;
  display: grid;
  grid-template-areas:
    "logo content more"
    "logo content more"
    "logo routes time";
  grid-template-columns: max-content auto max-content;
  width: 100%;
  height: max-content;
  `
);

export const HorizontalButtonWrapper = styled("div")(
  () => `
  padding: ${theme.spacing(4)} ${theme.spacing(5)};
  position: relative;
  background: ${theme.palette.background.default};
  border-radius: 12px;
  display: grid;
  grid-template-areas:
    "logo content more"
    "logo time more"
    "logo button more ";
  grid-template-columns: max-content auto max-content;
  `
);

export const LogoDiv = styled("div")(
  () => `
    grid-area: logo;
    margin-right: ${theme.spacing(5)};
    margin-bottom: ${theme.spacing(8)};
  `
);

export const LogoImage = styled(Image)(
  () => `
    height:45px;
    width:45px;
    object-fit:cover;
  `
);

export const MoreDiv = styled("div")(
  () => `
    grid-area: more;
    text-align: right;
  `
);

export const ContentDiv = styled("div")(
  () => `
    grid-area: content;
    display: grid;
    gap: ${theme.spacing(1)}
  `
);

export const ButtonDiv = styled("div")(
  () => `
    grid-area: button;
    display: grid;
    gap: ${theme.spacing(2)};
    margin-top: ${theme.spacing(8)};
    grid-template-columns: repeat(2, max-content);
  `
);

export const RoutesDiv = styled("div")(
  () => `
    grid-area: routes;
    margin-top: ${theme.spacing(8)};
  `
);

export const RoutesImageDiv = styled("div")(
  () => `
    display: flex;
    gap: ${theme.spacing(5)};
  `
);

export const RoutesDescription = styled("div")(
  () => `

    margin-bottom: ${theme.spacing(3)}
  `
);

export const TimeDiv = styled("div")(
  () => `
    grid-area: time;
    align-self: self-end;
    text-align: right;
  `
);

export const StyledButton = styled(Button)(
  () => `
    border-radius: 8px;
    padding: 8px 32px;  
  `
);
