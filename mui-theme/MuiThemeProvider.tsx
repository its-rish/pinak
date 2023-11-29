


// Mui theme set up provider for whole application

import { useMemo } from "react";
import { MuiThemeOptions } from "./_muiTheme";
import { CssBaseline, StyledEngineProvider, ThemeProvider, createTheme } from "@mui/material";

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeOptions = useMemo(() => {
    return MuiThemeOptions("light");
  }, []);

  const theme = createTheme(themeOptions);



  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MuiThemeProvider;
