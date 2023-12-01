/* eslint-disable mui-path-imports/mui-path-imports */



/* eslint-disable mui-path-imports/mui-path-imports */
//  MUI pallete colors will be listed here

import { PaletteMode, PaletteOptions } from "@mui/material";

export const primaryColors = {
  primary: "#0c4767",
  primary1: "#9fe2bf",
  dashLinkTxt: "#A1A1A1",
  primaryGray:"#848fa5",
  blueColor: "#008AAF",
  primary_600: "#5871D0",
  secondary: "#FF8EB2",
  secondaryBorder: "#F380A5",
  info: "#7CD1D2",
  infoBorder: "#67C1C2",
  disabledBg: "#DBE0E8",
  textDisabled: "#9c9c9c",
  errorMain: "#EB4444",
  errorLight: "#FFECF2",
  white: "#fff",
  black: "#000",
  bodyColor: "#F4F6F8",
  mainFontColor: "#65676B",
  textPrimaryColor: "#050505",

  borderprimary: "#DBE0E8",
  border_primary: "#DBE0E8",
  warning_color: "#FFEFD7",
  success_color: "#D4FEFF",
  text_success: "#3C8183",
  warning_text: "#6F4F1F",
  deepGreen: "#3A795B",
  lightGreen: "#D4FEFF",
  danger_text: "#9B3858",
  warningMain: "#F9B608",
  pendingColor: "#FFEFD7",
  pendingTextColor: "#6F4F1F",
  textDanger: "#9B3858",
  dangerColor: "#FFECF2",
  colorCCB043: "#CCB043",
  color83BF4F: "#83BF4F",
  colorDC276A: "#DC276A",
  colorAEAEAE: "#AEAEAE",
  colorF5F5F5: "#F5F5F5",
  color808080:"#808080"

  // borderprimary:"#DBE0E8",
 
};

export const pallete = (mode: PaletteMode): PaletteOptions => {
  return {
    mode,
    background: {
      default: mode === "light" ? "#f5f8fa" : "#000",
      paper: mode === "light" ? "#fff" : "#000"
    },
    //global
    primary: {
      main: primaryColors.primary,
      dark: primaryColors.primary_600
    },
    secondary: {
      main: primaryColors.secondary
    },
    info: {
      main: primaryColors.info
    },
    error: {
      main: primaryColors.errorMain
    },
    warning: {
      main: primaryColors.warningMain
    },

    text: {
      primary: primaryColors.disabledBg
    },
    common: {
      black: "#000",
      white: "#fff"
    }
  };
};

