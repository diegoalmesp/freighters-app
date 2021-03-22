import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import "./App.css";
import theme from "./theme";
import Home from "./pages/Home";
import { populateFreighters } from "./reducers/freightersSlice";
import { useAppDispatch } from "./hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(populateFreighters());
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
