import React, { useState } from "react"
import { Button, Card, Form, Modal } from "react-bootstrap"

const Register = ({ show, hide, setShowRegister, setShowLogin }) => {
  const user = []
  const DataUser = localStorage.getItem("USER_DATA")
  const UserData = JSON.parse(DataUser)
  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
    image: "",
    role: "user",
  })

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (UserData == null) {
      user.push(state)
      localStorage.setItem("USER_DATA", JSON.stringify(user))
    } else {
      UserData.forEach((element) => {
        user.push(element)
      })
      user.push(state)
      localStorage.setItem("USER_DATA", JSON.stringify(user))
    }
    setShowRegister(false)
    setShowLogin(true)
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
              Register
            </Form.Label>
            <Form>
              <Form.Control
                onChange={(e) => setState({ ...state, email: e.target.value })}
                className="mb-4"
                value={state.email}
                type="email"
                placeholder="Email"
              />
              <Form.Control
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
                className="mb-4"
                value={state.password}
                type="password"
                placeholder="Password"
              />
              <Form.Control
                onChange={(e) =>
                  setState({ ...state, fullname: e.target.value })
                }
                className="mb-4"
                value={state.fullname}
                type="text"
                placeholder="Full Name"
              />
              <Form.Control
                onChange={(e) => setState({ ...state, image: e.target.value })}
                className="mb-4"
                value={state.image}
                type="text"
                placeholder="Image"
              />
            </Form>
            <Button
              variant="danger"
              className="mb-2 text-center w-100"
              style={{ backgroundColor: "red" }}
              type="submit"
            >
              Register
            </Button>
            <p className="text-center">
              Already have an account ? Klik
              <span
                className="ms-1 fw-bold"
                onClick={() => {
                  setShowRegister(false)
                  setShowLogin(true)
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

export default Register
