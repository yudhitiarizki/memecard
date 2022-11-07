import React from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Modal = () => {
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title fs-2" id="staticBackdropLabel">Create Card</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form action="">
                            <div className="form-list">
                            <label >Title</label>
                            <input type="text" placeholder="Add title name" id="nama" name="searchKeyword" />
                            </div>
                            <div className="form-list">
                            <label >Category</label>
                            <select type="text" placeholder="Add title name" id="nama" name="searchKeyword">
                                <option defaultValue>Choose category</option>
                            </select>
                            </div>
                            <div className="form-list">
                            <label >Image Link</label>
                            <input type="text" placeholder="Add Image Link" id="nama" name="searchKeyword" />
                            </div>
                            <div className="form-list">
                            <label >Description</label>
                            <textarea type="text" placeholder="Add Description" rows="5" id="nama" name="searchKeyword"></textarea>
                            </div>
                        </form>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="button-main" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="button-main">Create</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};


export default Modal;
