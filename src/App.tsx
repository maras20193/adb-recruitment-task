import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalStyle, theme } from "./styles";
import { Details, Photos, Posts, Users } from "./pages";
import { routes } from "./utils/routes";
import { Layout } from "./template";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={routes.users} element={<Users />} />
            <Route path={routes.posts} element={<Posts />} />
            <Route path={routes.photos} element={<Photos />} />
            <Route path={routes.details} element={<Details />} />
            <Route path={`${routes.posts}/:userId`} element={<Posts />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <ToastContainer newestOnTop position="top-right" />
    </ThemeProvider>
  );
}

export default App;
