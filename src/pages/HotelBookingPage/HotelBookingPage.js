import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./HotelBookingPage.css";
import HotelBooking from "../../components/Hotels/HotelBooking";

const HotelBookingPage = () => {

  const mockDataHotel = [
    {
      "createdAt": "2023-07-28T08:23:48.570Z",
      "hotelName": "Merry Land Hotel",
      "price": "142.15",
      "img": "https://loremflickr.com/640/480/city",
      "city": "Hà Nội",
      "district": "Hoàn Kiếm",
      "street": "Hàng Bông",
      "buildingNumber": "27",
      "rating": 8.2,
      "description": "For you, travelers who wish to travel comfortably on a budget, Daun Bali Seminyak Hotel is the perfect place to stay that provides decent facilities as well as great services. From business event to corporate gathering, Daun Bali Seminyak Hotel provides complete services and facilities that you and your colleagues need. Have fun with various entertaining facilities for you and the whole family at Daun Bali Seminyak Hotel, a wonderful accommodation for your family holiday. If you plan to have a long-term stay, staying at Daun Bali Seminyak Hotel is the right choice for you. Providing wide range of facilities and great service quality, this accommodation certainly makes you feel at home. Be ready to get the unforgettable stay experience by its exclusive service, completed by a full range of facilities to cater all your needs. Have an enjoyable and relaxing day at the pool, whether you’re traveling solo or with your loved ones. Get the best deal for finest quality of spa treatment to unwind and rejuvenate yourself. 24-hours front desk is available to serve you, from check-in to check-out, or any assistance you need. Should you desire more, do not hesitate to ask the front desk, we are always ready to accommodate you. Savor your favorite dishes with special cuisines from Daun Bali Seminyak Hotel exclusively for you. WiFi is available within public areas of the property to help you to stay connected with family and friends. Daun Bali Seminyak Hotel is a hotel with great comfort and excellent service according to most hotel's guests. Get precious and unforgettable moment during your stay at Daun Bali Seminyak Hotel.",
      "mainUtiLities": [
        {
          "mainUtiLitiesId": "ariconditional",
          "title": "Máy lạnh",
          "mainUtiLitiesImg": "https://cdn-icons-png.flaticon.com/512/4274/4274364.png"
        },
        {
          "mainUtiLitiesId": "resturant",
          "title": "Nhà hàng",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833794378-eb51eee62d46110b712e327108299ea6.png"
        },
        {
          "mainUtiLitiesId": "24hreception",
          "title": "Lễ tân 24h",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833738654-d8acba985778fc0cc5dd1d56d6cf48c5.png"
        },
        {
          "mainUtiLitiesId": "parking",
          "title": "Chỗ đậu xe",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833756238-56e24fb64a964d38b8f393bf093a77a9.png"
        },
        {
          "mainUtiLitiesId": "elevator",
          "title": "Thang máy",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833714411-48c9b7565018d02dc32837738df1c917.png"
        },
        {
          "mainUtiLitiesId": "wifi",
          "title": "WiFi",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833833458-7b6ab67bc5df6ef9f2caee150aae1f43.png"
        }
      ],
      "rooms": [
        {
          "createdAt": "2023-07-28T08:23:48.570Z",
          "img": "https://loremflickr.com/640/40/city",
          "roomName": "Standard  MLH1",
          "roomType": "Standard",
          "price": "142.15",
          "numOfBed": 1,
          "numOfCustomer": 2,
          "quantity": 3,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV"
          ],
          "roomId": "MLH1"
        },
        {
          "createdAt": "2023-07-29T03:23:14.193Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
          "roomName": "Deluxe MLH2",
          "roomType": "Deluxe",
          "price": "229.00",
          "numOfBed": 2,
          "numOfCustomer": 4,
          "quantity": 2,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "MLH2"
        }
      ],
      "hotelId": 1
    },
    {
      "createdAt": "2023-07-28T17:34:20.717Z",
      "hotelName": "Yarra Ocean Suites",
      "price": "189.99",
      "img": "https://loremflickr.com/640/480/city",
      "city": "Hà Nội",
      "district": "Tây Hồ",
      "street": "Âu Cơ",
      "buildingNumber": "79",
      "rating": 8.3,
      "description": "For you, travelers who wish to travel comfortably on a budget, Daun Bali Seminyak Hotel is the perfect place to stay that provides decent facilities as well as great services. From business event to corporate gathering, Daun Bali Seminyak Hotel provides complete services and facilities that you and your colleagues need. Have fun with various entertaining facilities for you and the whole family at Daun Bali Seminyak Hotel, a wonderful accommodation for your family holiday.",
      "mainUtiLities": [
        {
          "mainUtiLitiesId": "ariconditional",
          "title": "Máy lạnh",
          "mainUtiLitiesImg": "https://cdn-icons-png.flaticon.com/512/4274/4274364.png"
        },
        {
          "mainUtiLitiesId": "resturant",
          "title": "Nhà hàng",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833794378-eb51eee62d46110b712e327108299ea6.png"
        },
        {
          "mainUtiLitiesId": "24hreception",
          "title": "Lễ tân 24h",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833738654-d8acba985778fc0cc5dd1d56d6cf48c5.png"
        },
        {
          "mainUtiLitiesId": "parking",
          "title": "Chỗ đậu xe",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833756238-56e24fb64a964d38b8f393bf093a77a9.png"
        },
        {
          "mainUtiLitiesId": "elevator",
          "title": "Thang máy",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833714411-48c9b7565018d02dc32837738df1c917.png"
        },
        {
          "mainUtiLitiesId": "wifi",
          "title": "WiFi",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833833458-7b6ab67bc5df6ef9f2caee150aae1f43.png"
        }
      ],
      "rooms": [
        {
          "createdAt": "2023-07-28T17:34:20.717Z",
          "img": "https://loremflickr.com/640/80/city",
          "roomName": "Deluxe YOS1",
          "roomType": "Deluxe",
          "price": "189.99",
          "numOfBed": 1,
          "numOfCustomer": 2,
          "quantity": 2,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "YOS1"
        },
        {
          "createdAt": "2023-07-28T18:34:40.027Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1135.jpg",
          "roomName": "Suite YOS2",
          "roomType": "Suite",
          "price": "251.89",
          "numOfBed": 3,
          "numOfCustomer": 6,
          "quantity": 1,
          "service": [
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "YOS2"
        }
      ],
      "hotelId": 2
    },
    {
      "createdAt": "2023-07-28T15:29:31.815Z",
      "hotelName": "Pavilion Hotel",
      "price": "98.98",
      "img": "https://loremflickr.com/640/480/city",
      "city": "Hạ Long",
      "district": "Bãi Cháy",
      "street": "Khu 1",
      "buildingNumber": "56",
      "rating": 7.2,
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "mainUtiLities": [
        {
          "mainUtiLitiesId": "ariconditional",
          "title": "Máy lạnh",
          "mainUtiLitiesImg": "https://cdn-icons-png.flaticon.com/512/4274/4274364.png"
        },
        {
          "mainUtiLitiesId": "resturant",
          "title": "Nhà hàng",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833794378-eb51eee62d46110b712e327108299ea6.png"
        },
        {
          "mainUtiLitiesId": "24hreception",
          "title": "Lễ tân 24h",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833738654-d8acba985778fc0cc5dd1d56d6cf48c5.png"
        },
        {
          "mainUtiLitiesId": "elevator",
          "title": "Thang máy",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833714411-48c9b7565018d02dc32837738df1c917.png"
        },
        {
          "mainUtiLitiesId": "wifi",
          "title": "WiFi",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833833458-7b6ab67bc5df6ef9f2caee150aae1f43.png"
        }
      ],
      "rooms": [
        {
          "createdAt": "2023-07-28T19:30:53.268Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/601.jpg",
          "roomName": "Standard PH1",
          "roomType": "Standard",
          "price": "98.98",
          "numOfBed": 2,
          "numOfCustomer": 4,
          "quantity": 3,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "PH1"
        },
        {
          "createdAt": "2023-07-28T12:45:23.567Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/80.jpg",
          "roomName": "Superior PH2",
          "roomType": "Superior",
          "price": "119.00",
          "numOfBed": 2,
          "numOfCustomer": 4,
          "quantity": 3,
          "service": [
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "PH2"
        }
      ],
      "hotelId": 3
    },
    {
      "createdAt": "2023-07-28T11:55:56.657Z",
      "hotelName": "Muong Thanh Hotel",
      "price": "199.55",
      "img": "https://loremflickr.com/640/480/city",
      "city": "Hạ Long",
      "district": "Bãi Cháy",
      "street": "Khu 2",
      "buildingNumber": "722",
      "rating": 9.3,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "mainUtiLities": [
        {
          "mainUtiLitiesId": "ariconditional",
          "title": "Máy lạnh",
          "mainUtiLitiesImg": "https://cdn-icons-png.flaticon.com/512/4274/4274364.png"
        },
        {
          "mainUtiLitiesId": "resturant",
          "title": "Nhà hàng",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833794378-eb51eee62d46110b712e327108299ea6.png"
        },
        {
          "mainUtiLitiesId": "pool",
          "title": "Hồ bơi",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833772013-929572dff57d1755878aa79dc46e6be5.png"
        },
        {
          "mainUtiLitiesId": "24hreception",
          "title": "Lễ tân 24h",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833738654-d8acba985778fc0cc5dd1d56d6cf48c5.png"
        },
        {
          "mainUtiLitiesId": "parking",
          "title": "Chỗ đậu xe",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833756238-56e24fb64a964d38b8f393bf093a77a9.png"
        },
        {
          "mainUtiLitiesId": "elevator",
          "title": "Thang máy",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833714411-48c9b7565018d02dc32837738df1c917.png"
        },
        {
          "mainUtiLitiesId": "wifi",
          "title": "WiFi",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833833458-7b6ab67bc5df6ef9f2caee150aae1f43.png"
        }
      ],
      "rooms": [
        {
          "createdAt": "2023-07-29T01:29:40.487Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
          "roomName": "Superior MTH1",
          "roomType": "Superior",
          "price": "199.55",
          "numOfBed": 1,
          "numOfCustomer": 2,
          "quantity": 5,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "MTH1"
        },
        {
          "createdAt": "2023-07-28T23:02:41.790Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/990.jpg",
          "roomName": "Deluxe MTH2",
          "roomType": "Deluxe",
          "price": "204.55",
          "numOfBed": 1,
          "numOfCustomer": 2,
          "quantity": 3,
          "service": [
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "MTH2"
        },
        {
          "createdAt": "2023-07-28T08:40:06.138Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/282.jpg",
          "roomName": "Deluxe MTH3",
          "roomType": "Deluxe",
          "price": "237.99",
          "numOfBed": 2,
          "numOfCustomer": 4,
          "quantity": 2,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "MTH3"
        },
        {
          "createdAt": "2023-07-28T22:32:27.119Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/955.jpg",
          "roomName": "Suite MTH4",
          "roomType": "Suite",
          "price": "336.00",
          "numOfBed": 2,
          "numOfCustomer": 4,
          "quantity": 5,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "MTH4"
        },
        {
          "createdAt": "2023-07-28T22:32:27.119Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/955.jpg",
          "roomName": "Luxury MTH5",
          "roomType": "Luxury",
          "price": "456.88",
          "numOfBed": 1,
          "numOfCustomer": 2,
          "quantity": 5,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "MTH5"
        }
      ],
      "hotelId": 4
    },
    {
      "createdAt": "2023-07-28T19:07:32.022Z",
      "hotelName": "King and Sons Hotel",
      "price": "66.00",
      "img": "https://loremflickr.com/640/480/city",
      "city": "Đà Nắng",
      "district": "Ngũ Hành Sơn",
      "street": "Đỗ Bí, Mỹ An",
      "buildingNumber": "683",
      "rating": 7.1,
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "mainUtiLities": [
        {
          "mainUtiLitiesId": "ariconditional",
          "title": "Máy lạnh",
          "mainUtiLitiesImg": "https://cdn-icons-png.flaticon.com/512/4274/4274364.png"
        },
        {
          "mainUtiLitiesId": "parking",
          "title": "Chỗ đậu xe",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833756238-56e24fb64a964d38b8f393bf093a77a9.png"
        },
        {
          "mainUtiLitiesId": "elevator",
          "title": "Thang máy",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833714411-48c9b7565018d02dc32837738df1c917.png"
        },
        {
          "mainUtiLitiesId": "wifi",
          "title": "WiFi",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833833458-7b6ab67bc5df6ef9f2caee150aae1f43.png"
        }
      ],
      "rooms": [
        {
          "createdAt": "2023-07-28T17:23:33.614Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/88.jpg",
          "roomName": "Standard KSH1",
          "roomType": "Standard",
          "price": "66.00",
          "numOfBed": 1,
          "numOfCustomer": 2,
          "quantity": 3,
          "service": [
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "KSH1"
        },
        {
          "createdAt": "2023-07-28T09:26:43.365Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/612.jpg",
          "roomName": "Superior KSH2",
          "roomType": "Superior",
          "price": "82.05",
          "numOfBed": 1,
          "numOfCustomer": 2,
          "quantity": 4,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "KSH2"
        }
      ],
      "hotelId": 5
    },
    {
      "createdAt": "2023-07-28T16:22:47.853Z",
      "hotelName": "Shields Hotel",
      "price": "80.00",
      "img": "https://loremflickr.com/640/480/city",
      "city": "Hạ Long",
      "district": "Hòn Gai",
      "street": "Bãi 2",
      "buildingNumber": "6",
      "rating": 7.5,
      "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "mainUtiLities": [
        {
          "mainUtiLitiesId": "ariconditional",
          "title": "Máy lạnh",
          "mainUtiLitiesImg": "https://cdn-icons-png.flaticon.com/512/4274/4274364.png"
        },
        {
          "mainUtiLitiesId": "24hreception",
          "title": "Lễ tân 24h",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833738654-d8acba985778fc0cc5dd1d56d6cf48c5.png"
        },
        {
          "mainUtiLitiesId": "elevator",
          "title": "Thang máy",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833714411-48c9b7565018d02dc32837738df1c917.png"
        },
        {
          "mainUtiLitiesId": "wifi",
          "title": "WiFi",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833833458-7b6ab67bc5df6ef9f2caee150aae1f43.png"
        }
      ],
      "rooms": [
        {
          "createdAt": "2023-07-28T07:43:41.999Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/259.jpg",
          "roomName": "Superior SH1",
          "roomType": "Superior",
          "price": "80.00",
          "numOfBed": 1,
          "numOfCustomer": 2,
          "quantity": 5,
          "service": [
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "SH1"
        },
        {
          "createdAt": "2023-07-28T21:34:13.705Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1083.jpg",
          "roomName": "Superior SH2",
          "roomType": "Superior",
          "price": "95.60",
          "numOfBed": 2,
          "numOfCustomer": 4,
          "quantity": 2,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "SH2"
        }
      ],
      "hotelId": 6
    },
    {
      "createdAt": "2023-07-28T08:54:37.330Z",
      "hotelName": "Dolphin Hotel and Apartment",
      "price": "100.85",
      "img": "https://loremflickr.com/640/480/city",
      "city": "Đà Nẵng",
      "district": "Sơn Trà",
      "street": "Nguyễn Văn Thoại",
      "buildingNumber": "99",
      "rating": 7.8,
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "mainUtiLities": [
        {
          "mainUtiLitiesId": "ariconditional",
          "title": "Máy lạnh",
          "mainUtiLitiesImg": "https://cdn-icons-png.flaticon.com/512/4274/4274364.png"
        },
        {
          "mainUtiLitiesId": "24hreception",
          "title": "Lễ tân 24h",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833738654-d8acba985778fc0cc5dd1d56d6cf48c5.png"
        },
        {
          "mainUtiLitiesId": "parking",
          "title": "Chỗ đậu xe",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833756238-56e24fb64a964d38b8f393bf093a77a9.png"
        },
        {
          "mainUtiLitiesId": "elevator",
          "title": "Thang máy",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833714411-48c9b7565018d02dc32837738df1c917.png"
        },
        {
          "mainUtiLitiesId": "wifi",
          "title": "WiFi",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833833458-7b6ab67bc5df6ef9f2caee150aae1f43.png"
        }
      ],
      "rooms": [
        {
          "createdAt": "2023-07-28T17:58:58.489Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/809.jpg",
          "roomName": "Superior DHA1",
          "roomType": "Superior",
          "price": "100.85",
          "numOfBed": 1,
          "numOfCustomer": 2,
          "quantity": 4,
          "service": [
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "DHA1"
        },
        {
          "createdAt": "2023-07-28T11:22:30.386Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/64.jpg",
          "roomName": "Deluxe DHA2",
          "roomType": "Deluxe",
          "price": "172.25",
          "numOfBed": 2,
          "numOfCustomer": 4,
          "quantity": 2,
          "service": [
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "DHA2"
        }
      ],
      "hotelId": 7
    },
    {
      "createdAt": "2023-07-28T15:12:12.241Z",
      "hotelName": "Monahan Hotel",
      "price": "110.15",
      "img": "https://loremflickr.com/640/480/city",
      "city": "Sapa",
      "district": "Trung Tâm Sapa",
      "street": "Vườn Treo",
      "buildingNumber": "27",
      "rating": 8.7,
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "mainUtiLities": [
        {
          "mainUtiLitiesId": "ariconditional",
          "title": "Máy lạnh",
          "mainUtiLitiesImg": "https://cdn-icons-png.flaticon.com/512/4274/4274364.png"
        },
        {
          "mainUtiLitiesId": "resturant",
          "title": "Nhà hàng",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833794378-eb51eee62d46110b712e327108299ea6.png"
        },
        {
          "mainUtiLitiesId": "pool",
          "title": "Hồ bơi",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833772013-929572dff57d1755878aa79dc46e6be5.png"
        },
        {
          "mainUtiLitiesId": "24hreception",
          "title": "Lễ tân 24h",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833738654-d8acba985778fc0cc5dd1d56d6cf48c5.png"
        },
        {
          "mainUtiLitiesId": "parking",
          "title": "Chỗ đậu xe",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833756238-56e24fb64a964d38b8f393bf093a77a9.png"
        },
        {
          "mainUtiLitiesId": "elevator",
          "title": "Thang máy",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833714411-48c9b7565018d02dc32837738df1c917.png"
        },
        {
          "mainUtiLitiesId": "wifi",
          "title": "WiFi",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833833458-7b6ab67bc5df6ef9f2caee150aae1f43.png"
        }
      ],
      "rooms": [
        {
          "createdAt": "2023-07-28T21:18:43.157Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/373.jpg",
          "roomName": "Standard MH1",
          "roomType": "Standard",
          "price": "110.15",
          "numOfBed": 2,
          "numOfCustomer": 4,
          "quantity": 4,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "MH1"
        },
        {
          "createdAt": "2023-07-28T12:23:36.442Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/558.jpg",
          "roomName": "Deluxe MH2",
          "roomType": "Deluxe",
          "price": "246.00",
          "numOfBed": 2,
          "numOfCustomer": 4,
          "quantity": 3,
          "service": [
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "MH2"
        },
        {
          "createdAt": "2023-07-29T02:33:59.724Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/295.jpg",
          "roomName": "Deluxe MH3",
          "roomType": "Deluxe",
          "price": "275.15",
          "numOfBed": 1,
          "numOfCustomer": 2,
          "quantity": 3,
          "service": [
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "MH3"
        },
        {
          "createdAt": "2023-07-28T13:34:59.918Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg",
          "roomName": "Suite MH4",
          "roomType": "Suite",
          "price": "299.88",
          "numOfBed": 1,
          "numOfCustomer": 2,
          "quantity": 6,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "MH4"
        }
      ],
      "hotelId": 8
    },
    {
      "createdAt": "2023-07-28T23:39:34.110Z",
      "hotelName": "Schoen LLC Apartment",
      "price": "189.99",
      "img": "https://loremflickr.com/640/480/city",
      "city": "Sapa",
      "district": "Trung Tâm Sapa",
      "street": "Đường N1",
      "buildingNumber": "28",
      "rating": 8.9,
      "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      "mainUtiLities": [
        {
          "mainUtiLitiesId": "ariconditional",
          "title": "Máy lạnh",
          "mainUtiLitiesImg": "https://cdn-icons-png.flaticon.com/512/4274/4274364.png"
        },
        {
          "mainUtiLitiesId": "resturant",
          "title": "Nhà hàng",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833794378-eb51eee62d46110b712e327108299ea6.png"
        },
        {
          "mainUtiLitiesId": "pool",
          "title": "Hồ bơi",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833772013-929572dff57d1755878aa79dc46e6be5.png"
        },
        {
          "mainUtiLitiesId": "parking",
          "title": "Chỗ đậu xe",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833756238-56e24fb64a964d38b8f393bf093a77a9.png"
        },
        {
          "mainUtiLitiesId": "elevator",
          "title": "Thang máy",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833714411-48c9b7565018d02dc32837738df1c917.png"
        },
        {
          "mainUtiLitiesId": "wifi",
          "title": "WiFi",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833833458-7b6ab67bc5df6ef9f2caee150aae1f43.png"
        }
      ],
      "rooms": [
        {
          "createdAt": "2023-07-28T15:24:01.651Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/187.jpg",
          "roomName": "Superior SLA1",
          "roomType": "Superior",
          "price": "189.99",
          "numOfBed": 2,
          "numOfCustomer": 4,
          "quantity": 6,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "SLA1"
        },
        {
          "createdAt": "2023-07-28T14:14:08.395Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/640.jpg",
          "roomName": "Suite SLA2",
          "roomType": "Suite",
          "price": "254.00",
          "numOfBed": 2,
          "numOfCustomer": 4,
          "quantity": 4,
          "service": [
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "SLA2"
        }
      ],
      "hotelId": 9
    },
    {
      "createdAt": "2023-07-28T20:48:00.816Z",
      "hotelName": "Cartwright & Zemlak Hotel",
      "price": "103.55",
      "img": "https://loremflickr.com/640/480/city",
      "city": "Đà Lạt",
      "district": "Phường 1",
      "street": "Nam Kỳ Khởi Nghĩa",
      "buildingNumber": "147",
      "rating": 6.5,
      "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "mainUtiLities": [
        {
          "mainUtiLitiesId": "ariconditional",
          "title": "Máy lạnh",
          "mainUtiLitiesImg": "https://cdn-icons-png.flaticon.com/512/4274/4274364.png"
        },
        {
          "mainUtiLitiesId": "elevator",
          "title": "Thang máy",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833714411-48c9b7565018d02dc32837738df1c917.png"
        },
        {
          "mainUtiLitiesId": "wifi",
          "title": "WiFi",
          "mainUtiLitiesImg": "https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/06/07/1496833833458-7b6ab67bc5df6ef9f2caee150aae1f43.png"
        }
      ],
      "rooms": [
        {
          "createdAt": "2023-07-29T01:54:10.671Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/881.jpg",
          "roomName": "Standard CZH1",
          "roomType": "Standard",
          "price": "103.55",
          "numOfBed": 1,
          "numOfCustomer": 2,
          "quantity": 7,
          "service": [
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "CZH1"
        },
        {
          "createdAt": "2023-07-28T13:26:53.344Z",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/829.jpg",
          "roomName": "Superior CZH2",
          "roomType": "Superior",
          "price": "121.25",
          "numOfBed": 1,
          "numOfCustomer": 2,
          "quantity": 5,
          "service": [
            "Miễn phí hủy phòng",
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "CZH2"
        },
        {
          "createdAt": "2023-07-28T06:59:15.382Z",
          "hotelName": "Cartwright & Zemlak Hotel",
          "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/270.jpg",
          "roomName": "Deluxe CZH3",
          "roomType": "Deluxe",
          "price": "246.00",
          "numOfBed": 2,
          "numOfCustomer": 4,
          "quantity": 8,
          "service": [
            "Tủ lạnh",
            "Máy lạnh",
            "Nước nóng",
            "Nước đóng chai miễn phí",
            "TV",
            "Bàn làm việc",
            "Máy sấy tóc",
            "Áo choàng tắm/ Khăn tắm"
          ],
          "roomId": "CZH3"
        }
      ],
      "hotelId": 10
    }
  ];

  const param = useParams();
  const [hotelDetail, setHotelDetail] = useState([]);

  useEffect(() => {
    const getHotelDetail = async () => {
      setHotelDetail(mockDataHotel.find(hotel => hotel.hotelId = param.hotelId));
    };
    getHotelDetail();
  }, [param.hotelId]);



  return (
    <HotelBooking
      hotelDetail={hotelDetail}
    />
  );
};

export default HotelBookingPage;
