import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  createHashRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";
import Contact, {
  loader as contactLoader
} from "./routes/contact";
import Painting, {
  loader as paintingLoader
} from "./routes/painting";
import Index from "./routes/index";
import { createGlobalStyle } from "styled-components";
import Celebration from "./routes/celebration";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       path="/"
//       element={<Root />}
//       loader={rootLoader}
//       action={rootAction}
//       errorElement={<ErrorPage />}
//     >
//       <Route errorElement={<ErrorPage />}>
//         <Route index element={<Index />} />
//         <Route
//           path="contacts/:contactId"
//           element={<Contact />}
//           loader={contactLoader}
//         />
//         <Route
//           path="paintings/:paintingId" 
//           element={<Painting />}
//           loader={paintingLoader}
//         />
//       </Route>
//     </Route>
//   ), {
//     basename: "/BUN_React",
//   }
// );

const router = createHashRouter(
  createRoutesFromElements(
        <Route
          path="/"
          element={<Root />}
          loader={rootLoader}
          action={rootAction}
          errorElement={<ErrorPage />}
        >
          <Route errorElement={<ErrorPage />}>
            <Route index element={<Index />} />
            <Route
              path="contacts/:contactId"
              element={<Contact />}
              loader={contactLoader}
            />
            <Route
              path="paintings/:paintingId" 
              element={<Painting />}
              loader={paintingLoader}
            />
            <Route
            path="celebration" 
            element={<Celebration />}
          />
          </Route>
        </Route>
      )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
