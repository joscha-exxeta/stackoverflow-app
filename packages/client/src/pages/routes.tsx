import { Outlet, RouteObject } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { QuestionCreatePage } from "./QuestionCreatePage";
import { QuestionDetailPage } from "./QuestionDetailPage";
import { QuestionListPage } from "./QuestionListPage";

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
        element: <QuestionListPage />,
      },
      {
        path: "question",
        children: [
          {
            path: ":id",
            element: <QuestionDetailPage />,
          },
          {
            path: "create",
            element: <QuestionCreatePage />,
          },
        ],
      },
    ],
  },
];
