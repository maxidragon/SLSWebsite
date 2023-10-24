import { createTheme, ThemeProvider } from "@mui/material";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Main from "./Pages/Main/Main";
import About from "./Pages/About/About";
import ErrorElement from "./Pages/ErrorElement/ErrorElement";
import Ranking from "./Pages/Ranking/Ranking";

const router = createHashRouter([
  {
    path: "/about",
    element: <Layout children={<About />} />,
  },
  {
    path: "/ranking",
    element: <Layout children={<Ranking />} />,
  },
  {
    path: "/",
    element: <Layout children={<Main />} />,
  },
  {
    path: "*",
    element: <Layout children={<ErrorElement message={"404 not found"} />} />,
  },

]);
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;