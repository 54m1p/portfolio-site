import logo from "../../../images/SNLogo.png";
import { Link } from "react-router-dom";
import navMenu from "../../../json/navMenu.json";
import Socials from "./Socials";
import "../../css/footer.css";
import { address, email, phoneNo } from "../../utils/constants";

const Prefooter = () => {
  return (
    <div className="bg-black text-white">
      <div className="container">
        <div className="prefoot ">
          <div className="my-3">
            <Link className="link" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="my-3">
            <h5 className="text-danger">Contact Info</h5>
            <div>
              <span className="d-block">{address}</span>
              <span className="d-block">{phoneNo}</span>
              <span className="d-block">
                <Link className="link" to={`mailto:${email}`}>
                  {email}
                </Link>
              </span>
            </div>
          </div>
          <div className="my-3">
            <h5 className="text-danger">Links</h5>
            {navMenu.menu.map((menu) => (
              <>
                <span className="d-block" key={menu.id}>
                  <Link className="link" to={menu.link}>
                    {menu.name}
                  </Link>
                </span>
              </>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Prefooter;
