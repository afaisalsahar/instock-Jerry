import "./ItemAvailability.scss";

const ItemAvailability = () => {
  return (
    <div className="inventory-add__container-details inventory-add__container-details--bottom">
      <h2 className="inventory-add__heading">Item Availability</h2>
      <fieldset className="inventory-add__fieldset">
        <legend>Status</legend>
        <div className="inventory-add__container-radio">
          <div className="inventory-add__container-option">
            <input
              className="inventory-add__radio"
              type="radio"
              id="inStock"
              name="drone"
              value="inStock"
              checked
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
              name="drone"
              value="outStock"
            />
            <label htmlFor="outStock" className="inventory-add__label-radio">
              Out of stock
            </label>
          </div>
        </div>
      </fieldset>
      <label htmlFor="quantity" className="inventory-add__label">
        Quantity
      </label>
      <input id="quantity" className="inventory-add__input" placeholder="0" />
      <label htmlFor="warehouse" className="inventory-add__label">
        Warehouse
      </label>
      <select
        id="warehouse"
        className="inventory-add__select"
        name="Please Select"
      >
        <option value="Boston">Please Select</option>
        <option value="Boston">Boston</option>
        <option value="Boston">Boston</option>
        <option value="Boston">Boston</option>
        <option value="Boston">Boston</option>
        <option value="Boston">Boston</option>
        <option value="Boston">Boston</option>
        <option value="Boston">Boston</option>
        <option value="Boston">Boston</option>
      </select>
    </div>
  );
};

export default ItemAvailability;
