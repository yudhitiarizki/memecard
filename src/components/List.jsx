import React from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const List = ({ children }) => {
  return (
    <div class="cards-container">
        <div class="row">
            <div class="col-lg-12">
                

                {children}

                <div class="row col-12">

                    <div class="col-lg-3 col-sm-6">
                        <div class="item">
                        <div class="thumb">
                            <img src="https://images-cdn.9gag.com/photo/aQX6YeK_700b.jpg" alt="" />
                        </div>
                        <div class="col-12 item-button">
                            <button class="button-main">Detail</button>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  );
};

export default List;