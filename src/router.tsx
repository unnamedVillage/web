import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import App from "./App.tsx";
import Home from "./pages/home.tsx";
import Wip from "./pages/wip.tsx";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

export const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/news",
  component: Wip,
});

export const residentServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resident-services",
  component: Wip,
});

const rootRoute = createRootRoute({
  component: () => <App />,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  newsRoute,
  residentServicesRoute,
]);
export const router = createRouter({ routeTree });
