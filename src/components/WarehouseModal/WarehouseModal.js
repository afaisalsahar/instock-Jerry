import closeIcon from "../../assets/images/Icons/close-24px.svg"
import "./WarehouseModal.scss"

function WarehouseModal() {
    return(
        <>
            <article className="warehouse-modal__container">
                <div className="warehouse-modal__close-container">
                    <img className="warehouse-modal__close"src={closeIcon} alt="close icon"/>
                </div>
                <h1 className="warehouse-modal__title">Delete -- warehouse?</h1>
                <p className="warehouse-modal__details">Please confirm that you’d like to delete the Washington from the list of warehouses. You won’t be able to undo this action.</p>
                <div className="warehouse-modal__button-container">
                    <button className="warehouse-modal__cancel">Cancel</button>
                    <button className="warehouse-modal__delete">Delete</button>
                </div>
                </article>
            <div className="warehouse-modal__overlay"></div>
        </>
        
    )
}

export default WarehouseModal;