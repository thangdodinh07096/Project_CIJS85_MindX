import React, { useState, useEffect } from 'react'
import "./HotelDetailPage.css"
import { BsChevronRight } from "react-icons/bs";
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RecomenedHotelList from '../../components/Hotels/RecomenedHotelList';
import MainUtilities from '../../components/Hotels/MainUtilities';
const HotelDetail = () => {
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
    }, [param]);
    console.log(hotelDetail)
    return (
        <div>HotelDetail</div>
    )
}

export default HotelDetail