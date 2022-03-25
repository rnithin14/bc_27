import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    heading: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    heading: React.CSSProperties;
  }

  interface Palette {
    gamma: Palette["primary"];
  }

  interface PaletteOptions {
    gamma?: PaletteOptions["primary"];
  }
  interface PaletteColor {
    600?: string;
    500?: string;
    300?: string;
    200?: string;
    100?: string;
  }

  interface SimplePaletteColorOptions {
    600?: string;
    500?: string;
    300?: string;
    200?: string;
    100?: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
    heading: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    secondary: true;
    filter: true;
  }
}
const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        style: {
          maxWidth: "66ch",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "inline-block",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "capitalize",
        },
      },
      variants: [
        {
          props: { variant: "secondary" },
          style: {
            padding: "20px 85px",
            background: "background.default",
            boxShadow: "0px -2px 8px rgba(125, 125, 125, 0.12)",
            borderRadius: "0px 0px 12px 12px",
            color: "#30A193",
          },
        },
        {
          props: { variant: "filter" },
          style: {
            textTransform: "none",
            padding: "16px 32px",
            background: "#FFFFFF",
            borderRadius: "32px",
          },
        },
      ],
    },
  },
  spacing: 4,
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    heading: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "48px",
      lineHeight: "48px",
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
    h1: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "48px",
    },

    h2: {
      fontSize: "20px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "30px",
    },

    h3: {
      fontSize: "20px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "30px",
    },

    subtitle1: {
      fontSize: "16px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "24px",
    },

    subtitle2: {
      fontSize: "16px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "24px",
    },

    body1: {
      fontSize: "14px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "22px",
    },

    body2: {
      fontSize: "14px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "22px",
    },

    caption1: {
      fontSize: "12px",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "16px",
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
    caption2: {
      fontSize: "12px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "16px",
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  },

  palette: {
    primary: {
      600: "#0B6D62",
      500: "#1B877A",
      main: "#30A193",
      300: "#4ABAAD",
      200: "#77EDDF",
      100: "#B3FFF6",
    },
    text: {
      primary: "#373C38",
      secondary: "#656E66",
      disabled: "#94A196",
    },
    grey: {
      "400": "#D6D6D6",
      "200": "#E9EBE9",
      "100": "#F7F7F7",
    },

    gamma: {
      "100": "#ED8F02",
      "200": "#FF725E",
      "300": "#E8FFFC",
    },
    background: {
      default: "#ffffff",
      paper: "#000000",
    },
  },
});

export const EXTRA_COLORS = {
  background: "#EFFFFD",
  orange: "#FF725E",
  lightPrimary: "#E8FFFC",
};

export default theme;
