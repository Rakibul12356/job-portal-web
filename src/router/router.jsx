import {createBrowserRouter  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/REgister/Register";
  const router = createBrowserRouter([
  {
      path: "/",
      element:<MainLayOut></MainLayOut> ,
      errorElement: <h2 className="text-4xl text-center">The page is Not Found</h2>,
      children:[
        {
          path:'/',
          element:<Home></Home>  
        },
        {
          path:"/register",
          element: <Register></Register>
        }
      ]
    },
  ]);
  export default router