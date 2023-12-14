import { ApolloProvider } from "@apollo/client";
import { render } from "@testing-library/react";
import React from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { client } from "../../src/client";
export * from "@testing-library/react";

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => {
      const router = createMemoryRouter([{ path: "*", element: children }], {
        initialEntries: ["/"],
      });

      return (
        <ApolloProvider client={client}>
          <RouterProvider router={router} />
        </ApolloProvider>
      );
    },
    ...options,
  });
}

export { customRender as render };
