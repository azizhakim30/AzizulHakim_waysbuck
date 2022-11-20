import React, { useState } from "react"
import { Container, Card, Row, Col } from "react-bootstrap"
// import Products from "../data/Products"
import { useNavigate } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"

const Listproducts = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const Products = JSON.parse(localStorage.getItem("DATA_PRODUCT"))
  const formatIDR = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })

  const isLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))

  const navigate = useNavigate()

  const DataUser = JSON.parse(localStorage.getItem("USER_DATA"))
  const array = []

  const LoginUser = (user) => {
    DataUser.forEach((element) => {
      if (user.email === element.email && user.password === element.password) {
        array.push(element)
        localStorage.setItem("DATA_LOGIN", JSON.stringify(array))
        navigate("/")
      } else {
        console.log("can't login")
      }
    })
  }

  return (
    <>
      <Container className="my-5">
        <Card.Text className="fs-2 fw-bold" style={{ color: "#bd0707" }}>
          Let's Order
        </Card.Text>
        <Row>
          {Products.map((product) => (
            <Col md={3}>
              <Card
                className="mt-5 d-flex justify-content-center rounded-4 border-0"
                style={{ backgroundColor: "#F6DADA" }}
              >
                {}
                <Card.Img
                  src={product.imageProduct}
                  onClick={() => {
                    !!isLogin === false
                      ? setShowLogin(true)
                      : navigate(`/detail-product/${product.idProduct}`)
                  }}
                />

                <Card.Body>
                  <Card.Text
                    className="text-left fw-bold fs-5 mb-0"
                    style={{ color: "#bd0707" }}
                  >
                    {product.nameProduct}
                  </Card.Text>
                  <Card.Text
                    className="text-left fs-6"
                    style={{ color: "#bd0707" }}
                  >
                    {formatIDR.format(product.priceProduct)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Login
        show={showLogin}
        hide={() => {
          setShowLogin(false)
        }}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
        LoginUser={LoginUser}
      />
      <Register
        show={showRegister}
        hide={() => setShowRegister(false)}
        setShowRegister={setShowRegister}
        setShowLogin={setShowLogin}
      />
    </>
  )
}

export default Listproducts
