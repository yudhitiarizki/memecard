import React from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletecard } from "../redux/modules/cards.js";

const List = ({ children }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);

  const onDeletecard = (id) => {
    dispatch(deletecard(id));
  };

  
  return (
    <div className="cards-container">
        <div className="row">
            <div className="col-lg-12">

                {children}

                <div className="row col-12">

                {cards.map((card) => (
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                        <div className="thumb">
                            <img src={card.imagelink} alt="" />
                        </div>
                        <div className="col-12 item-button">
                            <Link className="button-main" to={`/${card.id}`}>Detail</Link>
                        </div>
                        <div className="col-12 item-button">
                            <button className="button-main hapus" type="button" onClick={() => onDeletecard(card.id)}>Hapus</button>
                        </div>
                        </div>
                    </div>
                ))}

                    
                    
                </div>
            </div>
        </div>
    </div>
  );
};

export default List;