import React, { useState } from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addcard } from "../redux/modules/cards.js";

const Modal = () => {
    const id = nextId();
    const dispatch = useDispatch(); 
 
    const [card, setcard] = useState({
        id: "0",
        title: "",
        imagelink: "",
        category: '',
        description: "",
    });
    
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setcard({ ...card, [name]: value });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        if (card.title.trim() === "" || card.imagelink.trim() === ""  || card.category.trim() === ""  || card.description.trim() === "") return alert('Fill the Form!');
        dispatch(addcard({ ...card, id })); 
        setcard({
        id: "0",
        title: "",
        imagelink: "",
        category: '',
        description: "",
        });
    };
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title fs-2" id="staticBackdropLabel">Create Card</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-list">
                                <label >Title</label>
                                <input type="text" value={card.title} placeholder="Add title name" id="title" name="title" onChange={onChangeHandler} />
                            </div>
                            <div className="form-list">
                                <label >Category</label>
                                <select value={card.category} type="text" placeholder="Add title name" id="category" name="category" onChange={onChangeHandler}>
                                    <option defaultValue>Choose category</option>
                                    <option value='cobain aja'>cobain aja</option>
                                </select>
                            </div>
                            <div className="form-list">
                                <label >Image Link</label>
                                <input type="text" value={card.imagelink} placeholder="Add Image Link" id="imagelink" name="imagelink" onChange={onChangeHandler} />
                            </div>
                            <div className="form-list">
                                <label >Description</label>
                                <textarea type="text"  value={card.description} placeholder="Add Description" rows="5" id="description" name="description" onChange={onChangeHandler}></textarea>
                            </div>
                            
                            <div className="modal-footer">
                                <button className="button-main">Create</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};


export default Modal;
