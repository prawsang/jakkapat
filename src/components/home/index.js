import React from "react"

import Hero from "./hero"
import Ingredients from "./ingr"
import Instructions from "./instructions";

const HomePage = () => (
  <React.Fragment>
    <Hero />
    <main className="container full-width dark">
      <Ingredients />
      <Instructions />
    </main>
  </React.Fragment>
)

export default HomePage
