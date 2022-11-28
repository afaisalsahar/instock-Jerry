import errorIcon from "../../assets/images/Icons/error-24px.svg";
import "./ItemDetails.scss";

const ItemDetails = ({
  inputChange,
  errorState,
  name,
  description,
  category,
}) => {
  return (
    <div className="inventory-add__container-details">
      <div className="inventory-add__container-border  inventory-add__container-border--left">
        <h2 className="inventory-add__heading">Item Details</h2>
        <label htmlFor="name" className="inventory-add__label">
          Item Name
        </label>
        <input
          id="name"
          className="inventory-add__input"
          placeholder="Item Name"
          name="item_name"
          value={name}
          onChange={inputChange}
        />
        <div
          className={
            errorState && name === ""
              ? "inventory-add__container-error"
              : "inventory-add__container-error--hidden"
          }
        >
          <img src={errorIcon} alt="error" />
          <p className="inventory-add__error-text">This field is required</p>
        </div>
        <label htmlFor="description" className="inventory-add__label">
          Description
        </label>
        <textarea
          id="description"
          className="inventory-add__textarea"
          placeholder="Please enter a brief description..."
          name="description"
          value={description}
          onChange={inputChange}
        ></textarea>
        <div
          className={
            errorState && description === ""
              ? "inventory-add__container-error"
              : "inventory-add__container-error--hidden"
          }
        >
          <img src={errorIcon} alt="error" />
          <p className="inventory-add__error-text">This field is required</p>
        </div>
        <label htmlFor="category" className="inventory-add__label">
          Category
        </label>
        <select
          id="category"
          className="inventory-add__select"
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

export default ItemDetails;
