import React from 'react'

const RoomItem = ({ hotelName, img, pricePerNight, rating, reviewCount, address, freeCancel, breakfast, parking, pets, fitness }) => {
    return (
        <div className="card mb-3 list-room-item">
            <div className="row g-0 item">
                <div className="col-md-5">
                    <img src={img} className=" card-img rounded-start" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body m-1">
                        <div className="card-title item-header">
                            <h2 className="hotel-name">{hotelName}</h2>
                            <span className="rating">{rating}</span>
                        </div>
                        <h5>{address}</h5>
                        <p className="card-text"><small className="text-body-tertiary">{reviewCount} reviews</small></p>
                        {freeCancel ? <div className="room-options">Free cancellation</div> : <div></div>}
                        {breakfast ? <div className="room-options">Breakfast included</div> : <div></div>}
                        {parking ? <div className="room-options">Allows Pets</div> : <div></div>}
                        {pets ? <div className="room-options">Onsite parking</div> : <div></div>}
                        {fitness ? <div className="room-options">Fitness center</div> : <div></div>}
                        <div className="room-price pricePerNight">{pricePerNight}$ <span style={{ fontSize: 20, color: 'black' }}>per night</span></div>
                        <div className='item-card-footer'>
                            <p className="card-text"><small className="text-body-tertiary">Last updated 3 minusago</small></p>
                            <span className="text-end">
                                <a href="#" className="btn btn-add-to-card">See our rooms</a>
                            </span>
                        </div>


                    </div>
                </div>
            </div>
        </div >)
}

export default RoomItem