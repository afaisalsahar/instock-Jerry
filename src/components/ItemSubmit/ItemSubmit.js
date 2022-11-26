import { Link } from "react-router-dom";
import "./ItemSubmit.scss";

const ItemSubmit = () => {
  return (
    <div className="inventory-add__container-buttons">
      <div className="inventory-add__container-cancel">
        <Link className="inventory-add__cancel">Cancel</Link>
      </div>
      <div className="inventory-add__container-add">
        <button className="inventory-add__button">+ Add Item</button>
      </div>
    </div>
  );
};

export default ItemSubmit;
