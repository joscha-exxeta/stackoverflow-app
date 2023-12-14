import { ApolloProvider } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./pages/routes";
import { client } from "./client";

const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};
