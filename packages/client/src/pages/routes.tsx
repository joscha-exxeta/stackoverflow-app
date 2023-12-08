import { Outlet, RouteObject } from "react-router-dom";
import { QuestionListPage } from "./QuestionListPage";
import { HomePage } from "./HomePage";
import { QuestionDetailPage } from "./QuestionDetailPage";
import { MainLayout } from "../layouts/MainLayout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "list",
        element: <QuestionListPage />,
      },
      {
        path: "question",
        children: [
          {
            path: ":id",
            element: <QuestionDetailPage />,
          },
        ],
      },
    ],
  },
];
