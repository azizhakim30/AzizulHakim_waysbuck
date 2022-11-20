import React from "react"
import Jumbotron from "../component/Jumbotron"
import Listproducts from "../component/Listproducts"
import Header from "../component/Header"

const Home = () => {
  return (
    <>
      <Header />
      <Jumbotron />
      <Listproducts />
    </>
  )
}

export default Home
