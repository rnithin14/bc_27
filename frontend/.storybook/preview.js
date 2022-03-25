import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "emotion-theming";
import { MemoryRouter } from "react-router-dom";
import GreenCommuteTheme from "../src/theme/index";
import "./storybook.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <MUIThemeProvider theme={GreenCommuteTheme}>
      <MemoryRouter>
        <ThemeProvider theme={GreenCommuteTheme}>
          <Story />
        </ThemeProvider>
      </MemoryRouter>
    </MUIThemeProvider>
  ),
];
