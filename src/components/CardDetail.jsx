import React, { useState } from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import nextId from "react-id-generator";
import { addcomment } from "../redux/modules/commentsSlices";
import CardImage from "./CardImage";
import { getcardByID } from "../redux/modules/cardsSlices";

const CardDetail = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const comment_id = nextId();
    const card_id = param.id;
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    dispatch(getcardByID(param.id))
    const card = useSelector((state) => state.cards.card)

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeComment = (event) => {
        setComment(event.target.value)
    }

    const onClickHandler = () => {
        if (name !== '' && comment !== '') {
            dispatch(addcomment({ card_id: card_id, comment_id: comment_id, name: name, comment: comment }));
            setName('');
            setComment('');
        } else {
            return alert('Fill the Form!')
        }
    }

    return (
        <div>
            <div className="goback">
                <button className="goback_button" onClick={() => { navigate("/") }}>
                    <i className="fa-solid fa-house"></i>
                    Go Home
                </button>
            </div>
            <div className="top_container">
                <div>
                    <div className="cardbox thumb">
                        <CardImage
                            title={card.title}
                            description={card.description}
                            category={card.category}
                            imagelink={card.imagelink}
                        />
                    </div>
                </div>
                <div>
                    <div className="newComment">
                        <h4>ADD NEW COMMENT</h4>
                        <div>
                            <div className="input-list">
                                <label for="name">Name</label>
                                <input type="text" placeholder="Input your name here" id="name" name="name_input" value={name} onChange={onChangeName} />
                            </div>
                            <div className="input-list">
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