import React from "react";
import '../assets/css/style.css';
import '../assets/css/fontawesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Modal from './Modal'

const CreateSearch = () => {
    return (
        <div class="heading-section col-12 mb-4 test">
            <div class="main-button">
                <a href={() => false} data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <p>Create</p> </a>
            </div>

            <div class="search-input-parent">
                <div class="search-input mr-2">
                <form class="search" action="#">
                    <input type="text" placeholder="Type Something" id="searchText" name="searchKeyword" onkeypress="handle" />
                    <i class="fa fa-search"></i>
                    <button class="button-main">Search</button>
                </form>
                </div>
            </div>
            

            <Modal/>
        </div>
        
    );
};


export default CreateSearch;
