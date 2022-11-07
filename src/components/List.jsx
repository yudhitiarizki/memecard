import React from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const List = ({ children }) => {
  
  return (
    <div className="cards-container">
        <div className="row">
            <div className="col-lg-12">
                

                {children}

                <div className="row col-12">

                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                        <div className="thumb">
                            <img src="https://images-cdn.9gag.com/photo/aQX6YeK_700b.jpg" alt="" />
                        </div>
                        <div className="col-12 item-button">
                            <button className="button-main"> Detail</button>
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