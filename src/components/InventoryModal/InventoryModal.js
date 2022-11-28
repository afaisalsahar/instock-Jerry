import axios from "axios"
import closeIcon from "../../assets/images/Icons/close-24px.svg"
import "./InventoryModal.scss"
import { useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_URL;
const PORT = process.env.REACT_APP_PORT;

function InventoryModal({ isOpen, setIsOpen, selectedInventory, inventoryName }) {

    const navigate = useNavigate()

    const deleteInventory = () => {
        axios.delete(`${URL}${PORT}/inventories/${selectedInventory}`)
        .then(() => {
           navigate("/inventories")
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
            <article className="inventory-modal__container">
                <div className="inventory-modal__close-container">
                    <img onClick={() => setIsOpen(false)} className="inventory-modal__close"src={closeIcon} alt="close icon"/>
                </div>
                <h1 className="inventory-modal__title">Delete {inventoryName} inventory item?</h1>
                <p className="inventory-modal__details">Please confirm that you’d like to delete {inventoryName} from the inventory list. You won’t be able to undo this action.</p>
                <div className="inventory-modal__button-container">
                    <button onClick={() => setIsOpen(false)} className="inventory-modal__cancel">Cancel</button>
                    <button onClick={() => deleteInventory()} className="inventory-modal__delete">Delete</button>
                </div>
              </article>
        <div className="inventory-modal__overlay"></div>
      </div>
  );
}

export default InventoryModal;
