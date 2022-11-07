import React from "react";
import '../assets/css/style.css';
import '../assets/css/fontawesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Modal from './Modal';
import { Link } from "react-router-dom";

const CreateSearch = () => {
    return (
        <div className="heading-section col-12 mb-4 test">
            <div className="main-button">
                <Link to={() => false} data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <p>Create</p> </Link>
            </div>

            <div className="search-input-parent">
                <div className="search-input mr-2">
                <form className="search" action="#">
                    <input type="text" placeholder="Type Something" id="searchText" name="searchKeyword"/>
                    <i className="fa fa-search"></i>
                    <button className="button-main">Search</button>
                </form>
                </div>
            </div>
            <Modal/>
        </div>
        
    );
};


export default CreateSearch;
