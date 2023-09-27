import { FC } from 'react';
import { RouterProvider } from "react-router-dom"

import './style.css';
import { router } from './router';

export const App: FC<{ name: string }> = ({ name }) => {
  return <RouterProvider router={router} />
};
