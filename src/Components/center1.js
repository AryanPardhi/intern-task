import React from "react";
import { Link, useRouteData } from '@remix-run/react';
const center1 = () => {
  return (
    <div
      className="bg-[rgb(249,250,250)] p-10"
      style={{ width: "93.3%", marginLeft: "24%", marginTop: "70px" }}
    >
      <div className="section-one">
        <h3 className="text-[25px] font-bold">Hello Admin,</h3>
        <p className="text-[rgb(76 79 79)]">
          This is what we got you for today.
        </p>
        <div className="flex items-center justify-strech gap-10">
          <div className="flex p-7 gap-5 mt-7 items-center justify-start bg-[#fff] rounded-lg">
            <div
              style={{ height: "60px", width: "60px" }}
              className="rounded-full bg-[rgb(232,233,255)]"
            ></div>
            <div className="">
              <h1 className="pb-3">Categories</h1>
              <h4>2036 New Update</h4>
            </div>
          </div>
          <div className="flex p-7 gap-5 mt-7 items-center justify-start bg-[#fff] rounded-lg">
            <div
              style={{ height: "60px", width: "60px" }}
              className="rounded-full bg-[rgb(232,233,255)]"
            ></div>
            <div className="">
              <h1 className="pb-3">Stories</h1>
              <h4>1235 New Update</h4>
            </div>
          </div>
          <div className="flex p-7 gap-5 mt-7 items-center justify-start bg-[#fff] rounded-lg">
            <div
              style={{ height: "60px", width: "60px" }}
              className="rounded-full bg-[rgb(232,233,255)]"
            ></div>
            <div className="">
              <h1 className="pb-3">Articles</h1>
              <h4>5252 New Update</h4>
            </div>
          </div>
          <div className="flex p-7 gap-5 mt-7 items-center justify-start bg-[#fff] rounded-lg">
            <div
              style={{ height: "60px", width: "60px" }}
              className="rounded-full bg-[rgb(232,233,255)]"
            ></div>
            <div className="">
              <h1 className="pb-3">Advertisement</h1>
              <h4>6252 New Update</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="section-two mt-5 overflow-hidden">
        <h3 className="text-[25px] font-semibold">Top Articles</h3>
        <div className="container flex items-center justify-strech gap-10 overflow-x-auto">
          <div
            style={{ height: "500px", width: "400px" }}
            className=" card p-4 mt-7 bg-[#fff] rounded-lg"
          >
            <div
              style={{ height: "200px", overflow: "hidden" }}
              className="rounded-lg bg-[rgb(232,233,255)]"
            ></div>
            <div className="mt-2">
              <div className="flex">
                <p className="text-[rgb(145,88,254)] font-semibold">
                  Bussiness
                </p>
                <p className="text-[rgb(76 79 79)] font-semibold">
                  . 20 Sep 2022
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h1 className="text-[20px]">7 Rules of Effective Branding</h1>
                <button className="bg-[rgb(232,233,255)] text-[rgb(145,88,254)] px-3 py-2 align-middle rounded-md">
                  Created
                </button>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Why Branding matters for your business
              </p>
              <div className="flex items-start justify-start gap-4 mt-4">
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-2 align-middle rounded-md">
                  Branding
                </button>
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-2 align-middle rounded-md">
                  Communication
                </button>
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-2 align-middle rounded-md">
                  Branding
                </button>
              </div>
              <div className="flex items-start justify-start gap-4 mt-4">
                <button
                  style={{ width: "300px" }}
                  className="bg-[rgb(232,233,255)] text-[rgb(145,88,254)] px-7 py-3 align-middle rounded-md"
                >
                  View
                </button>
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-3 align-middle rounded-md">
                  ***
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ height: "500px", width: "400px" }}
            className=" card p-4 mt-7 bg-[#fff] rounded-lg"
          >
            <div
              style={{ height: "200px", overflow: "hidden" }}
              className="rounded-lg bg-[rgb(232,233,255)]"
            ></div>
            <div className="mt-2">
              <div className="flex">
                <p className="text-[rgb(145,88,254)] font-semibold">
                  Bussiness
                </p>
                <p className="text-[rgb(76 79 79)] font-semibold">
                  . 20 Sep 2022
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h1 className="text-[20px]">7 Rules of Effective Branding</h1>
                <button className="bg-[rgb(232,233,255)] text-[rgb(145,88,254)] px-3 py-2 align-middle rounded-md">
                  Created
                </button>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Why Branding matters for your business
              </p>
              <div className="flex items-start justify-start gap-4 mt-4">
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-2 align-middle rounded-md">
                  Branding
                </button>
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-2 align-middle rounded-md">
                  Communication
                </button>
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-2 align-middle rounded-md">
                  Branding
                </button>
              </div>
              <div className="flex items-start justify-start gap-4 mt-4">
                <button
                  style={{ width: "300px" }}
                  className="bg-[rgb(232,233,255)] text-[rgb(145,88,254)] px-7 py-3 align-middle rounded-md"
                >
                  View
                </button>
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-3 align-middle rounded-md">
                  ***
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-three mt-5">
        <h3 className="text-[25px] font-semibold">Top Stories</h3>
        <div className="container flex items-center justify-strech gap-10 ">
          <div
            style={{ height: "500px", width: "400px" }}
            className=" class p-4 mt-7 bg-[#fff] rounded-lg"
          >
            <div
              style={{ height: "200px", overflow: "hidden" }}
              className="rounded-lg bg-[rgb(232,233,255)]"
            ></div>
            <div className="mt-2">
              <div className="flex">
                <p className="text-[rgb(145,88,254)] font-semibold">
                  Bussiness
                </p>
                <p className="text-[rgb(76 79 79)] font-semibold">
                  . 20 Sep 2022
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h1 className="text-[20px]">7 Rules of Effective Branding</h1>
                <button className="bg-[rgb(232,233,255)] text-[rgb(145,88,254)] px-3 py-2 align-middle rounded-md">
                  Created
                </button>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Why Branding matters for your business
              </p>
              <div className="flex items-start justify-start gap-4 mt-4">
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-2 align-middle rounded-md">
                  Branding
                </button>
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-2 align-middle rounded-md">
                  Communication
                </button>
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-2 align-middle rounded-md">
                  Branding
                </button>
              </div>
              <div className="flex items-start justify-start gap-4 mt-4">
                <button
                  style={{ width: "300px" }}
                  className="bg-[rgb(232,233,255)] text-[rgb(145,88,254)] px-7 py-3 align-middle rounded-md"
                >
                  <Link to="/stories">View</Link>
                </button>
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-3 align-middle rounded-md">
                  ***
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ height: "500px", width: "400px" }}
            className=" card p-4 mt-7 bg-[#fff] rounded-lg"
          >
            <div
              style={{ height: "200px", overflow: "hidden" }}
              className="rounded-lg bg-[rgb(232,233,255)]"
            ></div>
            <div className="mt-2">
              <div className="flex">
                <p className="text-[rgb(145,88,254)] font-semibold">
                  Bussiness
                </p>
                <p className="text-[rgb(76 79 79)] font-semibold">
                  . 20 Sep 2022
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h1 className="text-[20px]">7 Rules of Effective Branding</h1>
                <button className="bg-[rgb(232,233,255)] text-[rgb(145,88,254)] px-3 py-2 align-middle rounded-md">
                  Created
                </button>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Why Branding matters for your business
              </p>
              <div className="flex items-start justify-start gap-4 mt-4">
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-2 align-middle rounded-md">
                  Branding
                </button>
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-2 align-middle rounded-md">
                  Communication
                </button>
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-2 align-middle rounded-md">
                  Branding
                </button>
              </div>
              <div className="flex items-start justify-start gap-4 mt-4">
                <button
                  style={{ width: "300px" }}
                  className="bg-[rgb(232,233,255)] text-[rgb(145,88,254)] px-7 py-3 align-middle rounded-md"
                >
                  <Link to="/stories">View</Link>
                </button>
                <button className="bg-[rgb(205,201,201)] text-[rgb(96,94,98)] px-3 py-3 align-middle rounded-md">
                  ***
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default center1;
