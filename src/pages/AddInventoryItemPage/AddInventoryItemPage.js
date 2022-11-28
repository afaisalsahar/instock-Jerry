import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import ItemAvailability from "../../components/ItemAvailability/ItemAvailability";
import ItemSubmit from "../../components/ItemSubmit/ItemSubmit";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import "./AddInventoryItemPage.scss";

const PORT = process.env.REACT_APP_PORT;
const URL = process.env.REACT_APP_URL;

// Initial input values set to empty string
const initialValues = {
  item_name: "",
  description: "",
  category: "",
  status: "",
  quantity: "",
  warehouse_id: "",
};

const AddInventoryItemPage = () => {
  const [inputValues, setInputValues] = useState(initialValues);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  // Making instance of useNavigate
  const navigate = useNavigate();

  // Sets quantity to default "0" if inventory is Out of Stock
  if (status === "outStock") inputValues.quantity = "0";

  // Assigning input values to initialValues
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  //   Toggle between status
  const handleToggleStatus = (e) => {
    const status = e.target.value;
    setStatus(status);
  };

  // On submit function
  const onSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      inputValues.item_name === "" ||
      inputValues.description === "" ||
      inputValues.category === "" ||
      inputValues.warehouse_id === "" ||
      inputValues.quantity === ""
    ) {
      setError(true);
    } else {
      // Post new inventory item
      axios
        .post(`${URL}${PORT}/inventories`, {
          item_name: inputValues.item_name,
          description: inputValues.description,
          category: inputValues.category,
          status: inputValues.status,
          warehouse_id: inputValues.warehouse_id,
          quantity: String(inputValues.quantity),
        })
        .then(() => {
          navigate("/inventories");
        })
        .catch((err) => {
          console.error("Failed to add new inventory", err);
        });
    }
  };

  console.log(inputValues);

  // Re-assigns status to correct string to match database
  if (status === "outStock") {
    inputValues.status = "Out of Stock";
  } else {
    inputValues.status = "In Stock";
  }

  return (
    <form className="inventory-add" onSubmit={onSubmit}>
      <div className="inventory-add__container-headers">
        <div className="inventory-add__container-header">
          <Link to={`/inventories`} className="inventory-add__arrow">
            <img
              src={backArrow}
              alt="back arrow"
              className="inventory-add__arrow-image"
            />
          </Link>
          <h1 className="inventory-add__title">Add New Inventory Item</h1>
        </div>
      </div>
      <div className="inventory-add__container-fields">
        <ItemDetails
          inputChange={handleInputChange}
          errorState={error}
          name={inputValues.item_name}
          description={inputValues.description}
          category={inputValues.category}
        />
        <ItemAvailability
          inputChange={handleInputChange}
          status={status}
          toggleStatus={handleToggleStatus}
          errorState={error}
          quantity={inputValues.quantity}
          warehouse={inputValues.warehouse_id}
        />
      </div>
      <ItemSubmit />
    </form>
  );
};

export default AddInventoryItemPage;
