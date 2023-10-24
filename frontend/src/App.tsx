import { createTheme, ThemeProvider } from "@mui/material";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Main from "./Pages/Main/Main";
import ErrorElement from "./Pages/ErrorElement/ErrorElement";
import Ranking from "./Pages/Ranking/Ranking";
import { t } from "i18next";

const router = createHashRouter([
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
    element: <Layout children={<ErrorElement message={t('notFound') || "Not found"} />} />,
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