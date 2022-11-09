import React, { useState } from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import nextId from "react-id-generator";
import { addcomment } from "../redux/modules/commentsSlices";

const CardDetail = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const comment_id = nextId();
    const card_id = param.id;

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeComment = (event) => {
        setComment(event.target.value)
    }

    const onClickHandler = () => {
        if (name !== '' && comment !== '') {
            dispatch(addcomment({card_id: card_id, comment_id: comment_id, name: name, comment: comment}));
            setName = '';
            setComment = '';
        } else {
            return alert('Fill the Form!')
        }
    }

    return (
        <div>
            <div className="goback">
                <button className="goback_button">
                    <i class="fa-solid fa-house"></i>
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
                        <div>
                            <div class="input-list">
                                <label for="name">Name</label>
                                <input type="text" placeholder="Input your name here" id="name" name="name_input" value={name} onChange={onChangeName} />
                            </div>
                            <div class="input-list">
                                <label for="comment">Comment</label>
                                <textarea type="text" placeholder="Add your comment here" id="comment" name="comment_input" rows="5" value={comment} onChange={onChangeComment} />
                            </div>
                            <button className="addcomment_button" onClick={onClickHandler}>Add New Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetail;