import "./InventorySearch.scss";

function InventorySearch() {
    return(
        <>
            <div className="inventory-search__container">
                <h1 className="inventory-search__title">Inventory</h1>
                <input className="inventory-search__input"type="text" placeholder="Search..."></input>
                <button className="inventory-search__button">+ Add New Item</button>
            </div>
        </>
    )
}

export default InventorySearch;