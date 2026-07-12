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

export const wipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/wip",
  component: Wip,
});

const rootRoute = createRootRoute({
  component: () => <App />,
});

const routeTree = rootRoute.addChildren([homeRoute, wipRoute]);
export const router = createRouter({ routeTree });
