import Login from "./pages/login";
import Register from "./pages/register";

const routes = [
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
]

export default routes