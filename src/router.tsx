import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import GeneralLayout from "./layouts/GeneralLayout";
import Welcome from "./pages/Welcome";
import MakeBingo from "./pages/MakeBingo";
import BingoBoard from "./pages/BingoBoard";

interface RouterElement {
  id: number;
  path: string;
  element: React.ReactNode;
}

const routerData: RouterElement[] = [
  {
    id: 1,
    path: "/",
    element: <Welcome />,
  },
  {
    id: 2,
    path: "/make",
    element: <MakeBingo />,
  },
  {
    id: 3,
    path: "/bingoBoard",
    element: <BingoBoard />,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: <GeneralLayout>{router.element}</GeneralLayout>,
    };
  })
);
