import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Resume from "../resume/Resume";
import Blog from "../blog/Blog";

const routerObj  = createBrowserRouter(
    [
        {path:'/',
            element: <App/>
        },
        {path:'/resume',
            element: <Resume/>
        },
        {path:'/blog',
            element: <Blog/>
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