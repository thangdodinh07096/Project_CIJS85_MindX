import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'


const RecomenedHotelList = (props) => {
    const { hotelDetail } = props;
    const [hotelRecomenedList, setHotelRecomenedList] = useState([]);

    useEffect(() => {
        fetch(`https://64b7a00d21b9aa6eb078a794.mockapi.io/hotels`)
            .then((response) => response.json())
            .then((data) => {
                setHotelRecomenedList(data.filter(hotel => hotel.city == hotelDetail.city && hotel.hotelId != hotelDetail.hotelId));
            });

    }, [hotelDetail]);

    return (
        <div className='row' style={{ margin: "0", paddingTop: "15px" }}>
            {hotelRecomenedList.map((hotelItemRecomend, id) => {
                return (
                    <div className="col-3">
                        <div className="card h-100">
                            <img src={hotelItemRecomend.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="card-title item-header">
                                    <Link to={`/hotels/${hotelItemRecomend.hotelId}`}>
                                        <h2 className="hotel-name" style={{ fontSize: "22px", lineHeight: "25px" }}>{hotelItemRecomend.hotelName}</h2>
                                    </Link>
                                </div>
                                <p>{hotelItemRecomend.hotelName}</p>
                                <div className='row'>
                                    <div className='col-7'>
                                        <div className='hotel-address' style={{ fontSize: "15px" }}>
                                            <i className="fas fa-map-marker-alt"
                                                style={{ color: "#4d67ce" }}>
                                            </i> {hotelItemRecomend.district}
                                        </div>
                                        <div style={{ fontSize: "20px", fontWeight: "600", color: "#4d67ce", paddingLeft: "18px" }}>
                                            {hotelItemRecomend.rating}/10
                                        </div>
                                    </div>
                                    <div className="col-5 room-price pricePerNight text-end" style={{ fontSize: "25px", padding: "0 10px 0 0" }}>
                                        {hotelItemRecomend.price} $
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default RecomenedHotelList