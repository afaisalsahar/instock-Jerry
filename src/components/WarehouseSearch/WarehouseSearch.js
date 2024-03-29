import "./WarehouseSearch.scss";
import sortIcon from "../../assets/images/Icons/sort-24px.svg"
import { Link } from "react-router-dom";

function WarehouseSearch() {
    return(
        <>
            <div className="warehouse-search__container">
                <h1 className="warehouse-search__title">Warehouses</h1>
                <input className="warehouse-search__input"type="text" placeholder="Search..."></input>
                <Link to="/warehouses/add" className="warehouse-search__button">+ Add New Warehouse</Link>
            </div>
            <div className="warehouse-header">
                <div className="warehouse-header__container warehouse-header__name-container">
                    <h4 className="warehouse-header__title">Warehouse</h4>
                    <img className="warehouse-header__sort" src={sortIcon} alt="sort icon"/>
                </div>
                <div className="warehouse-header__container">
                    <h4 className="warehouse-header__title">Address</h4>
                    <img className="warehouse-header__sort" src={sortIcon} alt="sort icon"/>
                </div>
                <div className="warehouse-header__container">
                    <h4 className="warehouse-header__title">Contact Name</h4>
                    <img className="warehouse-header__sort" src={sortIcon} alt="sort icon"/>
                </div>
                <div className="warehouse-header__container">
                    <h4 className="warehouse-header__title">Contact Information</h4>
                    <img className="warehouse-header__sort" src={sortIcon} alt="sort icon"/>
                </div>
                <h4 className="warehouse-header__title-action">Actions</h4>
            </div>
        </>
    )
}

export default WarehouseSearch;