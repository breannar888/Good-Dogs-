import React from "react";
import { DogsProvider } from "./context/Context";
import Create from "./components/Create";
import Update from "./components/Update";
import Search from "./components/Search";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/system";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DogsProvider>
        <BrowserRouter basename="breannar888.github.io/Good-Dogs">
          <Routes>
            <Route path="/" element={<Search />} />
          </Routes>
          <Routes>
            <Route path="create" element={<Create />} />
          </Routes>
          <Routes>
            <Route path="update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </DogsProvider>
    </ThemeProvider>
  );
}

export default App;
