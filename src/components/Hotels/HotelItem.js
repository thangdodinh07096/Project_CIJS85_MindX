// import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const HotelItem = ({ index, hotelName, img, price, rating, city, district, street, buildingNumber, mainUtiLities }) => {

    return (
        <div className="card mb-3 list-room-item">
            <div className="row g-0 item">
                <div className="col-md-5">
                    <img src={img} className=" card-img rounded-start" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body m-1">
                        <div className="card-title item-header">
                            <Link to={`/hotels/${index}`}>
                                <h2 className="hotel-name">{hotelName}</h2>
                            </Link>
                            <span className="rating">{rating}</span>
                        </div>
                        <h5 className='address'><i class="fas fa-map-marker-alt"></i> {buildingNumber}, {street}, {district}, {city}</h5>
                        <div className='row pt-3'>
                            <div>Service</div>
                            <div className='col-lg-8 col-md-10 col-sm-12 row'>
                                {mainUtiLities.map((mainUtiLitiesItem) => {
                                    return (
                                        <div class="room-options col-6"> {mainUtiLitiesItem.title}</div>
                                    );
                                })}
                            </div>
                            <div className="text-end">
                                <h5>Price: <span className="room-price">{price} $</span></h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div >)
}

export default HotelItem