import React from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const CardDetail = () => {
    return (
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
                        <div class="input-list">
                            <label for="name">Name</label>
                            <input type="text" placeholder="Input your name here" id="name" name="name_input" />
                        </div>
                        <div class="input-list">
                            <label for="comment">Comment</label>
                            <textarea type="text" placeholder="Add your comment here" id="comment" name="comment_input" rows="5"/>
                        </div>
                    </form>
                    <button className="addcomment_button">Add New Comment</button>
                </div>
            </div>
        </div>
    )
}

export default CardDetail;