import React from "react";
import '../assets/css/style.css';
import '../assets/css/fontawesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Comments = () => {
    return (
        <div className="cards-container">
            <h4>COMMENTS</h4>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Name</h5>
                    <p class="card-text">Comment here</p>
                </div>
                <div>
                    <button className="editdel_button"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button className="editdel_button"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Name</h5>
                    <p class="card-text">Comment here</p>
                </div>
                <div>
                    <button className="editdel_button"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button className="editdel_button"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Comments;