import React from "react";
import './DashboardHeader.css';

const DashboardHeader = () =>{
    return(
        <>
        <div className="promo_card">
                            <h1>Welcome to GUVI Hiring</h1>
                            <div className="desc">
                                <span>Get Codified with our New Features!</span>
                            </div>
                            <a href="https://www.guvi.in/" target="__blank"><button>Learn More</button></a>
                           {/* <div className="img-container">
                           <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" className="image--cover" />
                           </div> */}
                        </div>
        </>
    )
}

export default DashboardHeader;