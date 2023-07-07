import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tasks/create",
    element: <CreateTask />,
  },
  {
    path: "/tasks/:id",
    element: <CreateTask />,
  },
]);

import App from './App.jsx'
import './index.css'
import CreateTask from './components/CreateTask.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
