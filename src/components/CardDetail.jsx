import React from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const CardDetail = () => {
    return (
        <div>
            <div className="goback">
                <button className="goback_button">
                    <i className="fa-solid fa-house"></i>
                    Go Home
                </button>
            </div>
            <div className="top_container">
                <div>
                    <div className="cardbox thumb">
                        <img src="https://images-cdn.9gag.com/photo/aQX6YeK_700b.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                    <div className="newComment">
                        <h4>ADD NEW COMMENT</h4>
                        <form>
                            <div className="input-list">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="Input your name here" id="name" name="name_input" />
                            </div>
                            <div className="input-list">
                                <label htmlFor="comment">Comment</label>
                                <textarea type="text" placeholder="Add your comment here" id="comment" name="comment_input" rows="5" />
                            </div>
                        </form>
                        <button className="addcomment_button">Add New Comment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetail;