import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle, theme } from "./styles";
import { Details, Photos, Posts, Users } from "./pages";
import { routes } from "./utils/routes";
import { Layout } from "./template";

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
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
