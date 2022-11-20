import React from "react"
import { Container, Row, Table, Button, Image, Stack } from "react-bootstrap"
import SuccessImg from "../component/image/icons/success.png"
import CancelImg from "../component/image/icons/cancel.png"
import Header from "../component/Header"

function IncomePage() {
  return (
    <>
      <Header />
      <Container className="mb-5 mt-5">
        <Row>
          <p className="fs-3 mb-4 fw-bold" style={{ color: "#bd0707" }}>
            Income Transaction
          </p>
        </Row>
        <Row className="d-flex flex-row justify-content-center">
          <Table
            bordered
            hover
            style={{
              textAlign: "center",
              width: "90%",
              borderColor: "#828282",
            }}
          >
            <thead style={{ backgroundColor: "#E5E5E5" }}>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Post Code</th>
                <th>Income</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sugeng No Pants</td>
                <td>Cileungsi</td>
                <td>16820</td>
                <td style={{ color: "#061E99" }}>69.000</td>
                <td style={{ color: "#FF9900" }}>Waiting Approve</td>
                <td>
                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="d-flex justify-content-center"
                  >
                    <Button variant="danger" className="w-50 py-0">
                      Cancel
                    </Button>
                    <Button variant="success" className="w-50 py-0">
                      Approve
                    </Button>
                  </Stack>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Haris Gams</td>
                <td>Serang</td>
                <td>42111</td>
                <td style={{ color: "#061E99" }}>30.000</td>
                <td style={{ color: "#78A85A" }}>Success</td>
                <td>
                  <Image src={SuccessImg} />
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Aziz Union</td>
                <td>Bekasi</td>
                <td>13450</td>
                <td style={{ color: "#061E99" }}>28.000</td>
                <td style={{ color: "#E83939" }}>Cancel</td>
                <td>
                  <Image src={CancelImg} />
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>Lae Tanjung Balai</td>
                <td>Tanjung Balai</td>
                <td>21331</td>
                <td style={{ color: "#061E99" }}>30.000</td>
                <td style={{ color: "#00D1FF" }}>On The Way</td>
                <td>
                  <Image src={SuccessImg} />
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  )
}

export default IncomePage
