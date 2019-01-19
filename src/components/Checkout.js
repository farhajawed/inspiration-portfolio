import React from "react";
import "./Checkout.css"
import {Link} from 'react-router-dom'
const Checkout = ()=>
    <div className="container custom-div text-center">
        <div className="message mb-5">
            Click <Link to="/portfolio" className="custom-link">here</Link> to checkout my portfolio !
        </div>
    </div>

export default Checkout