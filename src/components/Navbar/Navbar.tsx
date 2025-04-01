import Logo from "../../assets/Logo.avif";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const flexBetween = "flex items-center justify-between";

  const handleButtonClick = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <nav>
      <div
        className={`${flexBetween} bg-emerald-100 fixed top-0 z-30 w-full py-6  p-8`}
      >
        <div className={`${flexBetween} mr-4`}>
          <img
            src={Logo}
            alt="logo"
            // className=" h-16"
            width="90"
            height="148"
          />
        </div>
        <div className={`${flexBetween} w-full`}>
          <ul className={`${flexBetween} gap-8`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
            <li>
              <Link to="/oursugestion">Our Sugestion</Link>
            </li>
            <li>
              <Link to="/addvehicle">Add Vehicle</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
          <Button
            type="button"
            handleButtonClick={() => handleButtonClick(true)}
          >
            Become member
          </Button>
          <Modal
            open={isOpen}
            handleButtonClick={() => handleButtonClick(false)}
          >
            Become member modal
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
