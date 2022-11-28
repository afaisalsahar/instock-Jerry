import errorIcon from "../../assets/images/Icons/error-24px.svg";
import "./InventoryDetailsEdit.scss";

const InventoryDetailsEdit = ({
  inputChange,
  errorState,
  name,
  description,
  category,
}) => {
  return (
    <div className="inventory-edit__container-details">
      <div className="inventory-edit__container-border  inventory-edit__container-border--left">
        <h2 className="inventory-edit__heading">Item Details</h2>
        <label htmlFor="name" className="inventory-edit__label">
          Item Name
        </label>
        <input
          id="name"
          className="inventory-edit__input"
          placeholder="Item Name"
          name="item_name"
          value={name}
          onChange={inputChange}
        />
        <div
          className={
            errorState && name === ""
              ? "inventory-edit__container-error"
              : "inventory-edit__container-error--hidden"
          }
        >
          <img src={errorIcon} alt="error" />
          <p className="inventory-edit__error-text">This field is required</p>
        </div>
        <label htmlFor="description" className="inventory-edit__label">
          Description
        </label>
        <textarea
          id="description"
          className="inventory-edit__textarea"
          placeholder="Please enter a brief description..."
          name="description"
          value={description}
          onChange={inputChange}
        ></textarea>
        <div
          className={
            errorState && description === ""
              ? "inventory-edit__container-error"
              : "inventory-edit__container-error--hidden"
          }
        >
          <img src={errorIcon} alt="error" />
          <p className="inventory-edit__error-text">This field is required</p>
        </div>
        <label htmlFor="category" className="inventory-edit__label">
          Category
        </label>
        <select
          id="category"
          className="inventory-edit__select"
          name="category"
          value={category}
          onChange={inputChange}
        >
          <option value="selectCategory">Please Select</option>
          <option value="Electronics">Electronics</option>
          <option value="Gear">Gear</option>
          <option value="Accessories">Accessories</option>
          <option value="Apparel">Apparel</option>
          <option value="Health">Health</option>
        </select>
        <div
          className={
            errorState && category === ""
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

export default InventoryDetailsEdit;
