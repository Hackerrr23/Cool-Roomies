import React, { Component } from 'react'
import {Link} from "react-router-dom"

export class Header extends Component {
  render() {
    return (
     <nav>
         <section>
            <i class="fas fa-house-damage"></i>
             <h1>ROOMIES</h1>
             <span>Find Your Perfect Roomate</span>
         </section>
         <Link to = "/signup"><button>Sign Up</button></Link>
         <Link to = "/signin"><button>Sign In</button></Link>
     </nav>
    )
  }
}

export default Header
