import React from 'react'
import CarouselSlides from '../../components/CarouselSlides/CarouselSlides'

const Home = () => {
  return (
    <div>
      <div id="section-booking" style={{ marginTop: "85px" }}>
        <div className="container align-items=center">
          <div className="section-booking-header text-center">
            <h1>DISCOVER</h1>
            <h1>HOMESTAYS'S ROOMS</h1>
            <h3>PERFECT FOR ANY TRIP</h3>
          </div>
          <form className="row g-3">
            <div className="col-lg-4 col-md-5 col-sm-12">
              <input
                type="date"
                className="form-control"
                id="day-in"
                name="day-in"
                placeholder="Check In"
              />
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12">
              <input
                type="date"
                className="form-control"
                id="day-out"
                name="day-out"
                placeholder="Check out"
              />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12">
              <input
                type="number"
                className="form-control"
                id="guests"
                placeholder="Guests"
              />
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12">
              <button type="submit" className="btn btn-add-to-card">
                BOOK NOW
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="section-vision" style={{ backgroundColor: "#f5f6fa" }}>
        <div className="container">
          <div className="row row-50 justify-content-center justify-content-lg-between flex-lg-row-reverse">
            <div className="col-md-10 col-lg-6 col-xl-5">
              <h1 className="my-title">
                Relax at Our{" "}
                <span style={{ fontStyle: "italic", fontWeight: 500 }}>
                  Homestay
                </span>
              </h1>
              <p>
                <span>
                  HomeStays and Suites is a family-owned Boutique Hotel that
                  desires to cater and provide guests with personalized
                  hospitality based on what they prefer.
                </span>
              </p>
              <p>
                <span>
                  Whether the guest is looking for quiet time and lots of
                  privacy or seeking energetic, friendly environment in the most
                  delightful place away from home, we can provide it.
                </span>
              </p>
              <p>
                <a className="navbar-brand" href="./index.html">
                  <i className="fas fa-home">
                    {" "}
                    Home{" "}
                    <span style={{ fontStyle: "italic", fontWeight: 100 }}>
                      Stays
                    </span>
                  </i>
                </a>
              </p>
            </div>
            <div className="col-md-10 col-lg-6 col-xl-5">

              <img
                className="slideInLeft"
                src="https://livedemo00.template-help.com/wt_prod-19522/images/job-portal-1-570x368.jpg"
                alt
              />
            </div>
          </div>
        </div>
      </div>
      <div id="section-our-rooms">
        <div className="container">
          <h1 className="my-title">
            <span style={{ fontStyle: "italic", fontWeight: 500 }}>Our</span>{" "}
            Rooms
          </h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
          <CarouselSlides />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 text-center">
              <a href="./rooms.html" className="btn btn-hotels">VIEW ALL ROOM</a>
            </div>
          </div>
        </div>
      </div>
      <div id="service" style={{ backgroundColor: "#f5f6fa" }}>
        <div className="container">
          <h1 className="my-title">
            Right Services{" "}
            <span style={{ fontStyle: "italic", fontWeight: 500 }}>
              for Great Customers
            </span>
          </h1>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-icon">
                <i className="fa fa-swimmer" />
              </div>
              <h3 className="service-title">Swimming Pool</h3>
              <div className="content-service">
                One of the main attractions at the hotel is our extensive,
                luxurious 20-metre indoor swimming pool.
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-icon">
                <i className="fa fa-wifi" />
              </div>
              <h3 className="service-title">Free Wifi</h3>
              <div className="content-service">
                We provide our guests with free high-speed Wi-Fi connection
                throughout the whole hotel area.
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-icon">
                <i className="fa fa-egg" />
              </div>
              <h3 className="service-title">Restaurants</h3>
              <div className="content-service">
                Restaurants at Lux Hotel offer a vast choice of great dishes
                that can satisfy even the most exquisite tastes.
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-icon">
                <i className="fa fa-bicycle" />
              </div>
              <h3 className="service-title">Bike Rentals</h3>
              <div className="content-service">
                Our hotel also offers bike rental services to our guests and
                visitors. We provide bikes at very affordable prices.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="section-more">
        <div className="container align-items=center">
          <div className="section-booking-header text-center">
            <h1>Relax And Enjoy</h1>
            <h3 style={{ fontStyle: "italic" }}>Your Holiday</h3>
          </div>
          <div className="row justify-content-center">
            <p className="text-center">
              With a variety of activities and amenities available at our hotel,
              you will surely have a great stay at our city and enjoy your
              holiday.
            </p>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center">

              <a type="submit" className="btn btn-add-to-card">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="section-news">
        <div className="container">
          <h1 className="my-title">
            <span style={{ fontStyle: "italic", fontWeight: 500 }}>Latest</span>{" "}
            NEWS
          </h1>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 pt-3">
              <div className="card h-100">
                <img
                  src="https://livedemo00.template-help.com/wt_prod-19522/images/latest-news-1-571x353.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="card-title item-header">
                    <h1 className="hotel-name" style={{ cursor: "pointer" }}>
                      6 Tips to Book the Best Hotel for You
                    </h1>
                  </div>
                  <p className="card-text">
                    Travelers today are spoiled for choice when it comes to
                    booking a hotel. Booking the best hotel goes beyond just
                    booking the cheapest, or the most centrally located. Here's
                    how to...
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Last updated 15 mins ago
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 pt-3">
              <div className="card h-100">
                <img
                  src="https://livedemo00.template-help.com/wt_prod-19522/images/latest-news-2-571x353.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="card-title item-header">
                    <h1 className="hotel-name" style={{ cursor: "pointer" }}>
                      Hotel Safety Tips You Should Not Ignore
                    </h1>
                  </div>
                  <p className="card-text">
                    These days, travel is no Sunday picnic and when you finally
                    stumble into the lobby of your hotel, you may be tired,
                    dirty, and in a hurry to get cleaned up, get some sleep, or
                    get to the first...
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
