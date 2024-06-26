import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="d-flex justify-content-around align-center text-light px-5 w-25 ">
      <h3>
        <Link
          to="https://www.linkedin.com/in/samip-neupane-058b87141/"
          target="_blank"
          className="link"
        >
          <FaLinkedin />
        </Link>{" "}
      </h3>
      <h3>
        <Link to="https://github.com/54m1p" target="_blank" className="link">
          <FaGithub />
        </Link>
      </h3>
      <h3>
        <Link
          to="https://www.instagram.com/samipneupane/"
          target="_blank"
          className="link"
        >
         <FaInstagram />
        </Link>
      </h3>
    </div>
  );
};

export default Socials;
