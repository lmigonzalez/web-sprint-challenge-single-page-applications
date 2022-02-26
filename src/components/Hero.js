import React from "react";
import "../App.css";

import { Link } from "react-router-dom";


const Hero = () =>{


	return(
		<div className="hero">
			<h2>Dont wait, Order Now!</h2>
			<Link to='/pizza'>
				<input type='submit' id="order-button" value='ORDER' /> 
			</Link>
			
		</div>
	)
}

export default Hero;