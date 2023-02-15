import React from "react";

import "./comment.css";

export default function Comment(props) {
  return (
    <div className="comment">
      <div className="comment-head">
        <div className="visitor-datas">
          <div className="visitor-image">
            <img src="" alt="" />
          </div>

          <div className="visitor-data">
            <span>{props.visitorName}</span>
            <small>{props.createAt}</small>
          </div>
        </div>
      </div>

      <div className="comment-body">
        <p>{props.comment}</p>
      </div>
    </div>
  );
}
