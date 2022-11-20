import React from "react"
import { Stack, Image } from "react-bootstrap"
import Product1 from "../data/images/product1.png"
import Group from "./image/navbar/Group.png"
import Barcode from "./image/barcode.png"

const Transaction = () => {
  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        className="justify-content-start"
        style={{ backgroundColor: "#F7DADA", borderRadius: "15px" }}
      >
        <Stack direction="horizontal" style={{ margin: "30px" }}>
          <Image
            src={Product1}
            style={{ width: "200px", marginRight: "20px" }}
          />
          <div className="align-middle">
            <p>Ice Coffe Palm Sugar</p>
            <p>Saturday, 5 March 2020 </p>
            <p>Toping : Bill Berry Boba, Bubble Tea Gelatin</p>
            <p>Price : Rp.33.000</p>
          </div>
        </Stack>
        <div>
          <div className="mb-4">
            <Image src={Group} />
          </div>
          <div>
            <Image src={Barcode} />
          </div>
          <p>Waiting Approve</p>
          <p>Sub Total : 69.000</p>
        </div>
      </Stack>
    </>
  )
}

export default Transaction
