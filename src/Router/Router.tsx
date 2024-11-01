import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../Pages/MainPage";
import { DetailPage } from "../Pages/DetailPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>, 
        
    },
    {
        path: "/detail",
        element: <DetailPage />, 
          
      },
]);
