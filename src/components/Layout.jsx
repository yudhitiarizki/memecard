import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from "react";


const Layout = ({ children }) => {
  return (
    <div>
        {children}
    </div>
    
  )
};

export default Layout;