import React, { useState } from "react"
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom"
import Header from "../component/Header"
import Checked from "../component/image/icons/green-check.svg"
// import Menu from "../data/images/product1.png"
// import Toping from "../data/Toping"

const Detailproduct = () => {
  const { id } = useParams()
  const isLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))
  const Products = JSON.parse(localStorage.getItem("DATA_PRODUCT"))
  const formatIDR = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
  const Topings = JSON.parse(localStorage.getItem("DATA_TOPING"))

  const [topingCheck, setTopingCheck] = useState([])
  const [topingPrice, setTopingPrice] = useState(0)

  const handleChecked = (name, price) => {
    let filterID = topingCheck.filter((e) => e === name)
    if (filterID[0] !== name) {
      setTopingCheck([...topingCheck, name])
      setTopingPrice(topingPrice + price)
    } else {
      setTopingCheck(topingCheck.filter((e) => e !== name))
      setTopingPrice(topingPrice - price)
    }
  }

  const totalPrice = Products[id].priceProduct + topingPrice

  const email = isLogin[0].email
  console.log(email)
  console.log(topingCheck)
  const idProduct = parseInt(id)
  const idCart = new Date()

  const Transaction = { email, topingCheck, idProduct, totalPrice, idCart }
  const arrTransaction = []

  const DataTransaction = JSON.parse(
    localStorage.getItem(`TRANSACTION_${isLogin[0].email}`)
  )

  const navigate = useNavigate()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (DataTransaction == null) {
      arrTransaction.push(Transaction)
      localStorage.setItem(
        `TRANSACTION_${isLogin[0].email}`,
        JSON.stringify(arrTransaction)
      )
    } else {
      DataTransaction.map((e) => {
        arrTransaction.push(e)
      })
      arrTransaction.push(Transaction)
      localStorage.setItem(
        `TRANSACTION_${isLogin[0].email}`,
        JSON.stringify(arrTransaction)
      )
    }
    navigate("/my-cart")
  }

  console.log(Transaction)
  return (
    <>
      <Header />
      <Container className="mt-5 mb-5">
        <Row className="d-flex justify-content-center">
          <Col sm={4}>
            <div className="d-flex justify-content-end mt-3 me-3">
              <div className="d-flex justify-content-center">
                <Image
                  src={Products[id].imageProduct}
                  style={{ width: "350px" }}
                />
              </div>
            </div>
          </Col>
          <Col sm={5} className="pe-3 ">
            <p className="fs-1 fw-bold mb-0" style={{ color: "#bd0707" }}>
              {Products[id].nameProduct}
            </p>
            <p className="fs-5 mt-0 mb-5" style={{ color: "#bd0707" }}>
              {formatIDR.format(Products[id].priceProduct)}
            </p>
            <p className="fs-5 fw-bold mb-4" style={{ color: "#bd0707" }}>
              Toping
            </p>

            <Row className="mb-5">
              {Topings.map((toping) => {
                return (
                  <Col
                    className="d-flex flex-column justify-content-center mb-3"
                    md={3}
                  >
                    <div
                      className="d-flex justify-content-center"
                      onClick={() =>
                        handleChecked(toping.nameToping, toping.priceToping)
                      }
                    >
                      <Image
                        src={toping.imageToping}
                        alt=""
                        style={{ width: "60px", borderRadius: "rounded" }}
                      />
                      {topingCheck.filter(
                        (element) => element === toping.nameToping
                      )[0] ? (
                        <Image
                          src={Checked}
                          className="position-absolute ms-4"
                        />
                      ) : (
                        <Image
                          src={Checked}
                          className="position-absolute ms-4 d-none"
                        />
                      )}
                    </div>
                    <p
                      className="text-center mb-0"
                      style={{ color: "#bd0707", fontSize: "10px" }}
                    >
                      {toping.nameToping}
                    </p>
                    <p
                      className="text-center mb-0"
                      style={{ color: "#bd0707", fontSize: "10px" }}
                    >
                      {formatIDR.format(toping.priceToping)}
                    </p>
                  </Col>
                )
              })}
            </Row>

            <div className="d-flex justify-content-between mt-5 mb-5">
              <p className="fs-5 fw-bold mb-0" style={{ color: "#bd0707" }}>
                Total
              </p>
              <p className="fs-5 fw-bold mb-0" style={{ color: "#bd0707" }}>
                {formatIDR.format(Products[id].priceProduct + topingPrice)}
              </p>
            </div>
            <Button
              onClick={handleOnSubmit}
              style={{
                width: "100%",
                color: "white",
                fontWeight: "bold",
                borderColor: "#bd0707",
                backgroundColor: "#bd0707",
              }}
            >
              Add Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Detailproduct
