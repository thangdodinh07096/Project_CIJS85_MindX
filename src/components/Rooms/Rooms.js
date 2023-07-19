import React from 'react'

const Rooms = () => {
    return (
        <div id="find-rooms">
            <h2 className="my-title">
                <span style={{ fontStyle: 'italic', fontWeight: 500 }}>Find</span> Rooms
            </h2>
            <div className="container">
                <div className="row">
                    <div id="filter" className="col-4">
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
                    <div id="list-room" className="col-8">
                    </div>
                    <ul className="listPage">
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Rooms