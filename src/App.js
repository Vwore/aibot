import { ThemeProvider } from "@emotion/react";
import "./App.css";
import theme from "./Theme";
import Home from "./Home/Home";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
