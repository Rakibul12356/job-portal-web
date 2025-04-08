import {createBrowserRouter  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/REgister/Register";
import SignIn from "../pages/signin/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import ErrorElement from "../Error/ErrorElement";
import PrivateRoute from "./PrivateRoute";
  const router = createBrowserRouter([
  {
      path: "/",
      element:<MainLayOut></MainLayOut> ,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
          path:'/',
          element:<Home></Home>  
        },
        {
          path:'/jobs/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
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