import './InventoryList.scss';
import search from "../../assets/images/Icons/search-24px.svg"

const InventoryList = () => {

    return (
        <section className='inventory'>
            <div className='inventory__form'>
                <div className='inventory__header'>
                    <h1>Inventory</h1>
                </div>
                <div className='inventory__search'>
                <input className="inventory__placeholder" id="search" name="search"
                    placeholder="Search..."></input>
                <img src={search} alt="search input" className="inventory__search-icon" />
                <button className="upload__button">+Add New Item</button>
                </div>
            </div>
            <div className='inventory__card'>
                <div className='inventory__item'>

                </div>
                <div className='inventory__status'>

                </div>
                <div className='inventory__category'>
                    
                </div>
            </div>
        </section>
    )
}

export default InventoryList;