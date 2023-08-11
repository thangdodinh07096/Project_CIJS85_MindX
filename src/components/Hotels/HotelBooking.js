import React, { useContext, useState, useEffect } from "react";
import MyApp from "../../contexts/MyApp";
import RoomContext from "../../contexts/RoomContext";
import { useNavigate } from "react-router-dom";

const HotelBooking = (props) => {
    const { hotelDetail } = props;

    const { currentUser } = useContext(MyApp);
    const [userName, setUserName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [roomQuantity, setRoomQuantity] = useState(null);

    const navigate = useNavigate();

    const currentRoom = JSON.parse(localStorage.getItem('currentRoom'));

    const backToListRoom = () => {
        localStorage.removeItem("currentRoom");
        navigate(`/hotels/${hotelDetail.hotelId}`);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "userName") {
            setUserName(value);
        }
        if (id === "phoneNumber") {
            setPhoneNumber(value);
        }
        if (id === "userEmail") {
            setUserEmail(value);
        }
        if (id === "roomQuantity") {
            setRoomQuantity(value);
        }
    }

    const handleSubmit = async () => {
        const rawResponse = await fetch(
            "https://64b7a00d21b9aa6eb078a794.mockapi.io/bills",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userName: userName,
                    userEmail: userEmail,
                    phoneNumber: phoneNumber,
                    hotelId: hotelDetail.hotelId,
                    roomId: currentRoom.roomId,
                    roomQuantity: roomQuantity,
                    totalPrice: currentRoom.price * roomQuantity
                }),
            }
        );
        const context = await rawResponse.json();
        localStorage.removeItem("currentRoom");
        navigate(`/hotels`);
    };

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
                    <div
                        className="row container"
                        style={{
                            margin: "0",
                        }}
                    >
                        <div className="col-12 col-lg-8 p-0" style={{ height: "100%" }}>
                            <div
                                className="user row rounded border mb-5"
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
                                className="rounded border p-3 mb-5"
                                style={{
                                    boxShadow: "rgba(3, 18, 26, 0.2) 0px 1px 2px",
                                }}
                            >
                                <div className="form row">
                                    <div className="col-12 col-md-6 mb-3">
                                        <label className="form-label">Contact's name</label>
                                        <input id="userName"
                                            type="text"
                                            className="form-control rounded"
                                            onChange={(e) => handleInputChange(e)}
                                            value={userName}
                                        />
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
                                        <input id="phoneNumber"
                                            type="text"
                                            className="form-control rounded"
                                            onChange={(e) => handleInputChange(e)}
                                            value={phoneNumber}
                                        />
                                        <div className="form-text">
                                            <span>Your number</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <label className="form-label">
                                            Contact's email address
                                        </label>
                                        <input id="userEmail"
                                            type="email"
                                            className="form-control rounded"
                                            onChange={(e) => handleInputChange(e)}
                                            value={userEmail}
                                        />
                                        <div className="form-text">
                                            <span>e.g.: email@example.com</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <label className="form-label">
                                            How many rooms do you want to book?
                                        </label>
                                        <input id="roomQuantity"
                                            type="number"
                                            className="form-control rounded"
                                            onChange={(e) => handleInputChange(e)}
                                            value={roomQuantity}
                                        />
                                        <div className="form-text">
                                            <span>e.g.: 2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <span className="details">Price details</span>
                            </div>
                            <div
                                className="rounded border mb-5"
                                style={{ boxShadow: "rgba(3, 18, 26, 0.2) 0px 1px 2px" }}
                            >
                                <div className="total row p-3 mb-3">
                                    <div className="col-8 m-0">
                                        <span>Total</span>
                                    </div>
                                    <div className="col-4 text-end">
                                        <span style={{ color: "red" }}>US$ {(currentRoom.price * roomQuantity).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="text d-flex gap-2 mb-3 border-bottom">
                                    <img
                                        src="https://ik.imagekit.io/tvlk/image/imageResource/2022/09/13/1663036323265-71c4f62650fd2a96cda8cd045e2ab935.webp?tr=h-24,q-75"
                                        alt=""
                                    />
                                    <span style={{ fontSize: "14px" }}>
                                        Taxes and fees, are recovery charges which Home Stays pays
                                        to the property. If you have any questions regarding tax and
                                        invoice, please refer to Home Stays Terms and Condition
                                    </span>
                                </div>
                                <div className="total-body">
                                    <div className="row p-3">
                                        <div className="col-8 m-0">
                                            <span>({roomQuantity}x) {currentRoom.roomName} (1 Night)</span>
                                        </div>
                                        <div className="col-4 text-end" style={{ color: "red" }}>
                                            <span>US$ {(currentRoom.price * roomQuantity).toFixed(2)}</span>
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
                                        onClick={() => handleSubmit()}
                                    >
                                        Book This Room(s)
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
                                    className="d-flex align-items-center  gap-2"
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
                                        {hotelDetail.hotelName}
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
                                            ({roomQuantity}x) {currentRoom.roomName}
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
                                            {currentRoom.numOfCustomer} Guests
                                        </div>
                                    </div>
                                    <div className="d-flex row mb-1">
                                        <div
                                            className="col-5"
                                            style={{ color: "rgb(104, 113, 118)", fontSize: "14px" }}
                                        >
                                            Beds per room
                                        </div>
                                        <div
                                            className="col-5"
                                            style={{ color: "rgb(3, 18, 26)", fontSize: "14px" }}
                                        >
                                            {currentRoom.numOfBed}  bed
                                        </div>
                                    </div>
                                    <div className="row" style={{ margin: "12px 0" }}>
                                        <div className="col-5 p-0">
                                            <img
                                                className="rounded"
                                                src={currentRoom.img}
                                                alt=""
                                                style={{ width: "80px", height: "80px" }}
                                            />
                                        </div>
                                        <div className="col-7">

                                            {
                                                currentRoom.service.map((serviceItem) => {
                                                    return (
                                                        <div
                                                            className="d-flex align-items-center justify-content-start gap-2 mb-2"
                                                            style={{ color: "rgb(104, 113, 118)" }}
                                                        >
                                                            <div className="col-12" style={{ color: "rgb(0, 135, 90)", fontSize: "13.5px" }}>
                                                                <i class="fa fa-circle" style={{ fontSize: "5px" }}></i> {serviceItem}
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
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

                            <div className="row pt-3">
                                <div className="col-12 col-sm-4 text-center text-sm-end">
                                </div>
                                <div className="col-12 col-sm-8 text-center text-sm-end">
                                    <button
                                        className="btn btn-danger text-center rounded"
                                        type="submit"
                                        onClick={() => backToListRoom()}
                                    >
                                        Back to List Room
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HotelBooking