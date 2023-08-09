import { Link } from "react-router-dom";

const RoomList = (props) => {
    const { rooms = [] } = props;

    const hotelRoomElement = rooms.map((room) => {
        return (
            <div class="room-detail-item">
                <div className='row'>
                    <img src={room.img} className="room-detail-img" alt="..." />
                    <div className="room-detail">
                        {room.roomName}
                    </div>
                    <div className="room-detail">
                        {room.roomType}
                    </div>
                    <div className="room-detail">
                        {room.price}
                    </div>
                    <div className="room-detail">
                        {room.numOfCustomer}
                    </div>
                    <div className="room-detail">
                        {room.quantity}
                    </div>
                    <div>
                        {
                            room.service.map((serviceItem) => {
                                return (
                                    <div>
                                        {serviceItem}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <Link to={`/bill/${room.roomId}`}>
                    BookNow
                </Link>
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