import React from "react";

const center2 = () => {
  return (
    <div>
      <div className="card" style={{width: "18rem" ,backgroundColor: "aliceblue",
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-20%, -50%)"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default center2;
