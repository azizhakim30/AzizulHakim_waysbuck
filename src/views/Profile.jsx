import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import Header from "../component/Header"
import Transaction from "../component/Transaction"

const Profile = () => {
  const profile = JSON.parse(localStorage.getItem("DATA_LOGIN"))
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col
            sm={5}
            className="d-flex flex-column p-3"
            style={{ border: "0" }}
          >
            <Card.Title
              className="fs-3 fw-bold mb-4"
              style={{ color: "#bd0707" }}
            >
              My Profile
            </Card.Title>
            <div className="d-flex flex-row gap-3">
              <Card.Img
                src={profile[0].image}
                className="rounded-3"
                style={{ width: "200px", height: "320px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#613D2B" }}>Full Name</Card.Title>
                <Card.Text className="mb-4">{profile[0].fullname}</Card.Text>
                <Card.Title style={{ color: "#613D2B" }}>Email</Card.Title>
                <Card.Text>{profile[0].email}</Card.Text>
              </Card.Body>
            </div>
          </Col>
          <Col className="d-flex flex-column p-3 w-75 gap-3">
            <p className="fs-3 fw-bold mb-0" style={{ color: "#613D2B" }}>
              My Transaction
            </p>
            <Transaction />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile
