import React, { Component } from "react"
import { Animated } from "react-animated-css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { Button, Alert } from "rsuite"

import { configHeader } from "../helpers/header"
import Header from "./header"
import "./fetchImage.css"

class FetchImage extends Component {
  state = {
    data: [],
    isLoading: false
  }

  componentDidMount() {
    this.getImage()
    window.addEventListener("scroll", this.fetchOnScroll)
  }

  getImage = async () => {
    this.setState({ isLoading: true })
    const { data } = this.state
    try {
      const dataFetching = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=40&order=DESC&size=small",
        configHeader
      )
      const image = await dataFetching.json()
      const concat = data.concat(image)
      this.setState({ data: concat, isLoading: false })
    } catch (error) {
      this.setState({ isLoading: false })
      throw error
    }
  }

  // Filter image with a certain ratio
  filterLandscapeImage = element => {
    return (
      element.height / element.width > 0.5 &&
      element.height / element.width < 0.7
    )
  }

  // Fetch at the bottom of the page
  fetchOnScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      this.getImage()
    }
  }

  saveFavourite = (id, url) => {
    const dataSaved = Object.entries({ ...localStorage })
    for (let i = 0; i < dataSaved.length; i++) {
      if (dataSaved[i][0].includes(id) === true) {
        return Alert.info("Already Saved")
      }
    }
    Alert.success("Successfully added")
    localStorage.setItem(id, url)
  }

  render() {
    const { data, isLoading } = this.state
    return (
      <div>
        <Header />
        <div className="wrapper">
          <div className="img-area">
            {data.filter(this.filterLandscapeImage).map(item => (
              <div className="item">
                <Animated animationInDuration="3000">
                  <img className="image" src={item.url} alt="" key={item.id} />
                </Animated>
                <div className="middle">
                <button
                    type="button"
                    className="text"
                    onClick={() => this.saveFavourite(item.id, item.url)}
                  >
                    <FontAwesomeIcon icon={faHeart} /> <b>Add favourite</b>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {isLoading && (
            <Button appearance="link" loading>
              Link
            </Button>
          )}
        </div>
      </div>
    )
  }
}

export default FetchImage
