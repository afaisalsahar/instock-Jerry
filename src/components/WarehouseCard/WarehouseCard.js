import editLogo from "../../assets/images/Icons/edit_blue-24px.svg";
import deleteLogo from "../../assets/images/Icons/delete_outline-24px.svg";
import chevronLogo from "../../assets/images/Icons/chevron_right-24px.svg";
import "./WarehouseCard.scss"

function WarehouseCard({ warehouseList }) {
    return(
        warehouseList.map((warehouse) => {
            return(
            <article key={warehouse.id} className="warehouse-card">
                <div className="warehouse-card__container-name">
                    <h4 className="warehouse-card__title">Warehouse</h4>
                    <div className="warehouse-card__name-container">
                        <p className="warehouse-card__warehouse">{warehouse.warehouse_name}</p>
                        <img className="warehouse-card__warehouse-chevron" src={chevronLogo} alt="right chevron icon"/>
                    </div>
                </div>
                <div className="warehouse-card__container-contact-name">
                    <h4 className="warehouse-card__title">Contact Name</h4>
                    <p className="warehouse-card__contact-name">{warehouse.contact_name}</p>
                </div>
                <div className="warehouse-card__container-address">
                    <h4 className="warehouse-card__title">Address</h4>
                    <p className="warehouse-card__address">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                </div>
                <div className="warehouse-card__container-contact-info">
                    <h4 className="warehouse-card__title">Contact Information</h4>
                    <p className="warehouse-card__contact-info">{warehouse.contact_phone} {warehouse.contact_email}</p>
                </div>
                <div className="warehouse-card__icon-container">
                    <img className="warehouse-card__delete" src={deleteLogo} alt="delete icon"/>
                    <img className="warehouse-card__edit" src={editLogo} alt="edit icon"/>
                </div>
            </article>
            )
        })
    )
}

export default WarehouseCard;