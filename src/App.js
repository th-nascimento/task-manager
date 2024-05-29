import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./Theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <ListarTarefa />
      </div>
    </ThemeProvider>
  );
}

export default App;
