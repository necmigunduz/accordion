import { useEffect, useState } from "react"
import Card from "../components/card"
import Data from "../data/data.json"

const Cards = () => {
  return (
    <div className="m-8 grid grid-cols-3">
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Cards