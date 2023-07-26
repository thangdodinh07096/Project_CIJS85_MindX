import "./ContactsPage.css";
import { BsChevronRight } from "react-icons/bs";
import {
  BiSolidPhoneCall,
  BiMailSend,
  BiSolidLocationPlus,
} from "react-icons/bi";

const ContactsPage = () => {
  return (
    <div
      className="container-fluid"
      style={{ padding: "0", width: "100%" }}
    >
      <div
        className="contacts-custom d-flex flex-column justify-content-center align-items-start text-light ps-4"
        style={{ marginTop: "85px" }}
      >
        <div className="container">
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
        className="section container d-flex flex-column flex-md-row justify-content-center align-items-center mt-4 mb-4"
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
      <div
        style={{
          background: "rgb(236 240 243)",
          height: "auto",
          height: "auto",
        }}
      >
        <section className="range container pt-5 pb-5">
          <div className="row col-md-8 col-12">
            <h3 className="pt-3 pb-4">Contacts Us</h3>
            <div
              className="col-sm-6 col-12 mb-3"
              style={{ color: "rgba(21, 21, 21, 0.7)" }}
            >
              <label className="form-label">First Name</label>
              <input type="text" className="form-control rounded" />
            </div>
            <div
              className="col-sm-6 col-12 mb-3"
              style={{ color: "rgba(21, 21, 21, 0.7)" }}
            >
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control rounded" />
            </div>
            <div
              className="col-sm-6 col-12 mb-3"
              style={{ color: "rgba(21, 21, 21, 0.7)" }}
            >
              <label className="form-label">E-mail</label>
              <input type="email" className="form-control rounded" />
            </div>
            <div
              className="col-sm-6 col-12 mb-3"
              style={{ color: "rgba(21, 21, 21, 0.7)" }}
            >
              <label className="form-label">Phone Number</label>
              <input type="text" className="form-control rounded" />
            </div>
            <div className="mb-3">
              <label
                className="form-label"
                style={{ color: "rgba(21, 21, 21, 0.7)" }}
              >
                Your Message
              </label>
              <textarea
                className="form-control rounded"
                rows={3}
                defaultValue={""}
                style={{
                  height: "150px",
                  minHeight: "48px",
                  maxHeight: "255px",
                  resize: "vertical",
                }}
              />
            </div>
            <div style={{ height: "48px" }}>
              <button className="button text-light rounded">
                Send Message
              </button>
            </div>
          </div>
          <div className="col-4 d-md-none"></div>
        </section>
      </div>
    </div>
  );
};

export default ContactsPage;
