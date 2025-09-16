import react from "react";
import image from "../imgs/image.png";
import { NavLink } from "react-router-dom";
import "./liststyle.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const List = () => {
  return (
    <header>
      <div className="container container-flex">
        <div className="logo-container">
          <img src={image} alt="logoimg" className="logo" />
        </div>

        <nav>
          <div className="list">
            <NavLink to="/" className="list-item" activeListItem="activeItem">
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="list-item"
              activeListItem="activeItem"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="list-item"
              activeListItem="activeItem"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="list-item"
              activeListItem="activeItem"
            >
              Contact
            </NavLink>
            <NavLink
              to="/privacypolicy"
              className="list-item"
              activeListItem="activeItem"
            >
              Privacy Policy
            </NavLink>
          </div>
        </nav>

        <div >
          <SearchIcon  className="icons"/>
          <PersonIcon  className="icons"/>
          <PhoneInTalkIcon className="icons"  />
        </div>
      </div>
    </header>
  );
};

export default List;
