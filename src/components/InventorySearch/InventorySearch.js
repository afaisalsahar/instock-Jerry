import "./InventorySearch.scss";
import sortIcon from "../../assets/images/Icons/sort-24px.svg";
import { Link } from "react-router-dom";

function InventorySearch() {
    return(
        <>
            <div className="inventory-search__container">
                <h1 className="inventory-search__title">Inventory</h1>
                <input className="inventory-search__input"type="text" placeholder="Search..."></input>
                <Link to= "/inventories/add" className="inventory-search__button">+ Add New Item</Link>
            </div>
            <div className="inventory-header">
                <div className="inventory-header__container inventory-header__container--items">
                    <h4 className="inventory-header__title">

                        INVENTORY ITEMS
                        <img className="inventory-header__sort" src={sortIcon} alt="sort icon"/>
                    </h4>
                </div>
                <div className="inventory-header__container inventory-header__container--category">
                    <h4 className="inventory-header__title">
                        CATEGORY
                        <img className="inventory-header__sort" src={sortIcon} alt="sort icon"/>
                    </h4>
                </div>
                <div className="inventory-header__container inventory-header__container--status">
                    <h4 className="inventory-header__title">
                        STATUS
                        <img className="inventory-header__sort" src={sortIcon} alt="sort icon"/>
                    </h4>
                </div>
                <div className="inventory-header__container inventory-header__container--qty">
                    <h4 className="inventory-header__title">
                        QTY
                        <img className="inventory-header__sort" src={sortIcon} alt="sort icon"/>
                    </h4>
                </div>
                <div className="inventory-header__container inventory-header__container--warehouse">
                    <h4 className="inventory-header__title">
                        WAREHOUSE
                        <img className="inventory-header__sort" src={sortIcon} alt="sort icon"/>
                    </h4>
                </div>
                <div className="inventory-header__container inventory-header__container--actions">
                    <h4 className="inventory-header__title-action">Actions</h4>
                </div>
            </div>
        </>
    )
}

export default InventorySearch;