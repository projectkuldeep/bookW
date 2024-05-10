// //
// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import EveryCategory from "../components/EveryCategory ";
import EveryBook from "../components/EveryBook";
import DashBoardLayout from "../dashBoard/DashBoardLayout";
import Uploadbook from "../dashBoard/Uploadbook";
import DashBoard from "../dashBoard/DashBoard";
import ManageBooks from "../dashBoard/ManageBooks";
import EditBook from "../dashBoard/EditBook";

import Romance from "../components/Category/Romance";
import Bio from "../components/Category/bio";
import Children from "../components/Category/Children";
import Young from "../components/Category/Young";
import Fantasy from "../components/Category/Fantasy";
import Horror from "../components/Category/Horror";
import Action from "../components/Category/Action&Adanture";
import Myster from "../components/Category/Myster";
import Sci from "../components/Category/Sci";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import CHome from "../converter/Home";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello </div>,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/book/:_id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params._id}`),
      },

      { path: "/EveryCategory", element: <EveryCategory /> },
      //for single category
      {
        path: "/EveryCategory/Romance",
        element: <Romance />,
      },
      {
        path: "/EveryCategory/Bio",
        element: <Bio />,
      },
      {
        path: "/EveryCategory/Children",
        element: <Children />,
      },
      {
        path: "/EveryCategory/Young",
        element: <Young />,
      },
      {
        path: "/EveryCategory/Fantasy",
        element: <Fantasy />,
      },
      {
        path: "/EveryCategory/Horror",
        element: <Horror />,
      },
      {
        path: "/EveryCategory/Action",
        element: <Action />,
      },
      {
        path: "/EveryCategory/Myster",
        element: <Myster />,
      },
      {
        path: "/EveryCategory/Sci",
        element: <Sci />,
      },

      {
        path: "/EveryBook",
        element: <EveryBook />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/admin/dashboard/",
        element: (
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/uploadbook",
        element: <Uploadbook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/Edit-books/:_id",
        element: <EditBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params._id}`),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
  {
    path: "/ConverterHome",
    element: <CHome />,
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
export default router;
