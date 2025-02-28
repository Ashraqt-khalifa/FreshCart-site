import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Brands from "./components/Brands/Brands";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Notfound from "./components/Notfound/Notfound";
import CounterContextProvider from "./Context/CounterContext.jsx";
import UserContextProvider from "./Context/UserContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./components/productDetails.jsx";
import CategoryProducts from "./components/Categories/CategoryProducts.jsx";



let x = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element:  <ProtectedRoute><Home /></ProtectedRoute>      },
      { path: "products", element: <ProtectedRoute>  <Products />  </ProtectedRoute>      },
      { path: "categories", element: <ProtectedRoute><Categories /></ProtectedRoute>  },
      { path: "brands", element: <ProtectedRoute><Brands /></ProtectedRoute>  },
      { path: "wishlist", element: <ProtectedRoute><Wishlist /></ProtectedRoute>  },
      { path: "productdetails/:id/:category", element: <ProtectedRoute><ProductDetails/></ProtectedRoute>  },
      { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute>  },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <Notfound /> },
      { path: "categoryproducts/:id/", element: <ProtectedRoute><CategoryProducts /></ProtectedRoute> },


    ],
  },
]);


function App() {
  return (
    <>


<UserContextProvider>
<CounterContextProvider>
        <RouterProvider router={x}></RouterProvider>
      </CounterContextProvider>

</UserContextProvider>

      
    </>
  );
}

export default App;
