import React, { useState } from "react";
import '../assets/css/style.css';
import '../assets/css/fontawesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deletecomment, editcomment, getcommentByID } from "../redux/modules/commentsSlices";

const Comments = () => {
    const comments = useSelector((state) => state.comments.comments);
    const comment = useSelector((state) => state.comments.comment)
    const dispatch = useDispatch();
    const param = useParams();
    const card_id = param.id;

    const [komen, setKomen] = useState(comment.comment);

    const getID = (comment_id) => {
        dispatch(getcommentByID(comment_id));
    };

    const onChangeHandler = (event) => {
        setKomen(event.target.value);
    }

    const editComment = () => {
        if (komen !== '') {
            dispatch(editcomment({card_id: comment.card_id, comment_id: comment.comment_id, comment: komen}))
        } else {
            return alert('Fill the Form!')
        }
    }

    const deleteComment = (card_id, comment_id) => {
        dispatch(deletecomment({card_id: card_id, comment_id: comment_id}))
    }

    return (
        <div className="cards-container">
            <h4>COMMENTS</h4>

            {comments.map((komentar) => {
                if (komentar.card_id === card_id) {
                    return (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{komentar.name}</h5>
                                <p className="card-text">{komentar.comment}</p>
                            </div>
                            <div>
                                <button className="editdel_button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => getID(komentar.comment_id)}><i class="fa-regular fa-pen-to-square"></i></button>
                                <button className="editdel_button"><i class="fa-solid fa-trash-can" onClick={() => deleteComment(komentar.card_id, komentar.comment_id)}></i></button>
                            </div>
                        </div>
                    )
                }
            })}

            {/* === Modal === */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content mc_editcomment">
                        <div className="modal-header">
                            <h5 className="modal-title mt-ec" id="staticBackdropLabel">EDIT COMMENT</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-list2">
                                <label for="comment2">Comment</label>
                                <textarea type="text" id="comment2" className="comment2" rows="5" value={komen} onChange={onChangeHandler}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="save_btn" onClick={editComment} data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Comments;