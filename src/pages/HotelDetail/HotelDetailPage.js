import React, { useState, useEffect } from 'react'
import "./HotelDetailPage.css"
import { BsChevronRight } from "react-icons/bs";
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RecomenedHotelList from '../../components/Hotels/RecomenedHotelList';
import MainUtilities from '../../components/Hotels/MainUtilities';
import RoomList from '../../components/Hotels/RoomList';

const HotelDetailPage = () => {
    const param = useParams();
    const [hotelDetail, setHotelDetail] = useState([]);
    const [showRooms, setShowRooms] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        fetch(`https://64b7a00d21b9aa6eb078a794.mockapi.io/hotels`)
            .then((response) => response.json())
            .then((data) => {
                setHotelDetail(data.find(hotel => hotel.hotelId == param.hotelId));
            });
    }, [param.hotelId]);

    // useEffect(() => setHotelMainUtilities(hotelDetail.mainUtiLities))
    // console.log([hotelDetail])
    return (
        <div style={{ backgroundColor: "rgb(245 246 250)" }}>
            <div className="hotel-detail-custom d-flex flex-column justify-content-center align-items-start text-light ps-4"
                style={{
                    marginTop: "85px"
                }}
            >
                <div className="container">
                    <div
                        className="d-flex flex-column justify-content-start"
                        style={{ width: "100%" }}
                    >
                        <h6 className="ps-5" style={{ fontSize: "20px" }}>
                            <p class="underline"></p>Hotel Detail
                        </h6>
                        <h1 className="title-header-pages">{hotelDetail.hotelName}</h1>
                    </div>
                    <div
                        className="d-flex flex-row justify-content-start align-items-center gap-2 pt-4"
                        style={{ width: "100%", fontSize: "20px" }}
                    >
                        <p className="m-0">Home</p>
                        <BsChevronRight size={14} />
                        <p className="m-0">List Hotel</p>
                        <BsChevronRight size={14} />
                        <p className="m-0">{hotelDetail.hotelName}</p>
                    </div>
                </div>
            </div>

            <div className='content-hotel-detail container'>
                <div className='row bg-section-hotel-detail' style={{ padding: "20px 0 20px 0" }}>
                    <div className='col-7'>
                        <div className='hotel-name-detail'>{hotelDetail.hotelName}</div>
                        <div className='hotel-nametag'>{hotelDetail.hotelName}</div>
                        <div className='hotel-address'>
                            <i className="fas fa-map-marker-alt" style={{ color: "#4d67ce" }}></i> {hotelDetail.buildingNumber}, {hotelDetail.street}, {hotelDetail.district}, {hotelDetail.city}, Việt Nam
                        </div>
                    </div>
                    <div className='col-3 text-end'>
                        <div className='rating-hotel-detail row'>
                            <div className='num-rating-hotel-detail col-4'>
                                <div>{hotelDetail.rating}</div>
                            </div>
                            <div className='col-8'>
                                <div className='impress-detail'><i className="fas fa-home"></i> Impressive</div>
                                <p>From every reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='text-end'>Price per night from:</div>
                        <h5 className="room-price-detail text-end">{hotelDetail.price} $</h5>
                        <div className="d-flex justify-content-end">
                            <Button className='btn-booking-room mr-xs btn-hotels' onClick={() => setShowRooms(true)}>
                                Booking room
                            </Button>
                        </div>
                    </div>
                    <Modal
                        size="xl"
                        show={showRooms}
                        onHide={() => setShowRooms(false)}
                        aria-labelledby="modal-title-rooms"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="modal-title-rooms" style={{ fontWeight: "600", fontSize: "25px" }}>
                                {hotelDetail.hotelName} ROOMS
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='container'>
                                <RoomList rooms={hotelDetail.rooms} />
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
                <div className='row'>
                    <div className='col-4 hotel-detail-service'>
                        <div className='hotel-detail-facilities hotel-detail-service-item bg-section-hotel-detail'>
                            <h2 className='title-service-detail'>
                                Main Facilities
                            </h2>
                            <div className='row' style={{ paddingLeft: "20px" }}>
                                <MainUtilities mainUtiLities={hotelDetail.mainUtiLities} />
                            </div>
                        </div>
                        <div className='hotel-detail-description hotel-detail-service-item bg-section-hotel-detail'>
                            <h2 className='title-service-detail'>
                                About Accommodation
                            </h2>
                            <div className='taj description-hotel'>{hotelDetail.description}</div>
                            <div className="d-flex justify-content-end">
                                <Button className='btn-see-more mr-xs btn-hotels' onClick={() => setShowDescription(true)}>
                                    See more
                                </Button>
                                <Modal
                                    size="xl"
                                    show={showDescription}
                                    onHide={() => setShowDescription(false)}
                                    aria-labelledby="modal-title-description"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="modal-title-description" style={{ fontWeight: "600", fontSize: "25px" }}>
                                            {hotelDetail.hotelName} Description
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>
                                            {hotelDetail.description}
                                        </p>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className='col-8 carousel-outside'>
                        <div id="carouselExampleControls" className="carousel slide d-flex" data-bs-ride="carousel">
                            <div className="carousel-inner" style={{ borderRadius: "8px" }}>
                                <div className="carousel-item active">
                                    <img src={hotelDetail.img} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={hotelDetail.img} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={hotelDetail.img} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="recommend-section bg-section-hotel-detail" style={{ padding: "20px 0 20px 0" }}>
                    <h3 className="text-center" style={{fontWeight:"700"}}>Other Hotels You Might Like</h3>
                    <RecomenedHotelList hotelDetail={hotelDetail} />
                    <div className='d-flex justify-content-center'>
                        <div className='btn btn-hotels' style={{ marginTop: "20px", paddingLeft: "20px", paddingRight: "20px" }}>
                            <Link to={`/hotels`}>
                                View Other
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDetailPage
