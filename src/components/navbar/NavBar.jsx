import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/GPT-3.svg";
const NavBar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            {" "}
            <a href="#wgpt3">What is GPT?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#Blog">Library</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
