import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Form,
  Stack,
  Button,
  Image,
} from "react-bootstrap"

import Header from "../component/Header"
import AttachIcon from "../component/image/Frame.png"

const AddProduct = () => {
  const DataProduct = JSON.parse(localStorage.getItem("DATA_PRODUCT"))
  const [product, setProduct] = useState({
    idProduct: 0,
    nameProduct: "",
    priceProduct: 0,
    imageProduct: "",
  })

  const products = []

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (DataProduct == null) {
      products.push(product)
      localStorage.setItem("DATA_PRODUCT", JSON.stringify(products))
    } else {
      for (let i = 0; i < DataProduct.length; i++) {
        products.push(DataProduct[i])
      }
      product.idProduct = DataProduct.length
      product.priceProduct = parseInt(product.priceProduct)
      products.push(product)
      localStorage.setItem("DATA_PRODUCT", JSON.stringify(products))
    }
    document.getElementById("addproduct").reset()
  }

  return (
    <>
      <Header />

      <Container className="mt-5 mb-5">
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            <Form onSubmit={handleOnSubmit} id="addproduct">
              <Form.Label
                className="fs-3 mb-4 fw-bold"
                style={{ color: "#bd0707" }}
              >
                Product
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Name Product"
                className="mb-4"
                onChange={(e) =>
                  setProduct({ ...product, nameProduct: e.target.value })
                }
                name="nameProduct"
                style={{
                  borderColor: "#bd0707",
                  borderWidth: "3px",
                  backgroundColor: "#FFF3F7",
                }}
              />
              <Form.Control
                type="number"
                placeholder="Price"
                className="mb-4"
                onChange={(e) =>
                  setProduct({ ...product, priceProduct: e.target.value })
                }
                name="priceProduct"
                style={{
                  borderColor: "#bd0707",
                  borderWidth: "3px",
                  backgroundColor: "#FFF3F7",
                }}
              />

              <Stack className="position-relative">
                <Image
                  src={AttachIcon}
                  className="end-0 position-absolute mt-2 me-2"
                />

                <Form.Control
                  type="text"
                  placeholder="Input Image"
                  onChange={(e) =>
                    setProduct({ ...product, imageProduct: e.target.value })
                  }
                  name="imageProduct"
                  style={{
                    width: "100%",
                    borderColor: "#bd0707",
                    borderWidth: "3px",
                    backgroundColor: "#FFF3F7",
                  }}
                />
              </Stack>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    width: "80%",
                    color: "white",
                    fontWeight: "bold",
                    borderColor: "#bd0707",
                    backgroundColor: "#bd0707",
                    marginTop: "20px",
                  }}
                >
                  Add Product
                </Button>
              </div>
            </Form>
          </Col>
          <Col>
            <div className="d-flex flex-row justify-content-center">
              <Image src={product.imageProduct} style={{ width: "300px" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddProduct
