import React, { useEffect, useState } from "react"
import "./HotelListPage.css"
import HotelItem from "../../components/Hotels/HotelItem";

const HotelListPage = () => {

    const [hotelList, setHotelList] = useState([]);

    useEffect(() => {
        fetch(`https://64b7a00d21b9aa6eb078a794.mockapi.io/hotels`)
            .then((response) => response.json())
            .then((data) => {
                setHotelList(data);
            });

    }, [])

    // console.log(hotelList)

    return (
        <>
            <div id="section-booking" style={{ marginTop: 85 }}>
                <div className="container align-items=center">
                    <div className="section-booking-header text-center">
                        <h1>
                            SEARCH YOUR HOTEL
                        </h1>
                    </div>
                    <form className="row g-3">
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <input type="text" className="form-control" id="city" name="city" placeholder="Where do you want to stay?" />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12">
                            <input type="number" className="form-control" id="guests" placeholder="Guests" />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12">
                            <button type="submit" className="btn btn-hotels">SEARCH</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="find-rooms">
                <div className="container">

                    <div className="row">
                        <div id="filter" className="col-3">
                            <div class="filter-title">Sort results by</div>
                            <div className="list-group">
                                <div className="form-check">
                                    <input className="form-check-input  filter-radio" type="radio" onclick="viewAllRooms()" name="flexRadioDefault" id="viewAll" defaultChecked />
                                    <label className="form-check-label" htmlFor="viewAll">
                                        Rating
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input  filter-radio" type="radio" onclick="filterHasFreeCancellation()" name="flexRadioDefault" id="hasFreeCancellation" />
                                    <label className="form-check-label" htmlFor="hasFreeCancellation">
                                        Lowest price
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input  filter-radio" type="radio" onclick="filterIncludesBreakfast()" name="flexRadioDefault" id="includesBreakfast" />
                                    <label className="form-check-label" htmlFor="includesBreakfast">
                                        Highest price
                                    </label>
                                </div>
                            </div>
                            <hr />
                            <div class="filter-title">Price range per night</div>
                            <div className="list-group">
                                <input type="range" id="price-filter" min="0" max="100" />
                                <div>Price: </div>
                            </div>
                            <hr />
                            <div class="filter-title">Facilities</div>
                            <div className="list-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" onclick="viewAllRooms()" name="flexRadioDefault" id="viewAll" />
                                    <label className="form-check-label" htmlFor="viewAll">
                                        Air-Conditional
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" onclick="filterHasFreeCancellation()" name="flexRadioDefault" id="hasFreeCancellation" />
                                    <label className="form-check-label" htmlFor="hasFreeCancellation">
                                        Resturant
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" onclick="filterIncludesBreakfast()" name="flexRadioDefault" id="includesBreakfast" />
                                    <label className="form-check-label" htmlFor="includesBreakfast">
                                        Swimming Pool
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" onclick="filterIncludesBreakfast()" name="flexRadioDefault" id="includesBreakfast" />
                                    <label className="form-check-label" htmlFor="includesBreakfast">
                                        24h Reception
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" onclick="filterIncludesBreakfast()" name="flexRadioDefault" id="includesBreakfast" />
                                    <label className="form-check-label" htmlFor="includesBreakfast">
                                        Parking
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" onclick="filterIncludesBreakfast()" name="flexRadioDefault" id="includesBreakfast" />
                                    <label className="form-check-label" htmlFor="includesBreakfast">
                                        Elevator
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" onclick="filterIncludesBreakfast()" name="flexRadioDefault" id="includesBreakfast" />
                                    <label className="form-check-label" htmlFor="includesBreakfast">
                                        Wifi
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div id="list-room" className="col-9">
                            {hotelList.map((hotelItem, index) => {
                                return (
                                    <HotelItem
                                        id={hotelItem.hotelId}
                                        hotelName={hotelItem.hotelName}
                                        img={hotelItem.img}
                                        rating={hotelItem.rating}
                                        price={hotelItem.price}
                                        city={hotelItem.city}
                                        district={hotelItem.district}
                                        street={hotelItem.street}
                                        buildingNumber={hotelItem.buildingNumber}
                                        mainUtiLities={hotelItem.mainUtiLities}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelListPage