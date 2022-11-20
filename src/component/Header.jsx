import React, { useState } from "react"
import { Navbar, Container, Nav, Button, Stack } from "react-bootstrap"
import Group from "./image/navbar/Group.png"
import Register from "./Register"
import Login from "./Login"
import DropdownUser from "./DropdownUser"
import { useNavigate } from "react-router-dom"
import DropdownAdmin from "./DropdownAdmin"

const Header = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const UserData = localStorage.getItem("USER_DATA")
  const DataUser = JSON.parse(UserData)
  const array = []

  const Navigate = useNavigate()
  const isLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))

  const LoginUser = (user) => {
    DataUser.forEach((element) => {
      if (user.email === element.email && user.password === element.password) {
        array.push(element)
        localStorage.setItem("DATA_LOGIN", JSON.stringify(array))
      } else {
        console.log("can't login")
      }
    })
    Navigate("/")
  }
  const Logout = () => {
    // isLogin.pop()
    localStorage.removeItem("DATA_LOGIN", JSON.stringify(isLogin))
    Navigate("/")
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="mx-5">
          <a href="/">
            <img src={Group} alt="" />
          </a>
        </Navbar.Brand>

        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        ></Nav>
        <Stack direction="horizontal" gap={3} className="mx-5">
          {!!isLogin === true ? (
            <>
              {isLogin[0].role === "admin" ? (
                <DropdownAdmin Logout={Logout} UserImage={isLogin[0].image} />
              ) : (
                <DropdownUser Logout={Logout} UserImage={isLogin[0].image} />
              )}
            </>
          ) : (
            <>
              <Button
                variant="outline-danger"
                className="px-3"
                onClick={() => {
                  setShowRegister(true)
                }}
              >
                Register
              </Button>
              <Register
                show={showRegister}
                hide={() => setShowRegister(false)}
                setShowRegister={setShowRegister}
                setShowLogin={setShowLogin}
              />
              <Button
                variant="danger"
                className="px-4"
                style={{ backgroundColor: "red" }}
                onClick={() => {
                  setShowLogin(true)
                }}
              >
                Login
              </Button>

              <Login
                show={showLogin}
                hide={() => {
                  setShowLogin(false)
                }}
                setShowLogin={setShowLogin}
                setShowRegister={setShowRegister}
                LoginUser={LoginUser}
              />
            </>
          )}
        </Stack>
      </Container>
    </Navbar>
  )
}

export default Header
