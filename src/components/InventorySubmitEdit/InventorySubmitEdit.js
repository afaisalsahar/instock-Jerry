import { Link } from "react-router-dom";
import "./InventorySubmitEdit.scss";

const InventorySubmitEdit = () => {
  return (
    <div className="inventory-edit__container-buttons">
      <div className="inventory-edit__container-cancel">
        <Link className="inventory-edit__cancel">Cancel</Link>
      </div>
      <div className="inventory-edit__container-add">
        <button className="inventory-edit__button">Save</button>
      </div>
    </div>
  );
};

export default InventorySubmitEdit;
