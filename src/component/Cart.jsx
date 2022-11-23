import React from "react"
import { Image, Badge } from "react-bootstrap"
import BasketIcon from "./image/navbar/basketIcon.png"
import { Link } from "react-router-dom"

const Cart = () => {
  const isLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))
  const transaction = JSON.parse(
    localStorage.getItem(`TRANSACTION_${isLogin[0].email}`)
  )

  return (
    <>
      <Link to="/my-cart">
        <Image src={BasketIcon} alt="" />
        {!!transaction === true ? (
          <>
            {transaction.map((e) => {
              return (
                <>
                  {isLogin[0].email === e.email ? (
                    <>
                      <Badge bg="danger" className="position-absolute">
                        {transaction.length}
                      </Badge>
                    </>
                  ) : (
                    <>
                      <Badge bg="danger" className="position-absolute">
                        0
                      </Badge>
                    </>
                  )}
                </>
              )
            })}
          </>
        ) : (
          <></>
        )}
      </Link>
    </>
  )
}

export default Cart
