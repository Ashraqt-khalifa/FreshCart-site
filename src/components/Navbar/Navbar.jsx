import React, { useContext } from "react";
import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import logo from "../../assets/freshcart-logo.53f7a424c3aedc30a0fb46dc2278137c.svg";


export default function Navbar() {
  let { userLogin, setUserLogin } = useContext(UserContext);
  let navigate = useNavigate()

  function signout(){
    localStorage.removeItem("userToken");
    setUserLogin(null)
    navigate("/login")
  }


//   const handleLogout = () => {
//     localStorage.removeItem("userToken");

//     setUserLogin(null);
//     navigate("/login");
// };



return (
  <nav className="bg-slate-300 fixed top-0 left-0 right-0 border-gray-200 h-16 z-50">
    <div className="flex flex-wrap justify-center gap-3 lg:justify-between items-center mx-auto max-w-screen-xl p-4">
      <div className="flex gap-5 items-center">
        <Link to="" className="flex items-center space-x-3">
          <img src={logo} width={"120px"} className="h-8" alt="Logo" />
        </Link>

        {userLogin && (
          <ul className="flex gap-4">
            <li><Link className="text-slate-600" to="">Home</Link></li>
            <li><Link className="text-slate-600" to="products">Products</Link></li>
            <li><Link className="text-slate-600" to="categories">Categories</Link></li>
            {/* <li><Link className="text-slate-600" to="brands">Brands</Link></li> */}
          </ul>
        )}
      </div>

      <div className="flex items-center space-x-6">
        <ul className="flex gap-4">
        <i class="fas fa-shopping-cart"></i>
        </ul>

        <ul className="flex gap-3">
  {userLogin != null ? (
    <span onClick={signout} className="text-sm cursor-pointer text-red-600">SignOut</span>
  ) : (
    <>
      <Link to="/login" className="text-blue-600">Login</Link>
      <Link to="/register" className="text-green-600">Register</Link>
    </>
  )}
</ul>

      </div>
    </div>
  </nav>
);
}
