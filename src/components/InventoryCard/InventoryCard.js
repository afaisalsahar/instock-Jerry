import React from 'react';
import { Link } from 'react-router-dom';
import editLogo from '../../assets/images/Icons/edit_blue-24px.svg';
import deleteLogo from '../../assets/images/Icons/delete_outline-24px.svg';
import chevronLogo from '../../assets/images/Icons/chevron_right-24px.svg';
import './InventoryCard.scss'

function InventoryCard({ inventoryList }) {
    
    return(
        inventoryList.map((inventory) => {
            return(
                 <div key={inventory.id} className='inventory-card' >
                     <div className='inventory-card__container inventory-card__container--items'>
                         <h3 className='inventory-card__title inventory-card__title--hidden'>INVENTORY ITEM</h3>
                         <Link to={'/inventories/' + inventory.id} className='inventory-card__link'>{inventory.item_name}<img src={chevronLogo} alt='Chevron Logo'/></Link>
                     </div>
                      <div className='inventory-card__container inventory-card__container--status'>
                         <h3 className='inventory-card__title inventory-card__title--hidden'>STATUS</h3>
                         <p className={inventory.status === 'In Stock' ? 'inventory-card__status inventory-card__status--is' : 'inventory-card__status inventory-card__status--oos'}>{inventory.status}</p>
                     </div>
                     <div className='inventory-card__container inventory-card__container--category'>
                         <h3 className='inventory-card__title inventory-card__title--hidden'>CATEGORY</h3>
                         <p className='inventory-card__paragraph'>{inventory.category}</p>
                     </div>
                     <div className='inventory-card__container inventory-card__container--qty'>
                         <h3 className='inventory-card__title inventory-card__title--hidden'>QTY</h3>
                         <p className='inventory-card__paragraph'>{inventory.quantity}</p>
                     </div>
                     <div className='inventory-card__container inventory-card__container--margin inventory-card__container--warehouse'>
                         <h3 className='inventory-card__title inventory-card__title--hidden'>WAREHOUSE</h3>
                         <p className='inventory-card__paragraph'>{inventory.warehouse_name}</p>
                     </div>
                    <div className='inventory-card__container inventory-card__container--buttons'>
                         <button onClick className='inventory-card__button btn-openModal'><img src={deleteLogo} alt='Delete Logo'/></button>
                         <Link className='inventory-card__button' to={`/inventories/${inventory.id}/edit`}><img src={editLogo} alt='Edit Logo'/></Link>
                     </div> 
                 </div>
                
        );
    })
    )
}

export default InventoryCard;