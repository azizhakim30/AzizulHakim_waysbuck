import React from "react"
import Header from "../component/Header"
import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Form,
  Button,
} from "react-bootstrap"
import AttachImg from "../component/image/AttacTransaction.png"
import Bin from "../component/image/recyclebin.png"

const MyCart = () => {
  const transaction = JSON.parse(localStorage.getItem("TRANSACTION"))
  const isLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))
  const Products = JSON.parse(localStorage.getItem("DATA_PRODUCT"))

  const formatIDR = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })

  return (
    <>
      <Header />
      <Container className="mt-3">
        <Row>
          <Col>
            <Stack direction="vertical">
              <p className="fs-3 fw-bold" style={{ color: "#bd0707" }}>
                My Cart
              </p>
              <p className="fs-5 mb-0" style={{ color: "#bd0707" }}>
                Review Your Order
              </p>
            </Stack>
            <hr />

            {transaction.map((e) => {
              return (
                <>
                  {isLogin[0].email === e.email ? (
                    <>
                      <Stack direction="horizontal" className="mb-3">
                        {Products.map((product) => {
                          return (
                            <>
                              {product.idProduct === e.idProduct ? (
                                <>
                                  <Image
                                    src={product.imageProduct}
                                    style={{ width: "8%" }}
                                  />
                                  <div className="ms-3">
                                    <p
                                      className="m-0 fw-bold"
                                      style={{ color: "#bd0707" }}
                                    >
                                      {product.nameProduct}
                                    </p>
                                    <p
                                      className="m-0"
                                      style={{ color: "#bd0707" }}
                                    >
                                      Toping:
                                      {e.topingCheck.map((e) => {
                                        return <> {e},</>
                                      })}
                                    </p>
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </>
                          )
                        })}

                        <div className="ms-auto">
                          <p
                            className="m-0 fw-bold"
                            style={{ color: "#bd0707" }}
                          >
                            {formatIDR.format(e.totalPrice)}
                          </p>
                          <div className="d-flex justify-content-end">
                            <Image src={Bin} style={{ width: "20%" }} />
                          </div>
                        </div>
                      </Stack>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )
            })}

            <hr />
            <Row>
              <Col>
                <hr />
                <Stack direction="vertical">
                  <Stack direction="horizontal">
                    <p>Subtotal</p>
                    <p className="ms-auto">
                      {formatIDR.format(
                        transaction
                          .map((e) => e.totalPrice)
                          .reduce((a, b) => a + b)
                      )}
                    </p>
                  </Stack>
                  <Stack direction="horizontal">
                    <p>Qty</p>
                    <p className="ms-auto">{transaction.length}</p>
                  </Stack>
                  <hr />
                  <Stack direction="horizontal">
                    <p>Total</p>
                    <p className="ms-auto">
                      {formatIDR.format(
                        transaction
                          .map((e) => e.totalPrice)
                          .reduce((a, b) => a + b)
                      )}
                    </p>
                  </Stack>
                </Stack>
              </Col>
              <Col className="d-flex flex-column justify-content-center">
                <div className="d-flex flex-column justify-content-center">
                  <Form.Label
                    className="btn d-flex flex-column justify-content-center"
                    style={{
                      backgroundColor: "#FFF3F7",
                      color: "#bd0707",
                      borderColor: "#bd0707",
                      height: "150px",
                      borderWidth: "3px",
                    }}
                  >
                    <div className="d-flex flex-column justify-content-center">
                      <div>
                        <Image src={AttachImg} />
                      </div>
                      Atache of Transaction
                    </div>
                    <Form.Control
                      type="file"
                      style={{
                        width: "100%",
                        borderColor: "#bd0707",
                        borderWidth: "3px",
                        backgroundColor: "#FFF3F7",
                      }}
                      hidden
                    />
                  </Form.Label>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex justify-content-center">
            <Form className="d-flex flex-column justify-content-center w-75">
              <Form.Control
                type="text"
                placeholder="Name"
                className="mb-3"
                style={{
                  borderColor: "#bd0707",
                  borderWidth: "3px",
                  backgroundColor: "#FFF3F7",
                }}
              />
              <Form.Control
                type="email"
                placeholder="Email"
                className="mb-3"
                style={{
                  borderColor: "#bd0707",
                  borderWidth: "3px",
                  backgroundColor: "#FFF3F7",
                }}
              />
              <Form.Control
                type="number"
                placeholder="Phone"
                className="mb-3"
                style={{
                  borderColor: "#bd0707",
                  borderWidth: "3px",
                  backgroundColor: "#FFF3F7",
                }}
              />
              <Form.Control
                type="number"
                placeholder="Pos Code"
                className="mb-3"
                style={{
                  borderColor: "#bd0707",
                  borderWidth: "3px",
                  backgroundColor: "#FFF3F7",
                }}
              />
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Address"
                className="mb-5"
                style={{
                  borderColor: "#bd0707",
                  borderWidth: "3px",
                  backgroundColor: "#FFF3F7",
                }}
              />
              <Button
                variant="primary"
                type="submit"
                style={{
                  width: "100%",
                  color: "white",
                  fontWeight: "bold",
                  borderColor: "#bd0707",
                  backgroundColor: "#bd0707",
                }}
              >
                Pay
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyCart
