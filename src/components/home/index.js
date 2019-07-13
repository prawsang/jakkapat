import React from "react"

import Hero from "./hero"
import Ingredients from "./ingr"

const HomePage = () => (
  <React.Fragment>
    <Hero />
    <main className="container full-width dark">
      <Ingredients />
    </main>
  </React.Fragment>
)

export default HomePage
