import DisplayError from "../../components/DisplayError";
import AdminPanel from "../../layout/AdminPanel";
import CreateProducts from "../../pages/deshboard/CreateProducts";
import Dashboard from "../../pages/deshboard/Dashboard";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminPanel />,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        children: [
          {
            path: "create-product",
            element: <CreateProducts />,
          },
        ],
      },
    ],
  },
]);

export default router;
