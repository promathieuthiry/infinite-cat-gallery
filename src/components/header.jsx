import React from "react"
import { Animated } from "react-animated-css"

import "./header.css"
import NavbarMenu from "./navbar"

function Header() {
  return (
    <div>
      <NavbarMenu />
      <header className="masthead">
        <div>
          <h1>The infinite cat gallery</h1>
        </div>
      </header>
      <Animated animationIn="bounce" animationInDuration="1000" isVisible>
        <h4 className="scrollTitle">Scroll down to load more</h4>
      </Animated>
    </div>
  )
}

export default Header
