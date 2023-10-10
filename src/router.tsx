import { createBrowserRouter } from "react-router-dom"
import {
  LoginPage,
  DashboardPage,
  Error404Page,
  HomePage,
  RegisterPage,
} from "./pages"
import PrivateRoute from "./components/PrivateRoute"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute> <DashboardPage></DashboardPage> </PrivateRoute>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <Error404Page />,
  },
])