import { ThemeProvider } from "@emotion/react";
import "./App.css";
import theme from "./Theme";
import Home from "./Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
