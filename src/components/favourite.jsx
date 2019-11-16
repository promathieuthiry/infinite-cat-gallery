import React, { Component } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { Animated } from "react-animated-css"
import "./fetchImage.css"
import NavbarFavourite from "./navbarFavourite"

class Favourite extends Component {
  state = {
    items: Object.entries({ ...localStorage })
  }

  delete = key => {
    localStorage.removeItem(key)
    this.setState({ items: Object.entries({ ...localStorage }) })
  }

  render() {
    const { items } = this.state
    return (
      <div>
        <NavbarFavourite />
        <div className="wrapper">
          <div className="img-area">
            {items.length === 0 && (
              <h4>
                You don&apos;t have yet favourites. Please go back to the home
                page to add favourites
              </h4>
            )}
            {items.map(item => (
              <div className="item">
                <Animated animationInDuration="3000">
                  <img className="image" src={item[1]} alt="" key={item[0]} />
                </Animated>
                <div className="middle">
                  <button
                    type="button"
                    className="deleteButton"
                    onClick={() => this.delete(item[0])}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default Favourite
