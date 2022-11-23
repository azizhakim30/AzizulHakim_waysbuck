import React, { useState } from "react"
import { Button, Form, Modal, Card } from "react-bootstrap"
// import User from "../data/Users"

const Login = ({ show, hide, LoginUser, setShowLogin, setShowRegister }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleOnSubmit = (e) => {
    e.preventDefault()

    LoginUser(user)
  }

  return (
    <Modal show={show} onHide={hide} onSubmit={hide} centered>
      <Card
        className=" position-absolute top-50 start-50 translate-middle p-5"
        style={{
          width: "400px",
        }}
      >
        <Form onSubmit={handleOnSubmit}>
          <Form.Group>
            <Form.Label className="mb-4 fs-1" style={{ color: "red" }}>
              Login
            </Form.Label>
            <Form>
              <Form.Control
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="mb-4"
                value={user.email}
                type="email"
                placeholder="Email"
              />
              <Form.Control
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="mb-4"
                value={user.password}
                type="password"
                placeholder="Password"
              />
            </Form>
            <Button
              variant="danger"
              className="mb-2 text-center w-100"
              style={{ backgroundColor: "red" }}
              type="submit"
            >
              Login
            </Button>
            <p className="text-center">
              Already have an account ? Klik
              <span
                style={{ cursor: "pointer" }}
                className="ms-1 fw-bold"
                onClick={() => {
                  setShowLogin(false)
                  setShowRegister(true)
                }}
              >
                Here
              </span>
            </p>
          </Form.Group>
        </Form>
      </Card>
    </Modal>
  )
}

export default Login
