import { createTheme } from "@mui/material/styles";

import Typography from "./typography";
import { palette } from "@mui/system";

const themeTypography = Typography(`'Poppins', sans-serif`);
const theme = createTheme({
  palette,
  shape: { borderRadius: 6 },
  typography: themeTypography,
  
});

export default theme;
