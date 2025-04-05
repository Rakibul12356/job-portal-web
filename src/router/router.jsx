import {createBrowserRouter  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/REgister/Register";
import SignIn from "../pages/signin/SignIn";
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
        },
        {
          path:"/signin",
          element:<SignIn></SignIn>
        }
      ]
    },
  ]);
  export default router