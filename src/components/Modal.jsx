import React from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Modal = () => {
    return (
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h1 class="modal-title fs-2" id="staticBackdropLabel">Create Card</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <form action="">
                            <div class="form-list">
                            <label for="nama">Title</label>
                            <input type="text" placeholder="Add title name" id="nama" name="searchKeyword" onkeypress="handle" />
                            </div>
                            <div class="form-list">
                            <label for="nama">Category</label>
                            <select type="text" placeholder="Add title name" id="nama" name="searchKeyword" onkeypress="handle">
                                <option selected>Choose category</option>
                            </select>
                            </div>
                            <div class="form-list">
                            <label for="nama">Image Link</label>
                            <input type="text" placeholder="Add Image Link" id="nama" name="searchKeyword" onkeypress="handle" />
                            </div>
                            <div class="form-list">
                            <label for="nama">Description</label>
                            <textarea type="text" placeholder="Add Description" rows="5" id="nama" name="searchKeyword" onkeypress="handle"></textarea>
                            </div>
                        </form>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="button-main" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="button-main">Create</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};


export default Modal;
