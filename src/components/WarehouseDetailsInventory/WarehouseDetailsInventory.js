import { Link } from "react-router-dom";
import chevronArrowIcon from "../../assets/images/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/Icons/edit_blue-24px.svg";
import "./WarehouseDetailsInventory.scss";

const WarehouseDetailsInventory = ({ item, category, status, quantity }) => {
  return (
    <section className="inventory">
      <div className="inventory__container">
        <div className="inventory__container-sub">
          <div className="inventory__container-details">
            <h4 className="inventory__header">inventory</h4>
            <Link className="inventory__container-chevron">
              <p className="inventory__text inventory__text--blue">{item}</p>
              <img
                src={chevronArrowIcon}
                alt="chevron arrow"
                className="inventory__image"
              />
            </Link>
          </div>
          <div className="inventory__container-details">
            <h4 className="inventory__header">category</h4>
            <p className="inventory__text inventory__text--hidden">
              {category}
            </p>
          </div>
        </div>
        <div className="inventory__container-sub">
          <div className="inventory__container-details">
            <h4 className="inventory__header">status</h4>
            <div
              className={`inventory__container-stock ${
                status === "In Stock"
                  ? "inventory__container-stock--instock "
                  : "inventory__container-stock--outstock"
              }`}
            >
              <p
                className={`inventory__stock ${
                  status === "In Stock"
                    ? "inventory__stock--instock "
                    : "inventory__stock--outstock"
                }`}
              >
                {status}
              </p>
            </div>
          </div>
          <div className="inventory__container-details">
            <h4 className="inventory__header">quantity</h4>
            <p className="inventory__text">{quantity}</p>
          </div>
        </div>

        <div className="inventory__container-icons">
          <Link className="inventory__link">
            <img src={deleteIcon} alt="delete" className="inventory__image" />
          </Link>
          <Link className="inventory__link inventory__link--edit">
            <img
              src={editIcon}
              alt="edit pencil"
              className="inventory__image"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WarehouseDetailsInventory;
