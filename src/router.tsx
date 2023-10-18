import { createBrowserRouter } from "react-router-dom";
import {
  LoginPage,
  ReportsPage,
  BasedsPage,
  Error404Page,
  HomePage,
  RegisterPage,
  ManagementPage,
  BasedPage,
  UsersPage,
} from "./pages";
import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/baseds",
    element: (
      <PrivateRoute>
        <BasedsPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/baseds/:id",
    element: (
      <PrivateRoute>
        <BasedPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/management",
    element: (
      <PrivateRoute>
        <ManagementPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/users",
    element: (
      <PrivateRoute>
        <UsersPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/reports",
    element: (
      <PrivateRoute>
        <ReportsPage />
      </PrivateRoute>
    ),
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
]);
