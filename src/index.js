import { useState } from "react";
import reactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { SignUpModal } from "./components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button 
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark Theme
      </button>
      <button 
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default Theme
      </button>
      
      <div style={{
        background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
        width: "100vw",
        height: "100vh",
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}>
        <SignUpModal />
      </div>
      
      <GlobalStyle />
    </ThemeProvider>
  )
}

reactDOM.render(<App />, document.querySelector("#root"));
