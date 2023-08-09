import React, { useContext } from "react";
import "./HotelBookingPage.css";
import MyApp from "../../contexts/MyApp";

const HotelBookingPage = () => {
  const { currentUser } = useContext(MyApp);
  return (
    <>
      <section
        style={{
          width: "100%",
          height: "auto",
          paddingTop: "85px",
        }}
      >
        <div className="container booking">
          <div style={{ margin: "48px 0 16px 0" }}>
            <h1
              aria-level="1"
              dir="auto"
              role="heading"
              style={{ fontSize: "24px", color: "rgb(3, 18, 26)" }}
            >
              Hotel Booking
            </h1>
          </div>
          <div style={{ paddingBottom: "32px" }}>
            <h3 style={{ fontSize: "16px", color: "rgb(104, 113, 118)" }}>
              Make sure all the details on this page are correct before
              proceeding to payment.
            </h3>
          </div>
          <div className="row container">
            <div className="col-12 col-lg-8 p-0" style={{ height: "100%" }}>
              <div
                className="user row rounded border mb-4"
                style={{ height: "76px" }}
              >
                <div className="col-12 d-flex align-items-center justify-content-start gap-2">
                  <img
                    className="rounded-circle"
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/10e771009e605099270565bf161c5ac4.svg"
                    alt=""
                    style={{ background: "rgb(1, 148, 243)" }}
                  />
                  <div>
                    <h3>Logged in as {currentUser.name}</h3>
                    <p>{currentUser.name} (Google)</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="information mb-3">Your Information</div>
              </div>
              <div
                className="rounded border p-3 mb-4"
                style={{
                  boxShadow: "rgba(3, 18, 26, 0.2) 0px 1px 2px",
                }}
              >
                <div className="form row">
                  <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Contact's name</label>
                    <input type="text" className="form-control rounded" />
                    <div className="form-text">
                      <span>
                        As in Passport/Official ID Card (without title/special
                        characters)
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">
                      Reachable mobile number
                    </label>
                    <input type="text" className="form-control rounded" />
                    <div className="form-text">
                      <span>Your number</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">
                      Contact's email address
                    </label>
                    <input type="email" className="form-control rounded" />
                    <div className="form-text">
                      <span>e.g.: email@example.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <span className="details">Price details</span>
              </div>
              <div
                className="rounded border mb-4"
                style={{ boxShadow: "rgba(3, 18, 26, 0.2) 0px 1px 2px" }}
              >
                <div className="total row p-3 mb-3">
                  <div className="col-8 m-0">
                    <span>Total</span>
                  </div>
                  <div className="col-4 text-end">
                    <span>498.750 VND</span>
                  </div>
                </div>
                <div className="text d-flex gap-2 mb-3 border-bottom">
                  <img
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2022/09/13/1663036323265-71c4f62650fd2a96cda8cd045e2ab935.webp?tr=h-24,q-75"
                    alt=""
                  />
                  <span className="">
                    Taxes and fees, are recovery charges which Home Stays pays
                    to the property. If you have any questions regarding tax and
                    invoice, please refer to Home Stays Terms and Condition
                  </span>
                </div>
                <div className="total-body">
                  <div className="row p-3">
                    <div className="col-8 m-0">
                      <span>(1x) Superior Double Room (1 Night)</span>
                    </div>
                    <div className="col-4 text-end">
                      <span>439.815 VND</span>
                    </div>
                  </div>
                  <div className="row p-3">
                    <div className="col-8 m-0">
                      <span>Taxes and fees</span>
                    </div>
                    <div className="col-4 text-end">
                      <span>58.935 VND</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-sm-8 pb-sm-0 pb-4">
                  <span
                    className="text-start"
                    style={{
                      fontSize: "14px",
                      color: "rgb(3, 18, 26)",
                      lineHeight: "20px",
                      fontWeight: "500",
                    }}
                  >
                    By clicking this button, you acknowledge that you have read
                    and agreed to the Terms & Conditions and Privacy Policy of
                    Home Stays
                  </span>
                </div>
                <div className="col-12 col-sm-4 text-center text-sm-end">
                  <button
                    className="button-review text-center rounded"
                    type="submit"
                  >
                    Continue to Review
                  </button>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-block col-4">
              <div
                className="rounded border ms-4 p-3"
                style={{
                  height: "initial",
                  boxShadow: "rgba(3, 18, 26, 0.2) 0px 1px 2px",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center gap-2"
                  style={{ padding: "16px", borderBottom: "1px solid black" }}
                >
                  <img
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6aa2fd01a9460e1a71bb0efb713f0212.svg"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <h3
                    style={{
                      color: "color: rgb(3, 18, 26)",
                      fontSize: "16px",
                      margin: 0,
                    }}
                  >
                    Hanoi De Maison Grand Hotel
                  </h3>
                </div>
                <div style={{ margin: "16px" }}>
                  <div className="mb-3">
                    <h3
                      style={{
                        color: "color: rgb(3, 18, 26)",
                        fontSize: "16px",
                        margin: 0,
                      }}
                    >
                      (1x) Superior Double Room
                    </h3>
                  </div>
                  <div className="d-flex row mb-1">
                    <div
                      className="col-5"
                      style={{ color: "rgb(104, 113, 118)", fontSize: "14px" }}
                    >
                      Guests per room
                    </div>
                    <div
                      className="col-5"
                      style={{ color: "rgb(3, 18, 26)", fontSize: "14px" }}
                    >
                      2 Guests
                    </div>
                  </div>
                  <div className="d-flex row mb-1">
                    <div
                      className="col-5"
                      style={{ color: "rgb(104, 113, 118)", fontSize: "14px" }}
                    >
                      Bed Type
                    </div>
                    <div
                      className="col-5"
                      style={{ color: "rgb(3, 18, 26)", fontSize: "14px" }}
                    >
                      1 double bed
                    </div>
                  </div>
                  <div className="row" style={{ margin: "12px 0" }}>
                    <div className="col-5 p-0">
                      <img
                        className="rounded"
                        src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10030146-7b73df32d42f8afd54bc6a98fadaaa50.jpeg?_src=imagekit&tr=h-80,q-40,w-80"
                        alt=""
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    <div className="col-7">
                      <div
                        className="d-flex align-items-center justify-content-start gap-2 mb-2"
                        style={{ color: "rgb(104, 113, 118)" }}
                      >
                        <img
                          src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/812d6f19a9d1ceb30728acbce11f709a.svg"
                          alt=""
                          style={{ width: "16px", height: " 16px" }}
                        />
                        <h3 className="m-0" style={{ fontSize: "14px" }}>
                          Without Breakfast
                        </h3>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-start gap-2 mb-2"
                        style={{ color: "rgb(0, 135, 90)" }}
                      >
                        <img
                          src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/01cf1090e2f434a7d63f1cbca912ef44.svg"
                          alt=""
                          style={{ width: "16px", height: " 16px" }}
                        />
                        <h3 className="m-0" style={{ fontSize: "14px" }}>
                          Free WiFi
                        </h3>
                      </div>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div style={{ margin: "12px 0" }}>
                    <div className="d-flex align-items-center justify-content-start gap-2 mb-2">
                      <img
                        src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e262dbf2650e163a4d9b31627c14987e.svg"
                        alt=""
                        style={{ width: "16px", height: " 16px" }}
                      />
                      <h3
                        className="m-0"
                        style={{
                          color: "rgb(104, 113, 118)",
                          fontSize: "14px",
                        }}
                      >
                        Free Cancellation
                      </h3>
                    </div>
                    <div className="d-flex align-items-center justify-content-start gap-2 mb-2">
                      <img
                        src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/2/206164fab54a16c46f0352ca0e22cb45.svg"
                        alt=""
                        style={{ width: "16px", height: " 16px" }}
                      />
                      <h3
                        className="m-0"
                        style={{
                          color: "rgb(104, 113, 118)",
                          fontSize: "14px",
                        }}
                      >
                        Reschedulable
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelBookingPage;
