import { Link } from 'react-router-dom';
const HotelItem = ({ id, hotelName, img, price, rating, city, district, street, buildingNumber, mainUtiLities }) => {

    return (
        <div className="card mb-3 list-room-item">
            <div className="row g-0 item">
                <div className="col-md-5">
                    <img src={img} className=" card-img rounded-start" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body m-1">
                        <div className="card-title item-header">
                            <Link to={`/hotels/${id}`}>
                                <h2 className="hotel-name">{hotelName}</h2>
                            </Link>
                            <span className="rating">{rating}</span>
                        </div>
                        <h5 className='address' style={{ fontWeight: "550" }}>
                            <i class="fas fa-map-marker-alt" style={{ color: "#4d67ce" }}></i> {buildingNumber}, {street}, {district}, {city}
                        </h5>
                        <div className='row pt-3'>
                            <h4 style={{ fontWeight: "650", paddingTop: "10px" }}>Hotel Services</h4>
                            <div className='col-xl-9 col-lg-10 col-md-12 col-sm-10 row'>
                                {
                                    mainUtiLities.map((mainUtiLitiesItem) => {
                                        return (
                                            <div class="room-options col-6">
                                                <div className='row'>
                                                    <img src={mainUtiLitiesItem.mainUtiLitiesImg} className="col-4" alt="..." />
                                                    <div className="col-8" style={{ fontWeight: "550", fontSize: "15px", lineHeight: "30px" }}>
                                                        {mainUtiLitiesItem.title}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                    )
                                }
                            </div>
                            <div className="text-end">
                                <h3 style={{ fontWeight: "550" }}>Price: <span className="room-price">{price} $</span></h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div >)
}

export default HotelItem