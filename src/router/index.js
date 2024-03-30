import Layout from "@/pages/Layout";
import Month from "@/pages/Mouth";
import New from "@/pages/New";
import Year from "@/pages/Year";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: 'month',
        element: <Month></Month>
      },
      {
        path: 'year',
        element:<Year></Year>
      },
    ]
  },
  {
    path: '/new',
    element:<New></New>
  }
])

export default router