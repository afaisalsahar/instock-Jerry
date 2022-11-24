import React from 'react';
import { Link } from 'react-router-dom';
import editLogo from '../../assets/images/Icons/edit-24px.svg';
import deleteLogo from '../../assets/images/Icons/delete_outline-24px.svg';
import chevronLogo from '../../assets/images/Icons/chevron_right-24px.svg';
import './InventoryCard.scss'

function InventoryCard({ inventoryList }) {
    return(
        inventoryList.map((inventory) => {
            return(
        
            <div>
                 <div className='inventory-card' >
                     <div className='inventory-card__container'>
                         <h3 className='inventory-card__title inventory-card__title--hidden'>INVENTORY ITEM</h3>
                         <Link to={'/inventory/' + inventory.id} className='inventory-card__link'>{inventory.item_name}<img src={chevronLogo} alt=''/></Link>
                     </div>
                      <div className='inventory-card__container'>
                         <h3 className='inventory-card__title inventory-card__title--hidden'>STATUS</h3>
                         <p className={inventory.status === 'In Stock' ? 'inventory-card__status inventory-card__status--is' : 'inventory-card__status inventory-card__status--oos'}>{inventory.status}</p>
                     </div>
                     <div className='inventory-card__container inventory-card__container--category'>
                         <h3 className='inventory-card__title inventory-card__title--hidden'>CATEGORY</h3>
                         <p className='inventory-card__paragraph'>{inventory.category}</p>
                     </div>
                     <div className='inventory-card__container'>
                         <h3 className='inventory-card__title inventory-card__title--hidden'>QTY</h3>
                         <p className='inventory-card__paragraph'>{inventory.quantity}</p>
                     </div>
                     {/* <div className='inventory-card__container inventory-card__container--margin'>
                         <h3 className='inventory-card__title inventory-card__title--hidden'>WAREHOUSE</h3>
                         <p className='inventory-card__paragraph'>{inventory.warehouses.warehouse_name}</p>
                     </div> */}
                    {/* <div className='inventory-card__container inventory-card__container--buttons'>
                         <button onClick={this.clickHandler} className='inventory-card__button btn-openModal'><img src={deleteLogo} alt=''/></button>
                         <Link className='inventory-card__button' to={'/inventory/edit/' + inventory.id}><img src={editLogo} alt=''/></Link>
                     </div> */}
                 </div>
                
            </div>
        );
    })
    )
}

export default InventoryCard;