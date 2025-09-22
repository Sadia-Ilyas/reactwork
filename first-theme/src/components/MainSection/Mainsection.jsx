// import react from "react";
import { NavLink } from "react-router-dom";
import "../MainSection/mainsectionstyle.css";


const MainSection = () => {
  return (
    <>
      <div className="main-section">
        <div className="content-box">
          <h1>Learning Made Easy</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            veniam laboriosam nostrum repellat eaque aliquid expedita commodi
            explicabo sequi asperiores praesentium qui natus, omnis quod unde
            aperiam non debitis? Aliquam.
          </p>
          <div className="btnbox">
            <div className="btn">
              <NavLink to="" className="fancy-btn">
                <span>For More Info</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="/assets/imgs/mainsection.png" alt="img" />
        </div>
      </div>
    </>
  );
};

export default MainSection;
