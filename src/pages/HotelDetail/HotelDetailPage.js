import React, { useState, useEffect } from 'react'
import "./HotelDetailPage.css"
import { BsChevronRight } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const HotelDetailPage = () => {
    const param = useParams();
    const [hotelDetail, setHotelDetail] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch(`https://64b7a00d21b9aa6eb078a794.mockapi.io/hotels`)
            .then((response) => response.json())
            .then((data) => {
                setHotelDetail(data.find(hotel => hotel.hotelId = param.hotelId));
            });

    }, [])
    // const [hotelRooms, setHotelRooms] = useState(hotelDetail.rooms);

    // // setHotelRooms(hotelDetail.rooms)
    // console.log(hotelRooms)
    return (
        <div>
            <div
                className="hotel-detail-custom d-flex flex-column justify-content-center align-items-start text-light ps-4"
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
                <div className='row'>
                    <div className='col-7'>
                        <div className='hotel-name-detail'>{hotelDetail.hotelName}</div>
                        <div className='hotel-nametag'>{hotelDetail.hotelName}</div>
                        <div className='hotel-address'><i class="fas fa-map-marker-alt" style={{ color: "#4d67ce" }}></i> {hotelDetail.buildingNumber}, {hotelDetail.street}, {hotelDetail.district}, {hotelDetail.city}, Việt Nam</div>
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
                            <Button className='btn-booking-room mr-xs' onClick={() => setShow(true)}>
                                Booking room
                            </Button>
                        </div>

                    </div>

                    <Modal
                        size="xl"
                        show={show}
                        onHide={() => setShow(false)}
                        aria-labelledby="modal-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="modal-title">
                                {hotelDetail.hotelName}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                {hotelDetail.description}
                            </p>
                        </Modal.Body>
                    </Modal>

                </div>
                <div className='row'>
                    <div className='col-4 hotel-detail-service'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='col-8 carousel-outside'>
                        <div id="carouselExampleControls" className="carousel slide d-flex" data-bs-ride="carousel">
                            <div className="carousel-inner" style={{borderRadius: "2%"}}>
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

            </div>
        </div>
    )
}

export default HotelDetailPage


