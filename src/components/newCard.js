import React from "react";
import "./style.css";

const NewCard = (props) => {
  return (
    <div className="max-w-full  rounded overflow-hidden shadow-lg  text-white relative ">
      <img src={props.image.webformatURL} className="size" />
      <div className="flex justify-between  px-2  description ">
        <div>{props.user}</div>
        <div>
          <ul className="flex items ">
            <li>
              <i className="fas fa-thumbs-up mr-2 "></i> {props.likes}
            </li>
            <li>
              <i class="fas fa-comment mr-2"></i> {props.comment}
            </li>
            <li>
              <i class="far fa-eye mr-2 "></i>
              {props.views}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
