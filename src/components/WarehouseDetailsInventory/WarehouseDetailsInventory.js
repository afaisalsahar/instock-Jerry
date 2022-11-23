import { Link } from "react-router-dom";
import chevronArrowIcon from "../../assets/images/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/Icons/edit_blue-24px.svg";
import "./WarehouseDetailsInventory.scss";

const WarehouseDetailsInventory = () => {
  return (
    <div className="inventory__container">
      <div className="inventory__container-row">
        <div className="inventory__container-text">
          <h4 className="inventory__text">inventory item</h4>
        </div>
        <div className="inventory__container-text">
          <h4 className="inventory__text">status</h4>
        </div>
      </div>
      <div className="inventory__container-row">
        <Link className="inventory__link">
          <h3 className="inventory__item inventory__item--highlight">
            television
          </h3>
          <img
            src={chevronArrowIcon}
            alt="chevron arrow"
            className="inventory__image"
          />
        </Link>
        <div className="inventory__container-text">
          <p className="inventory__text inventory__text--highlight">in stock</p>
        </div>
      </div>
      <div className="inventory__container-row">
        <div className="inventory__container-text">
          <h4 className="inventory__text">category</h4>
        </div>
        <div className="inventory__container-text">
          <h4 className="inventory__text">quantity</h4>
        </div>
      </div>
      <div className="inventory__container-row">
        <div className="inventory__container-text">
          <p className="inventory__item">electronics</p>
        </div>
        <div className="inventory__container-text">
          <p className="inventory__text">500</p>
        </div>
      </div>
      <div className="inventory__container-row">
        <h4 className="inventory__text inventory__text--hidden">actions</h4>
        <Link className="inventory_details__link">
          <img src={deleteIcon} alt="delete" className="inventory__image" />
        </Link>
        <Link className="inventory__details__link">
          <img src={editIcon} alt="edit" className="inventory__image" />
        </Link>
      </div>
    </div>
  );
};

export default WarehouseDetailsInventory;
