import { createBrowserRouter } from "react-router-dom"
import {
  LoginPage,
  DashboardPage,
  Error404Page,
  HomePage,
  RegisterPage,
  ManagementPage
} from "./pages"
import PrivateRoute from "./components/PrivateRoute"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute> <DashboardPage /> </PrivateRoute>,
  },  
  {
    path: "/management",
    element: <PrivateRoute> <ManagementPage /> </PrivateRoute>,
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