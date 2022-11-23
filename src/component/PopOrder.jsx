import React from "react"
import { Card, Modal } from "react-bootstrap"

const PopOrder = ({ show, hide }) => {
  return (
    <>
      <Modal show={show} onHide={hide} centered>
        <Card
          className=" position-absolute top-50 start-50 translate-middle p-5"
          style={{
            width: "400px",
          }}
        >
          <Card.Text style={{ fontSize: "20px", color: "green" }}>
            Thank you for ordering in us, please wait to verify you order
          </Card.Text>
        </Card>
      </Modal>
    </>
  )
}

export default PopOrder
