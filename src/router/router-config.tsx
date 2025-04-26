import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";


const routerObj  = createBrowserRouter(
    [
        {path:'/',
            element: <App/>
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