import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoomList = (props) => {
    const { hotelId, rooms = [] } = props;
    const [currentRoom, setCurrentRoom] = useState([]);
    const navigate = useNavigate();

    const onSelectRoom = (room) => {
        localStorage.setItem("currentRoom", JSON.stringify(room));
        const storedCurrentRoom = JSON.parse(
            localStorage.getItem("currentRoom")
        );
        setCurrentRoom(storedCurrentRoom);
        navigate(`/hotelBooking/${hotelId}/${room.roomId}`);
    }
    const hotelRoomElement = rooms.map((room) => {
        return (
            <div class="room-detail-item" style={{
                margin: "15px 0 15px 0px"
            }}>
                <div className='row'>
                    <div className="card list-room-item">
                        <div className="row g-0 item">
                            <div className="col-md-5" style={{ height: "300px" }}>
                                <img src={room.img} className=" card-img rounded-start" alt="..." />
                            </div>
                            <div className="col-md-7" style={{ height: "300px" }}>
                                <div className="card-body m-1">
                                    <div className="card-title item-header" style={{ color: "#c19b76" }}>
                                        <h4 className="room-name">{room.roomName}</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-9 row">
                                            <div className="col-6">
                                                <i class="fa fa-bed"></i> {room.numOfBed} bed
                                            </div>
                                            <div className="col-6">
                                                <i class="fa fa-users"></i> {room.numOfCustomer} guests
                                            </div>
                                        </div>
                                        <div className="col-3 text-end" style={{ fontSize: "13px", color: "#fb8c7d" }}>({room.quantity} room(s) available)</div>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                        <div className='col-9 row'>
                                            {
                                                room.service.map((serviceItem) => {
                                                    return (
                                                        <div className="col-6" style={{ color: "rgb(0, 135, 90)", fontSize: "13.5px" }}>
                                                            <i class="fa fa-circle" style={{ fontSize: "5px" }}></i> {serviceItem}
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                        <div className="col-3">
                                            <div className="text-end">
                                                <h3 style={{ fontWeight: "550", fontSize: "20px" }} className="room-price">US$ {room.price}</h3>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <div className='btn btn-hotels' style={{ fontSize: "15px" }}>
                                                    <div onClick={() => onSelectRoom(room)}>Book Now!</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div>
            </div>
        );
    });
    return (
        <>
            {
                hotelRoomElement
            }
        </>
    )
}

export default RoomList