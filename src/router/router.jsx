import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/REgister/Register";
import SignIn from "../pages/signin/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import ErrorElement from "../Error/ErrorElement";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/myApplications/MyApplications";
import AddJob from "../pages/Home/addJob/AddJob";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import ViewApplication from "../pages/viewApplications/ViewApplication";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path:'/jobApply/:id',
        element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path:'/myApplications',
        element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path:"/addJob",
        element:<PrivateRoute><AddJob></AddJob></PrivateRoute>

      },
      {
        path:"/myPostedJobs",
        element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path:"/viewApplication/:job_id",
        element:<PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      }
    ]
  },
]);
export default router