import React from "react"

import Hero from "./hero"
import Ingredients from "./ingr"
import Instructions from "./instructions";
import Price from "./price";

import sal from 'sal.js'

class HomePage extends React.Component {
  componentDidMount() {
    sal();
  }
  render() {
    return (
      <React.Fragment>
        <Hero />
        <main className="container full-width dark">
          <Ingredients />
          <Instructions />
          <Price />
        </main>
      </React.Fragment>
    )
  }
}

export default HomePage
