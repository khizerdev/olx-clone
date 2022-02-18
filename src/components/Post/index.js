import React from "react";

function Post(props) {



  return (
    <div className="col mb-4" onClick={() => props.onClick("Detail")} >
      <div className="card">
        <div className="card-img-top card-img text-center">
          <img class="img-fluid" alt="" src={props.image} />
        </div>
        <div className="card-body">
          <h5 className="card-title">Rs {props.price}</h5>
          <p className="card-text text-secondary">{props.title}</p>
          <span className="card-text text-secondary bottom-card">
            <small className="text-muted">{props.created_at}</small>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
