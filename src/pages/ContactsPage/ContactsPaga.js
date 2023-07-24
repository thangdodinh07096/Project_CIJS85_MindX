import "./ContactsPage.css";
import { BsChevronRight } from "react-icons/bs";
import {
  BiSolidPhoneCall,
  BiMailSend,
  BiSolidLocationPlus,
} from "react-icons/bi";

const ContactsPaga = () => {
  return (
    <div
      className="container-fluid"
      style={{ padding: "0", width: "100%", height: "100vh" }}
    >
      <div className="contacts-custom container-fluid d-flex flex-column justify-content-center align-items-start text-light ps-4">
        <div>
          <div
            className="d-flex flex-column justify-content-start"
            style={{ width: "100%" }}
          >
            <h6 className="ps-5">
              <p class="underline"></p>Contacts
            </h6>
            <h1>Contacts</h1>
          </div>
          <div
            className="d-flex flex-row justify-content-start align-items-center gap-2 pt-4"
            style={{ width: "100%" }}
          >
            <p className="m-0">Home</p>
            <BsChevronRight size={14} />
            <p className="m-0">Contacts</p>
          </div>
        </div>
      </div>
      <section
        className="section d-flex flex-column flex-md-row justify-content-center align-items-center ms-md-5 me-md-5 ps-lg-5 pe-lg-5 m-4"
        style={{ color: "#c19b76" }}
      >
        <div className="section-item col-md-4 col-12 d-flex row justify-content-center align-items-center gap-2 ps-4 pe-4">
          <BiSolidPhoneCall size={24} />
          <div className="m-0">
            <p className="d-flex justify-content-center mb-2">1-800-1234-678</p>
            <p className="d-flex justify-content-center mb-2">1-800-9876-098</p>
          </div>
        </div>
        <div className="section-item col-md-4 col-12 d-flex row justify-content-center align-items-center gap-2 ps-4 pe-4">
          <BiMailSend size={24} />
          <p className="d-flex justify-content-center mb-2">
            infor@demolink.org
          </p>
        </div>
        <div className="section-item col-md-4 col-12 d-flex row justify-content-center align-items-center gap-2 ps-4 pe-4 flex-wrap">
          <BiSolidLocationPlus size={24} />
          <p className="d-flex justify-content-center mb-2">
            2130 Fulton Street San Diego, CA 94117-1080 USA
          </p>
        </div>
      </section>
      <section className="range row p-5" style={{ background: "rgb(236 240 243)" }}>
        <div className="row col-md-10 col-lg-8 col-12 mb-5">
          <h3 className="pt-3 pb-4">Contacts Us</h3>
          <div className="col-sm-6 col-12 mb-3" style={{color: 'rgba(21, 21, 21, 0.7)'}}>
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-6 col-12 mb-3" style={{color: 'rgba(21, 21, 21, 0.7)'}}>
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-6 col-12 mb-3" style={{color: 'rgba(21, 21, 21, 0.7)'}}>
            <label className="form-label">E-mail</label>
            <input type="email" className="form-control" />
          </div>
          <div className="col-sm-6 col-12 mb-3" style={{color: 'rgba(21, 21, 21, 0.7)'}}>
            <label className="form-label">Phone Number</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{color: 'rgba(21, 21, 21, 0.7)'}}>Your Message</label>
            <textarea className="form-control" rows={3} defaultValue={""} />
          </div>
          <div style={{ height: "9%" }}>
            <button className="button text-light rounded">Send Message</button>
          </div>
        </div>
        <div className="col-2 d-md-none"></div>
      </section>
    </div>
  );
};

export default ContactsPaga;