import React from "react";

const nav2 = () => {
  return (
    <>
      <div
        className="bg-light flex items-center justify-between px-3"
        style={{
          height: "70px",
          width: "80%",
          borderRadius: "50px",
          position: "fixed",
          backgroundColor: "white",
          marginLeft: "20%",
        }}
      >
        <nav className="navbar bg-body-tertiary d-flex">
          <div className="container-fluid">
            <h1>Stories</h1>
          </div>
        </nav>
        <div
          className="flex border-2 p-3 rounded-lg"
          style={{ backgroundColor: "rgb(249,250,250)" }}
        >
          <div class="btn-group">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Akshita Patel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default nav2;
