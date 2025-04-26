import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Contact from "../contact/contact";

const routerObj  = createBrowserRouter(
    [
        {path:'/',
            element: <App/>
        },
        {
            path:'/contact',
            element: <Contact/>
        }
    ]
)

const RouterConfig = ()=>{
    return (
        <>
            <RouterProvider router={routerObj}/>
        </>
    )
}

export default RouterConfig;