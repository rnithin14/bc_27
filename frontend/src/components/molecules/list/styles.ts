import { styled } from "@mui/material";
import theme from "../../../theme";

export const Wrapper = styled("div")(
  () => `
    background: ${theme.palette.background.default};
    box-shadow: 0px 2px 8px rgba(125, 125, 125, 0.12);
    padding: ${theme.spacing(2)} ${theme.spacing(4)};
    display: grid;
    grid-template-columns: max-content auto max-content;
    gap: ${theme.spacing(2)};
  `
);

export const ContentDiv = styled("div")(
  () => `
    display: grid;
    gap: ${theme.spacing(2)};
  `
);

export const RateDiv = styled("div")(
  () => `
    display: grid;
    grid-template-columns: max-content max-content;
    gap: ${theme.spacing(4)};
  `
);
