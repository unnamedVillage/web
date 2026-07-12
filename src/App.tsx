import { Outlet } from "@tanstack/react-router";
import PageHeader from "./components/PageHeader.tsx";
import { Container } from "@ogcio/design-system-react";
import "@ogcio/design-system-react/styles.css";
import "@ogcio/theme-govie/theme.css";
import PageFooter from "./components/PageFooter.tsx";

const App = () => {
  return (
    <>
      <PageHeader />
      <div style={{ paddingTop: "2vh" }}></div>
      <Container>
        <main>
          <Outlet />
        </main>
        <div style={{ paddingTop: "2vh" }}></div>
      </Container>
      <PageFooter />
    </>
  );
};

export default App;
