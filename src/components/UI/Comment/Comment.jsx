import React from "react";

import "./comment.css";

export default function Comment({comment}) {
  return (
    <div className="comment">
      <div className="comment-head">
        <div className="visitor-datas">
          <div className="visitor-image">
            <img src="" alt="" />
          </div>

          <div className="visitor-data">
            <span>{comment.visitorName}</span>
            <small>{comment.createAt}</small>
          </div>
        </div>
      </div>

      <div className="comment-body">
        <p>{comment.comment}</p>
      </div>
    </div>
  );
}
