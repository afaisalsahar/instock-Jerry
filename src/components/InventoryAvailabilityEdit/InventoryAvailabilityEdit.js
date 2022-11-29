import { useState, useEffect } from "react";
import axios from "axios";
import DropdownWarehouses from "../DropdownWarehouses/DropdownWarehouses";
import errorIcon from "../../assets/images/Icons/error-24px.svg";
import "./InventoryAvailabilityEdit.scss";

const PORT = process.env.REACT_APP_PORT;
const URL = process.env.REACT_APP_URL;

const InventoryAvailabilityEdit = ({
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
    <div className="inventory-edit__container-details inventory-edit__container-details--bottom">
      <div className="inventory-edit__container-border">
        <h2 className="inventory-edit__heading">Item Availability</h2>
        <fieldset className="inventory-edit__fieldset">
          <legend>Status</legend>
          <div className="inventory-edit__container-radio">
            <div className="inventory-edit__container-option">
              <input
                className="inventory-edit__radio"
                type="radio"
                id="inStock"
                name="status"
                value="inStock"
                onClick={toggleStatus}
                checked={status === "inStock" ? true : false}
              />
              <label htmlFor="inStock" className="inventory-edit__label-radio">
                In stock
              </label>
            </div>
            <div className="inventory-edit__container-option">
              <input
                className="inventory-edit__radio"
                type="radio"
                id="outStock"
                name="status"
                value="outStock"
                onClick={toggleStatus}
                checked={status === "outStock" ? true : false}
              />
              <label htmlFor="outStock" className="inventory-edit__label-radio">
                Out of stock
              </label>
            </div>
          </div>
        </fieldset>
        <div
          className={`${
            status === "outStock"
              ? "inventory-edit__container-quantity--hidden"
              : "inventory-edit__container-quantity"
          }`}
        >
          <label htmlFor="quantity" className="inventory-edit__label">
            Quantity
          </label>
          <input
            id="quantity"
            className="inventory-edit__input"
            placeholder="0"
            name="quantity"
            value={quantity}
            onChange={inputChange}
          />
        </div>
        <div
          className={
            errorState && quantity === "" && status !== "outStock"
              ? "inventory-edit__container-error"
              : "inventory-edit__container-error--hidden"
          }
        >
          <img src={errorIcon} alt="error" />
          <p className="inventory-edit__error-text">This field is required</p>
        </div>
        <label htmlFor="warehouse" className="inventory-edit__label">
          Warehouse
        </label>
        <select
          id="warehouse"
          className="inventory-edit__select"
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
              ? "inventory-edit__container-error"
              : "inventory-edit__container-error--hidden"
          }
        >
          <img src={errorIcon} alt="error" />
          <p className="inventory-edit__error-text">This field is required</p>
        </div>
      </div>
    </div>
  );
};

export default InventoryAvailabilityEdit;
