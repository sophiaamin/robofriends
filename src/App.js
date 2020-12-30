import React, { Component } from "react"
import CardList from "./CardList"
import { robots } from "./robots"
import SearchBox from "./SearchBox"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: "",
    }
  }

  componentDidMount() {
    this.setState({ robots: robots })
  }

  onSearchChange = (event) => {
    console.log(event.target.value)
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase())
    })

    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterRobots} />
      </div>
    )
  }
}

export default App
