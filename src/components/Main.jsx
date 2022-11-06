import React from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Main = ({ children }) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="page-content">
                    {children}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Main;