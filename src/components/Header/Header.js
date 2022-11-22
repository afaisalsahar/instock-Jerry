import { Link, NavLink } from "react-router-dom";
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
            <div className="nav__container-link">
              <NavLink
                to="/warehouses"
                className={({ isActive }) =>
                  isActive ? "nav__link--active" : "nav__link"
                }
              >
                Warehouse
              </NavLink>
            </div>
            <div className="nav__container-link">
              <NavLink
                to="/inventories"
                className={({ isActive }) =>
                  isActive ? "nav__link--active" : "nav__link"
                }
              >
                Inventory
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
