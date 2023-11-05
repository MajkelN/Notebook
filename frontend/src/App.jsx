import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider, RequireAuth  } from "react-auth-kit";

import Root from "./routes/Root";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Notes from "./routes/Notes";
import Error from "./routes/Error";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "notes",
        element: <RequireAuth loginPath="/login"><Notes /></RequireAuth>,
      }
    ]    
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider authType = {'cookie'}
    authName={'_auth'}
    cookieDomain={window.location.hostname}
    cookieSecure={window.location.protocol === "https:"}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} /> 
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
