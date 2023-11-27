import themeColor from "@/styles/abstracts/_theme.module.scss";
import { alpha } from "@mui/material/styles";
/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24"
};

const PRIMARY = {
  lighter: "#D1E9FC",
  light: "#76B0F1",
  main: themeColor?.primaryMain,
  dark: "#103996",
  darker: "#061B64",
  contrastText: "#fff"
};

const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: themeColor?.secondaryMain,
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff"
};

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main:themeColor?.primaryMain,
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff"
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main:themeColor?.successMain,
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800]
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main:themeColor?.warningMain,
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800]
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main:themeColor?.errorMain,
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff"
};

const palette = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500]
  },
  background: {
    paper: "#fff",
    default: GREY[100],
    neutral: GREY[200]
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

const PrimaryColor={
  primay1:"#905e26",
  primay2:"#f5ec9b",
  primary3:"#905e26"
}

export default palette;