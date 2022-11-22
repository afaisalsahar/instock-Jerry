import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo/InStock-Logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__conatiner-logo">
            <Link to="/warehouses">
              <img src={logo} alt="InStock Logo" className="nav__logo" />
            </Link>
          </div>
          <div className="nav__container-links">
            <div className="nav__container-link nav__container-link--active">
              <Link to="/warehouses" className="nav__link nav__link--active">
                Warehouse
              </Link>
            </div>
            <div className="nav__container-link">
              <Link to="/inventories" className="nav__link">
                Inventory
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
