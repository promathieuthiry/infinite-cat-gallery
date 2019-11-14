import React, { Component } from 'react'
import debounce from "lodash.debounce";
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

import { configHeader } from '../helpers/header'
import './fetchImage.css'

class FetchImage extends Component {

    state = {
        data: [],
        isLoading: false
    }
    componentDidMount() {
        this.getImage()
    }
    
    render() {

        // Fetch automatically on scroll when almost at the bottom
        window.onscroll = debounce(() => {
            if (
              window.innerHeight + document.documentElement.scrollTop
              === document.documentElement.offsetHeight
            ) {
                this.getImage()
            }
          }, 200);

        const { data, isLoading } = this.state
  
        return (
            <div className="wrapper">
               <div className="img-area">
                {data.filter(this.filterLandscapeImage).map(item => 
               <div className="item">
                   <Animated animationInDuration="3000" >
                  <img className="image" src={item.url} alt="" key={item.id} />   
                  </Animated>
                  <div class="middle">
                 <a className="text" href="https://wa.me/?text=urlencodedtext">
                 <FontAwesomeIcon icon={faWhatsapp} /> Share on Whatsapp</a>
                 </div>
                  </div>
                  )}
               </div>
               {isLoading && <p>Loading</p>}
            </div>
        )
    }

    getImage = async () => {
        this.setState({ isLoading: true })
        const { data } = this.state
        try {
       const dataFetching = await fetch('https://api.thecatapi.com/v1/images/search?limit=40&order=DESC&size=small', configHeader)
       const image  = await dataFetching.json()
        let concat = data.concat(image)
        this.setState({data: concat, isLoading: false})
        }
        catch(error) {
            this.setState({ isLoading: false })
            throw error
        }
        
    }

    // Filter image with a certain ratio
    filterLandscapeImage = (element) => {
    return  ((element.height / element.width) > 0.5) 
    && ((element.height / element.width) < 0.7)
    }
}

    
export default FetchImage