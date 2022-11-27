import "./ItemDetails.scss";

const ItemDetails = () => {
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
        />
        <label htmlFor="description" className="inventory-add__label">
          Description
        </label>
        <textarea
          id="description"
          className="inventory-add__textarea"
          placeholder="Please enter a brief description..."
        ></textarea>
        <label htmlFor="category" className="inventory-add__label">
          Category
        </label>
        <select
          id="category"
          className="inventory-add__select"
          name="Please Select"
        >
          <option value="electronics">Please Select</option>
          <option value="electronics">Electronics</option>
          <option value="electronics">Electronics</option>
          <option value="electronics">Electronics</option>
          <option value="electronics">Electronics</option>
          <option value="electronics">Electronics</option>
          <option value="electronics">Electronics</option>
          <option value="electronics">Electronics</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
    </div>
  );
};

export default ItemDetails;
