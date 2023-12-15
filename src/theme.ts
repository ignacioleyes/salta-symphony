// Import the @font-face declaration before extending the theme
import { extendTheme } from "@chakra-ui/react";

// Define the @font-face declaration
const fontStyles = `
  @fontFace {
    font-family: 'RobotoSerif_36pt-Regular';
    src: url('./RobotoSerif_36pt-Regular.ttf') format('truetype');
  }
`;

// Extend the Chakra UI theme
export const theme = extendTheme({
    styles: {
        global: {
            // Include the font declaration in the global styles
            "@fontFace": fontStyles,
        },
    },
    colors: {
        primary: "#FFC63E",
        secondary: "#808182",
        tertiary: "#ef810a",
      black: "#000000",
    },
    fonts: {
        heading: "'RobotoSerif_36pt-Regular', sans-serif",
        body: "'RobotoSerif_36pt-Regular', sans-serif",
    },
});