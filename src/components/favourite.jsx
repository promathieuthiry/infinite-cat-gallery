import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import {Animated} from "react-animated-css";
import './fetchImage.css'


class Favourite extends Component {

    state = {
        items: Object.entries({...localStorage})
    }

    render() {
        const { items } =  this.state
        return (
            <div>
                <div className="wrapper" >
               <div className="img-area" >
                {items.map(item => 
               <div className="item">
                   <Animated animationInDuration="3000" >
                  <img className="image" src={item[1]} alt="" key={item[0]} />   
                  </Animated>
                  <div class="middle">
                 <button className="deleteButton" onClick={() => this.delete(item[0])}>
                 <FontAwesomeIcon icon={faTrash} /> Delete</button>
                 </div>
                  </div>
                  )}
               </div>
            </div>
            <br />
            </div>
        )
    }

    delete = (key) => {
        localStorage.removeItem(key);
        this.setState({items: Object.entries({...localStorage})})
    }
}

export default Favourite