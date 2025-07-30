import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Resume from "../resume/Resume";

const routerObj  = createBrowserRouter(
    [
        {path:'/',
            element: <App/>
        },
        {path:'/resume',
            element: <Resume/>
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