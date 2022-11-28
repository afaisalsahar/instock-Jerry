import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import arrowLogo from "../../assets/images/Icons/arrow_back-24px.svg";
import "./InventoryEdit.scss";
import { useState, useEffect } from "react";

// ENV variables
const URL = process.env.REACT_APP_URL;
const PORT = process.env.REACT_APP_PORT;

const InventoryEdit = () => {
  const {id} = useParams();
  const navigate = useNavigate();


//   useEffect(() => {
//     axios.get(`${URL}${PORT}/inventories/${id}`)
//     .then((response) => {
//         setInventoryDetails(response.data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// },[])

  useEffect(() => {
    axios.get(`${URL}${PORT}/inventories/${id}`)
    .then((response) => {
        setInventoryDetails(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
  },[])


  const [inventoryDetails, setInventoryDetails] = useState([]);
  // const [inventoryValid, setInventoryValid] = useState(itemFields.value)
    // const [hasQuantity, setHasQuantity] = useState(false);
  //   const onChangeCheckBox = (e) => {
  //   setHasQuantity(e.target.checked);
  // };

  const itemFields = {
    value: {
      name: "",
      description: "",
      category: "",
      status: "",
      quantity: "",
      warehouse: "",
    },
    valid: {
      name: true,
      description: true,
      category: true,
      status: true,
      quantity: true,
      warehouse: true,
    },
  };

  // const handleChange = (e) => {
  //   setItem({
  //     ...item
  //   })
  // }


//   initial state
     const state= {
          inStock: false
      };

//   change instock state
  const changeStockAvailabilityFalse = () => {
    this.setState({ inStock: true });
  };
  //change instock state
  const changeStockAvailabilityTrue = () => {
    this.setState({ inStock: false });
  };

  //POST to edit inventory item
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const itemName = form.itemNameInput.value;
    const description = form.descriptionInput.value;
    const category = form.categoryInput.value;
    const status = !this.state.inStock;
    const warehouse = form.warehouseSelect.value;

    if (!(itemName && description && category && status && warehouse)) {
      return alert("Please fill in all fields before proceeding.");
    }

    axios
      .put(`http://localhost:8080/inventories/${id}`, {
        itemName: itemName,
        description: description,
        category: category,
        status: status,
        warehouse: warehouse,
      })
      .then((response) => {
        handleAlert();
      });
  };

    const handleAlert = ()=>{
      alert("Edited item successfully!")
      navigate('/inventories')
  }

  return (
    <div className="outer__div">
      <div className="editInven">
        <div className="header__div">
          <Link to="/inventories">
            <img className="header__arrow" src={arrowLogo} alt="Arrow" />
          </Link>
          <h1 className="header__title">Edit Inventory Item</h1>
        </div>
        <form
          id="editInven__form"
          className="editInven__form"
          onSubmit={handleSubmit}
        >

          <div className="editInven__div">
            <div className="editInven__left">
              <h2 className="editInven__title">Item Details</h2>
              <h3 className="editInven__label">Item Name</h3>
              <input
                className="editInven__uploadName menus"
                type="text"
                placeholder="Item name"
                value={inventoryDetails.item_name}
              ></input>
              <h3 className="editInven__label">Description</h3>
              <textarea
                className="editInven__description menus menus-description"
                placeholder="Item Description"
                name="descriptionInput"
                type="text"
                value={inventoryDetails.description}
              ></textarea>
              <h3 className="editInven__label">Category</h3>
              <select
                className="dropdown"
                name="categoryInput"
                id="categoryInput"
                placeholder="Please select"
                value={inventoryDetails.category}
              >
                <option value="" disabled selected>
                  Please Select
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Gear">Gear</option>
                <option value="Apparel">Apparel</option>
                <option value="Accessories">Accessories</option>
                <option value="Health">Health</option>
              </select>
            </div>
            <div className="editInven__right">
              <h2 className="editInven__title">Item Availability</h2>
              <h3 className="editInven__label">Status</h3>
              <div className="editInven__form">
                <input
                  id = "inStock"
                  type="radio"
                  name="stock"
                  value={inventoryDetails.status}
                  onChange={changeStockAvailabilityTrue}
                ></input>
                <label className="button__label" for="InStock">
                  In Stock
                </label>
                <input
                  id = "OutofStock"
                  type="radio"
                  name="stockOrNoStock"
                  value={inventoryDetails.status}
                  onChange={changeStockAvailabilityFalse}
                ></input>
                <label className="button__label" for="OutofStock">
                  Out of Stock
                </label>
                
                <h3 className="editInven__label">Warehouse</h3>
                <select
                  className="menus"
                  name="warehouseSelect"
                  id="warehouseSelect"
                  placeholder="Please Select"
                  value={inventoryDetails.warehouse_name}
                >
                  <option value="" disabled selected>
                    Please Select
                  </option>
                  <option value="Boston">Boston</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Washington">Washington</option>
                  <option value="Santa Monica">Santa Monica</option>
                  <option value="Jersey">Jersey</option>
                  <option value="Seattle">Seattle</option>
                  <option value="Miami">Miami</option>
                  <option value="SF">SF</option>
                </select>
              </div>
            </div>
          </div>
        </form>
        <div className="editInven__button">
          <Link to="/inventories" className="editInven__cancel">
            Cancel
          </Link>
          <button
            className="editInven__add"
            type="submit"
            form="editInven__form"
            onSubmit={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default InventoryEdit;


// import React from 'react';


// // import axios from "axios";

// // import arrowBack from "../../assets/images/icons/arrow_back-24px.svg";

// import { Link, useNavigate } from 'react-router-dom';

// import { useState} from "react";

// import { useParams} from "react-router-dom";

// import axios from "axios";

// const InventoryEdit = ({warehouseFilter, inventoryToDisplay}) => {

//     const [updatedMessage, setupdatedMessage] = useState("");


//     const initWarehouseName = warehouseFilter.find((warehouse)=>{
//         return warehouse.id === inventoryToDisplay.warehouse_id
//     })

//     const [warehouseName, setWarehouseName] = useState(initWarehouseName.warehouse_name);

//     const handleWarehouseNameChange = (event) => {
//         setWarehouseName(event.target.value);
//     };

//     const { id } = useParams();

//     let inventoryName = inventoryToDisplay.item_name;
//     let inventoryDescription = inventoryToDisplay.description;
//     let inventoryCategory = inventoryToDisplay.category;
//     let inventoryStatus = inventoryToDisplay.status;
//     let inventoryQuantity = inventoryToDisplay.quantity;

//     const [itemName, setItemName] = useState(inventoryName);

//     const handleItemNameChange = (event) => {
//       setItemName(event.target.value);
//     };

//     const [description, setDescription] = useState(inventoryDescription);

//     const handleDescriptionChange = (event) => {
//       setDescription(event.target.value);
//     };

//     const [category, setCategory] = useState(inventoryCategory);

//     const handleCategoryChange = (event) => {
//       setCategory(event.target.value);
//     };

//     const [status, setStatus] = useState(inventoryStatus);

//     const [quantity, setQuantity] = useState(inventoryQuantity);

//     const handleQuantityChange = (event) => {
//       setQuantity(event.target.value);
//     };

//     const handleStatusChange = (event) => {
//         const target = event.target;
//         if (target.checked) {
//           setStatus(target.value);
//         }

//         if(target.value === "Out of Stock"){
//             setQuantity(0)
//         }

//     };

//     const navigateInventoryPage = useNavigate();

//     const handleCancelClick = (event) => {
//         event.preventDefault();
//         navigateInventoryPage("/inventories")
//     };


//     const handleUpdateSaved = (event) => {
//         event.preventDefault();
//         const selectedWarehouse = warehouseFilter.find((warehouse)=>{
//             return warehouse.warehouse_name === warehouseName
//         })
//             const urlForInventoryUpdate = `http://localhost:8000/inventories/${id}`
//             axios
//             .put(urlForInventoryUpdate, {
//                 warehouse_id: selectedWarehouse.id,
//                 item_name: itemName,
//                 description: description,
//                 category: category,
//                 status: status,
//                 quantity: quantity
//             })
//             .then(setupdatedMessage("Thank you for your upload"))
//             .catch((error) => {
//                 console.log(error);
//             });
//     };

//     if(!warehouseName|| !itemName || !description || !category || !status || !quantity || !initWarehouseName){
//         <div>Loading....</div>
//     }

//     return (
//         <div className="inventory-edit-form-top">
//             <Link to={`/inventory`} ><div className="inventory-edit-form-top__nav-div">
//                 <img src={arrowBack} alt="Arrow back"></img>
//                 <h2>Edit Inventory Item</h2>
//             </div></Link>
//             <form onSubmit={handleUpdateSaved} className='inventory-edit-form'>
//                 <div className="inventory-edit-form__item-details">
//                     <h2 className="inventory-edit-form__main-header">Item Details</h2>
//                     <div>
//                         <label className="inventory-edit-form__headings" htmlFor="name">Item Name</label>
//                         <input type="text" value={itemName} onChange={handleItemNameChange} className="inventory-edit-form__name" id="name" name="name"></input>
//                     </div>
//                     <div>
//                         <label className="inventory-edit-form__headings" htmlFor="description">Description</label>
//                         <textarea type="text" value={description} onChange={handleDescriptionChange} className="inventory-edit-form__description" id="description" name="description"></textarea>
//                     </div>
//                     <div>
//                         <label className="inventory-edit-form__headings" htmlFor="category">Category</label>
//                         <select onChange={handleCategoryChange} className="inventory-edit-form__category" name="categories" id="category">
//                         <option value={category}>{category}</option>
//                         <option value="Health">Health</option>
//                         <option value="Gear">Gear</option>
//                         <option value="Electronics">Electronics</option>
//                         <option value="Apparel">Apparel</option>
//                         <option value="Accessories">Accessories</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="inventory-edit-form__item-availability">
//                     <h2 className="inventory-edit-form__main-header">Item Availability</h2>
//                     <div className="inventory-edit-form__status-container">
//                         <div>
//                             <label className="inventory-edit-form__headings">Status</label>
//                             <div className="inventory-edit-form__everything-radio-container">
//                                 <div className="inventory-edit-form__radio-container">
//                                     <input type="radio" id="in-stock" name="in-out-stock" value="In Stock" checked={status === "In Stock"} onChange={handleStatusChange}/>
//                                     <label className="inventory-edit-form__label" htmlFor="in-stock">In stock</label>
//                                 </div>
//                                 <div className="inventory-edit-form__radio-container">
//                                     <input type="radio" id="out-of-stock" name="in-out-stock" value="Out of Stock" checked={status === "Out of Stock"} onChange={handleStatusChange}/>
//                                     <label className="inventory-edit-form__label" htmlFor="out-of-stock">Out of stock</label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="inventory-edit-form__quantity-container">
//                             <label hidden={status === "Out of Stock"} className="inventory-edit-form__headings" htmlFor="quantity">Quantity</label>
//                             <input hidden={status === "Out of Stock"} type="text" value={quantity} onChange={handleQuantityChange} className="inventory-edit-form__quantity" id="quantity"/>
//                         </div>
//                     <div>
//                         <div>
//                             <label className="inventory-edit-form__headings" htmlFor="warehouse">Warehouse</label>
//                             <select onChange={handleWarehouseNameChange} className="inventory-edit-form__warehouse" name="categories" id="warehouse">
//                             {warehouseFilter.map((warehouse, index)=>{
//                                return <option key={index} value={warehouse.warehouse_name}>{warehouse.warehouse_name}</option>
//                             })}
//                             </select>
//                         </div>
//                         <p className="inventory-edit-form__message">{updatedMessage}</p>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="inventory-edit-form__button-container">
//                     <button onClick={handleCancelClick} className="inventory-edit-form__cancel-button">Cancel</button>
//                     <button type="submit" className="inventory-edit-form__save-button">Save</button>
//                 </div>

//                 {/* <input type="text" value={inventoryWarehouse} className="comments__comment"></input> */}
//                 {/* <p>{inventoryWarehouse}</p> */}
//             </form>
//         </div>
//     );
// };

// export default InventoryEdit;