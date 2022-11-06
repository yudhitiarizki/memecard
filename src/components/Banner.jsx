import React from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Banner = () => {
    return (
        <div className="main-banner">
            <div className="row">
                <div className="col-lg-7">
                    <div classNameName="header-text">
                        <h6>Welcome To SpartaCodingClub</h6>
                        <h4><em>Browse</em> Yu-Gi-Oh Cards Meme</h4>
                        <div className="main-button">
                            <a href={() => false}><p>Browse Now</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Banner;
