import React from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Footer = () => {
    return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <p>Copyright © 2022 <a href={() => false}>Meme Card</a> SpartaCodingClub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    );
};


export default Footer;
