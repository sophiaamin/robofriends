import React from "react"

const Card = (props) => {
  console.log("enter card")
  console.log("props:", props)
  const { id, name, email } = props.robot
  //   console.log("robot:", robot)

  return (
    <div
      key={id}
      id={id}
      className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
    >
      <img alt={`photo-${name}`} src={`https://robohash.org/${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
