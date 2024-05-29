import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1f2440", // Cor primária
    },
    secondary: {
      main: "#f28907", // Cor secundária
    },
    warning: {
      main: "#f20000", // Cor aviso
    },
    success: {
      main: "#e0e0e0", // Cor sucesso
    },
    info: {
      main: "#ee89ee", // Cor informação
    },
    error: {
      main: "#f22025", // Cor erro
    },
  },
});

export default theme;
