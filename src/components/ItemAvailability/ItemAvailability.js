import { useState, useEffect } from "react";
import axios from "axios";
import DropdownWarehouses from "../DropdownWarehouses/DropdownWarehouses";
import errorIcon from "../../assets/images/Icons/error-24px.svg";
import "./ItemAvailability.scss";

const PORT = process.env.REACT_APP_PORT;
const URL = process.env.REACT_APP_URL;

const ItemAvailability = ({
  inputChange,
  toggleStatus,
  status,
  errorState,
  quantity,
  warehouse,
}) => {
  const [warehouses, setWarehouses] = useState([]);

  // Getting warehouse
  useEffect(() => {
    axios
      .get(`${URL}${PORT}/warehouses`)
      .then(({ data }) => setWarehouses(data));
  }, []);

  return (
    <div className="inventory-add__container-details inventory-add__container-details--bottom">
      <div className="inventory-add__container-border">
        <h2 className="inventory-add__heading">Item Availability</h2>
        <fieldset className="inventory-add__fieldset">
          <legend>Status</legend>
          <div className="inventory-add__container-radio">
            <div className="inventory-add__container-option">
              <input
                className="inventory-add__radio"
                type="radio"
                id="inStock"
                name="status"
                value="inStock"
                onClick={toggleStatus}
              />
              <label htmlFor="inStock" className="inventory-add__label-radio">
                In stock
              </label>
            </div>
            <div className="inventory-add__container-option">
              <input
                className="inventory-add__radio"
                type="radio"
                id="outStock"
                name="status"
                value="outStock"
                onClick={toggleStatus}
              />
              <label htmlFor="outStock" className="inventory-add__label-radio">
                Out of stock
              </label>
            </div>
          </div>
        </fieldset>
        <div
          className={`${
            status === "outStock"
              ? "inventory-add__container-quantity--hidden"
              : "inventory-add__container-quantity"
          }`}
        >
          <label htmlFor="quantity" className="inventory-add__label">
            Quantity
          </label>
          <input
            id="quantity"
            className="inventory-add__input"
            placeholder="0"
            name="quantity"
            value={quantity}
            onChange={inputChange}
          />
        </div>
        <div
          className={
            errorState && quantity === "" && status !== "outStock"
              ? "inventory-add__container-error"
              : "inventory-add__container-error--hidden"
          }
        >
          <img src={errorIcon} alt="error" />
          <p className="inventory-add__error-text">This field is required</p>
        </div>
        <label htmlFor="warehouse" className="inventory-add__label">
          Warehouse
        </label>
        <select
          id="warehouse"
          className="inventory-add__select"
          name="warehouse_id"
          value={warehouse}
          onChange={inputChange}
        >
          <option value="selectWarehouse">Please Select</option>
          {warehouses.map((warehouse) => (
            <DropdownWarehouses warehouse={warehouse} key={warehouse.id} />
          ))}
        </select>
        <div
          className={
            errorState && warehouse === ""
              ? "inventory-add__container-error"
              : "inventory-add__container-error--hidden"
          }
        >
          <img src={errorIcon} alt="error" />
          <p className="inventory-add__error-text">This field is required</p>
        </div>
      </div>
    </div>
  );
};

export default ItemAvailability;
