import { createBrowserRouter } from "react-router-dom"
import {
  LoginPage,
  DashboardPage,
  Error404Page,
  HomePage,
} from "./pages"
import PrivateRoute from "./components/PrivateRoute"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admin",
    element: <PrivateRoute component={<DashboardPage />} />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "*",
    element: <Error404Page />,
  },
])