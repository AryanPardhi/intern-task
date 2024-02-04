import React from "react";

const navBar = () => {
  return (
    <>
      <div
        className="bg-light flex items-center justify-between px-3"
        style={{ height: "70px", width: "80%" , borderRadius:"50px" ,position:"fixed", backgroundColor:'white', marginLeft:"20%"}}
      >
        <nav className="navbar bg-body-tertiary d-flex">
          <div className="container-fluid">
            <form className="" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  backgroundColor: "rgb(249,250,250)",
                  padding: "10px 20px",
                  width: "350px",
                  borderRadius: "50px",
                }}
              />
            </form>
          </div>
        </nav>
        <div className="flex border-2 p-3 rounded-lg" style={{backgroundColor:"rgb(249,250,250)"}}>
          <form className="" role="">
            <input
              className="form-control me-2"
              type="date"
              placeholder=""
              aria-label=""
              style={{backgroundColor:"transparent"}}
            />
          </form>
          <p className="px-2">OR</p>
          <form className="" role="">
            <input
              className="form-control me-2"
              type="date"
              placeholder=""
              aria-label=""
              style={{backgroundColor:"transparent"}}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default navBar;
