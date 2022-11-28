import axios from "axios"
import closeIcon from "../../assets/images/Icons/close-24px.svg"
import "./WarehouseInventoryModal.scss"
import { useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_URL;
const PORT = process.env.REACT_APP_PORT;

function WarehouseInventoryModal({ isOpen, setIsOpen, itemName, warehouseName, itemId, warehouseId }) {
    const navigate = useNavigate()

    const deleteInventory = () => {
        axios.delete(`${URL}${PORT}/inventories/${itemId.id}`)
        .then(() => {
           navigate(`/warehouses/${warehouseId}`)
           setIsOpen(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    if (isOpen === false){
        return null
    }
    return(
        <div open={isOpen}>
            <article className="warehouseinventory-modal__container">
                <div className="warehouseinventory-modal__close-container">
                    <img onClick={() => setIsOpen(false)} className="warehouseinventory-modal__close"src={closeIcon} alt="close icon"/>
                </div>
                <h1 className="warehouseinventory-modal__title">Delete {itemName.item} inventory item?</h1>
                <p className="warehouseinventory-modal__details">Please confirm that you’d like to delete {itemName.item} from the inventory list in {warehouseName} warehouse. You won’t be able to undo this action.</p>
                <div className="warehouseinventory-modal__button-container">
                    <button onClick={() => setIsOpen(false)} className="warehouseinventory-modal__cancel">Cancel</button>
                    <button onClick={() => deleteInventory()} className="warehouseinventory-modal__delete">Delete</button>
                </div>
              </article>
        <div className="warehouseinventory-modal__overlay"></div>
      </div>
  );
}

export default WarehouseInventoryModal;
