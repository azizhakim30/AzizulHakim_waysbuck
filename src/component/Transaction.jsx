import React from "react"
import { Stack, Image } from "react-bootstrap"

import Group from "./image/navbar/Group.png"
import Barcode from "./image/barcode.png"

const Transaction = () => {
  const isLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))
  const transaction = JSON.parse(
    localStorage.getItem(`TRANSACTION_${isLogin[0].email}`)
  )
  const Products = JSON.parse(localStorage.getItem("DATA_PRODUCT"))

  const formatIDR = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
  return (
    <>
      <Stack
        direction="vertical"
        gap={3}
        className="justify-content-start position-relative"
        style={{ backgroundColor: "#F7DADA", borderRadius: "15px" }}
      >
        {transaction.map((e) => {
          return (
            <>
              <Stack direction="horizontal" style={{ margin: "30px" }}>
                {Products.map((product) => {
                  return (
                    <>
                      {product.idProduct === e.idProduct ? (
                        <>
                          <Image
                            src={product.imageProduct}
                            style={{ width: "100px", marginRight: "20px" }}
                          />
                          <Stack
                            direction="vertical"
                            style={{ fontWidth: "12px" }}
                          >
                            <div className="align-middle">
                              <p>{product.nameProduct}</p>
                              <p>Saturday, 5 March 2020 </p>
                              <p>
                                Toping :
                                {e.topingCheck.map((e) => {
                                  return <> {e},</>
                                })}
                              </p>
                              <p>Price : {formatIDR.format(e.totalPrice)}</p>
                            </div>
                          </Stack>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )
                })}
              </Stack>
            </>
          )
        })}
        <div
          className="position-absolute my-auto"
          style={{
            marginLeft: "500px",
          }}
        >
          <div className="mb-4">
            <Image src={Group} />
          </div>
          <div>
            <Image src={Barcode} />
          </div>
          <p>Waiting Approve</p>
          <p>Sub Total:</p>
          <p>
            {formatIDR.format(
              transaction.map((e) => e.totalPrice).reduce((a, b) => a + b)
            )}
          </p>
        </div>
      </Stack>
    </>
  )
}

export default Transaction
