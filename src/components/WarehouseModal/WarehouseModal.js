import axios from "axios"
import closeIcon from "../../assets/images/Icons/close-24px.svg"
import "./WarehouseModal.scss"
import { useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_URL;
const PORT = process.env.REACT_APP_PORT;

function WarehouseModal({ isOpen, setIsOpen, selectedWarehouse, warehouseName }) {

    const navigate = useNavigate()

    const deleteWarehouse = () => {
        axios.delete(`${URL}${PORT}/warehouses/${selectedWarehouse}`)
        .then(() => {
           navigate("/")
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
            <article className="warehouse-modal__container">
                <div className="warehouse-modal__close-container">
                    <img onClick={() => setIsOpen(false)} className="warehouse-modal__close"src={closeIcon} alt="close icon"/>
                </div>
                <h1 className="warehouse-modal__title">Delete {warehouseName} warehouse?</h1>
                <p className="warehouse-modal__details">Please confirm that you’d like to delete the Washington from the list of warehouses. You won’t be able to undo this action.</p>
                <div className="warehouse-modal__button-container">
                    <button onClick={() => setIsOpen(false)} className="warehouse-modal__cancel">Cancel</button>
                    <button onClick={() => deleteWarehouse()} className="warehouse-modal__delete">Delete</button>
                </div>
              </article>
        <div className="warehouse-modal__overlay"></div>
      </div>
  );
}

export default WarehouseModal;
