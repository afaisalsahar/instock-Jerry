import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import arrowLogo from "../../assets/images/Icons/arrow_back-24px.svg";
import "./InventoryEdit.scss";


// ENV variables
// const URL = process.env.REACT_APP_URL;
// const PORT = process.env.REACT_APP_PORT;

const InventoryItemEdit = () => {
    const [editItem, setEditItem] = useState([]);
    const [hasQuantity, setHasQuantity] = useState(false);
    const onChangeCheckBox = (e) => {
    setHasQuantity(e.target.checked);
  };

    const [noQuantity, setNoQuantity] = useState("");
    const onChangePromo = (e) => {
    setNoQuantity(e.target.value);
  };

//     useEffect(() => {
//         axios.get(`${URL}${PORT}/inventories`)
//         .then((response) => {
//             setEditItem(response.data)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     },[])

//   initial state
//      const state= {
//           inStock: false
//       };

    // const [edit, setEdit] = useState();

//   change instock state
  const changeStockAvailabilityFalse = () => {
    this.setState({ inStock: true });
  };
  //change instock state
  const changeStockAvailabilityTrue = () => {
    this.setState({ inStock: false });
  };


    // const [isChecked, setIsChecked] = useState(false);

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
      .post("http://localhost:8080/inventories/editInven", {
        itemName: itemName,
        description: description,
        category: category,
        status: status,
        warehouse: warehouse,
      })
      .then((response) => {
        console.log(response);
        this.handleAlert();
      });
  };

  // const handleAlert = ()=>{
  //     alert("Edited item successfully!")
  //     window.location = '/inventories'
  // }

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
              ></input>
              <h3 className="editInven__label">Description</h3>
              <textarea
                className="editInven__description menus menus-description"
                placeholder="Item Description"
                name="descriptionInput"
                type="text"
              ></textarea>
              <h3 className="editInven__label">Category</h3>
              <select
                className="dropdown"
                name="categoryInput"
                id="categoryInput"
                placeholder="Please select"
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
                  type="radio"
                  name="stock"
                  value="InStock"
                  onChange={changeStockAvailabilityTrue}
                ></input>
                <label className="button__label" for="InStock">
                  In Stock
                </label>
                <input
                  type="radio"
                  name="stockOrNoStock"
                  value="OutofStock"
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
                >
                  <option value="" disabled selected>
                    Please Select
                  </option>
                  <option value="New York">New York</option>
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

export default InventoryItemEdit;