import React from "react"
// import Header from "./component/Header"
// import Register from "./component/Register"
// import Login from "./component/Login"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./views/Home"
// import DropdownAdmin from "./component/DropdownAdmin"
// import DropdownUser from "./component/DropdownUser"
// import Profile from "./component/Profile"
// import Transaction from "./component/Transaction"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Detailproduct from "./views/Detailproduct"
import AddProduct from "./views/AddProduct"
import AddToping from "./views/AddToping"
import Profile from "./views/Profile"
import MyCart from "./views/MyCart"
import IncomePage from "./views/incomePage"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-product/:id" element={<Detailproduct />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-toping" element={<AddToping />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/income" element={<IncomePage />} />
        </Routes>
      </Router>

      {/* <Header /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Profile />
      <Transaction /> */}
    </>
  )
}

export default App
