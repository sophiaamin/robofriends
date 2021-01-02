import React from "react"
import Card from "./Card"

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error('Nooo')
  // }
  return robots.map((robot) => <Card robot={robot} />)
}

export default CardList
