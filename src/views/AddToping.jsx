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

const AddToping = () => {
  const DataToping = JSON.parse(localStorage.getItem("DATA_TOPING"))
  const [toping, setToping] = useState({
    idToping: 0,
    nameToping: "",
    priceToping: 0,
    imageToping: "",
  })

  const topings = []

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (DataToping == null) {
      topings.push(toping)
      localStorage.setItem("DATA_TOPING", JSON.stringify(topings))
    } else {
      for (let i = 0; i < DataToping.length; i++) {
        topings.push(DataToping[i])
      }
      toping.idToping = DataToping.length
      toping.priceToping = parseInt(toping.priceToping)
      topings.push(toping)
      localStorage.setItem("DATA_TOPING", JSON.stringify(topings))
    }
    document.getElementById("addtoping").reset()
  }
  return (
    <>
      <Header />
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            <Form onSubmit={handleOnSubmit} id="addtoping">
              <Form.Label
                className="fs-3 mb-4 fw-bold"
                style={{ color: "#bd0707" }}
              >
                Toping
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Name Toping"
                onChange={(e) =>
                  setToping({ ...toping, nameToping: e.target.value })
                }
                className="mb-4"
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
                  setToping({ ...toping, priceToping: e.target.value })
                }
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
                    setToping({ ...toping, imageToping: e.target.value })
                  }
                  name="imageToping"
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
                  Add Toping
                </Button>
              </div>
            </Form>
          </Col>
          <Col>
            <div className="d-flex flex-row justify-content-center">
              <Image src={toping.imageToping} style={{ width: "70%" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddToping
