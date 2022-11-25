import { Link } from "react-router-dom";
import chevronArrowIcon from "../../assets/images/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/Icons/edit_blue-24px.svg";
import "./WarehouseDetailsInventory.scss";

const WarehouseDetailsInventory = () => {
  return (
    <section className="inventory">
      <div className="inventory__container">
        <div className="inventory__container-sub">
          <div className="inventory__container-details">
            <h4 className="inventory__header">inventory</h4>
            <Link className="inventory__container-chevron">
              <p className="inventory__text inventory__text--blue">
                television
              </p>
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
              electronics
            </p>
          </div>
        </div>
        <div className="inventory__container-sub">
          <div className="inventory__container-details">
            <h4 className="inventory__header">status</h4>
            <div className="inventory__container-stock inventory__container-stock--instock inventory__container-stock--outstock">
              <p className="inventory__stock inventory__stock--instock inventory__stock--outstock">
                in stock
              </p>
            </div>
          </div>
          <div className="inventory__container-details">
            <h4 className="inventory__header">quantity</h4>
            <p className="inventory__text">500</p>
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
