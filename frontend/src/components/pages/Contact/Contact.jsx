import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import SendUsForm from "./SendUsForm";

export default function Contact() {
  return (
    <>
      <div className="container  mt-5">
        <div className="pt-3 text-center my-5">
          <h1> Get In Touch</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
            veniam vel.
          </p>
        </div>
        <div className="row g-4 justify-content-center mb-3">
          {/* Address */}
          <div className="col-12 col-md-6 col-lg-4 mb-5">
            <div
              className=" p-4 text-center rounded bg-light"
              style={{ height: "200px" }}
            >
              <PersonPinCircleIcon
                sx={{ fontSize: 40, color: "#1e40af" }}
                className="mb-3"
              />
              <h6 className="fw-semibold">Salt Lake Sector V,</h6>
              <p className="text-secondary mb-0">
                Kolkata, West Bengal – 700091
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className=" p-4 text-center rounded bg-light"
              style={{ height: "200px" }}
            >
              <LocalPhoneIcon
                sx={{ fontSize: 40, color: "#1e40af" }}
                className="mb-3"
              />
              <h6 className="fw-semibold">+91 9XXXXXXXXX</h6>
              <p className="text-secondary mb-0">
                Lorem ipsum dolor sit amet discont
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className=" p-4 text-center rounded bg-light"
              style={{ height: "200px" }}
            >
              <EmailIcon
                sx={{ fontSize: 40, color: "#1e40af" }}
                className="mb-3"
              />
              <h6 className="fw-semibold">info@example.com</h6>
              <p className="text-secondary mb-0">
                Lorem ipsum dolor sit amet discont
              </p>
            </div>
          </div>
        </div>
        <SendUsForm />

        <div style={{ height: "100px" }}></div>
      </div>
    </>
  );
}
