import react from "react";
// import List from "../components/List.jsx";
import "./footerstyle.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className=" container container-flex">
          <div className="footer-icons">
            <i className="fab fa-facebook-f icons"></i>
            <i className="fab fa-twitter icons"></i>
            <i className="fab fa-instagram icons"></i>
            <i className="fab fa-whatsapp icons"></i>
          </div>
          <div className="line">
            <hr />
            <hr />
          </div>

          <div className="privacy">
            <p>All Rights reserved &copy;</p>
            <p>Made by Sadia</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
