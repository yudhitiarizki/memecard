import React, { useState } from "react";
import '../assets/css/style.css';
import '../assets/css/fontawesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Comments = () => {
    const comments = useSelector((state) => state.comments.comments);
    const param = useParams();
    const card_id = param.id;

    return (
        <div className="cards-container">
            <h4>COMMENTS</h4>

            {comments.map((comment) => {
                if (comment.card_id === card_id) {
                    return (
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{comment.name}</h5>
                                <p class="card-text">{comment.comment}</p>
                            </div>
                            <div>
                                <button className="editdel_button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-regular fa-pen-to-square"></i></button>
                                <button className="editdel_button"><i class="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                    )
                }
            })}

            {/* === Modal === */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content mc_editcomment">
                        <div class="modal-header">
                            <h5 class="modal-title mt-ec" id="staticBackdropLabel">EDIT COMMENT</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="input-list2">
                                <label for="name2">Name</label>
                                <input type="text" id="name2" name="name2" value={'nilai awal'} />
                            </div>
                            <div class="input-list2">
                                <label for="comment2">Comment</label>
                                <textarea type="text" id="comment2" name="comment2" rows="5" value={'nilai awal'} />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="save_btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Comments;