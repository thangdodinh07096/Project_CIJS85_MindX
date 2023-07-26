import React, { useEffect, useState } from 'react'
import RoomItem from './RoomItem';

const RoomsPage = () => {
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        fetch(`https://64b7a00d21b9aa6eb078a794.mockapi.io/roomDetail`)
            .then((response) => response.json())
            .then((data) => {
                console.log("data:", data);
                setRoomList(data);
            });

    }, [])

    return (
        <div>
            <div>
                <div id="section-booking" style={{ marginTop: 85 }}>
                    <div className="container align-items=center">
                        <div className="section-booking-header text-center">
                            <h1>
                                HOMESTAYS'S ROOMS
                            </h1>
                        </div>
                        <form className="row g-3">
                            <div className="col-lg-4 col-md-5 col-sm-12">
                                <input type="date" className="form-control" id="day-in" name="day-in" placeholder="Check In" />
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12">
                                <input type="date" className="form-control" id="day-out" name="day-out" placeholder="Check out" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12">
                                <input type="number" className="form-control" id="guests" placeholder="Guests" />
                            </div>
                            <div className="col-lg-2 col-md-12 col-sm-12">
                                <button type="submit" className="btn btn-add-to-card">BOOK NOW</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="find-rooms">
                    <div className="container">
                        <div className="row">
                            <div id="filter" className="col-3">
                                <h4 className="filter-title">Filter By: </h4>
                                <hr />
                                <div className="list-group">
                                    <div className="form-check">
                                        <input className="form-check-input  filter-radio" type="radio" onclick="viewAllRooms()" name="flexRadioDefault" id="viewAll" defaultChecked />
                                        <label className="form-check-label" htmlFor="viewAll">
                                            View All
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input  filter-radio" type="radio" onclick="filterHasFreeCancellation()" name="flexRadioDefault" id="hasFreeCancellation" />
                                        <label className="form-check-label" htmlFor="hasFreeCancellation">
                                            Free Cancellation
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input  filter-radio" type="radio" onclick="filterIncludesBreakfast()" name="flexRadioDefault" id="includesBreakfast" />
                                        <label className="form-check-label" htmlFor="includesBreakfast">
                                            Includes Breakfast
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input  filter-radio" type="radio" onclick="filterhasParking()" name="flexRadioDefault" id="hasParking" />
                                        <label className="form-check-label" htmlFor="hasParking">
                                            Parking
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input  filter-radio" type="radio" onclick="filterAllowsPets()" name="flexRadioDefault" id="allowsPets" />
                                        <label className="form-check-label" htmlFor="allowsPets">
                                            Allow Pets
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input  filter-radio" type="radio" onclick="filterHasFitnessCenter()" name="flexRadioDefault" id="hasFitnessCenter" />
                                        <label className="form-check-label" htmlFor="hasFitnessCenter">
                                            Fitness Center
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div id="list-room" className="col-9">
                                {roomList.map((roomItem) => {
                                    return (
                                        <RoomItem
                                            // index={roomItem.id}
                                            // onClick={() => handleAddToCart(roomItem)}
                                            hotelName={roomItem.hotelName}
                                            address={roomItem.address}
                                            img={roomItem.img}
                                            rating={roomItem.rating}
                                            pricePerNight={roomItem.pricePerNight}
                                            reviewCount={roomItem.reviewCount}
                                            freeCancel={roomItem.freeCancel}
                                            breakfast={roomItem.breakfast}
                                            parking={roomItem.parking}
                                            pets={roomItem.pets}
                                            fitness={roomItem.fitness}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RoomsPage