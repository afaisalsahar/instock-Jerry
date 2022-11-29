import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import InventoryDetailsEdit from "../../components/InventoryDetailsEdit/InventoryDetailsEdit";
import InventoryAvailabilityEdit from "../../components/InventoryAvailabilityEdit/InventoryAvailabilityEdit";
import InventorySubmitEdit from "../../components/InventorySubmitEdit/InventorySubmitEdit";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import "./InventoryEditPage.scss";

const PORT = process.env.REACT_APP_PORT;
const URL = process.env.REACT_APP_URL;

const InventoryEditPage = () => {
  const [inputValues, setInputValues] = useState({});
  const [status, setStatus] = useState("inStock");
  const [error, setError] = useState(false);

  console.log(inputValues.quantity);
  console.log(status);

  const { id } = useParams();

  // Get data for inventory item based on ID
  useEffect(() => {
    axios.get(`${URL}${PORT}/inventories/${id}`).then(({ data }) => {
      const initialValues = {
        item_name: data.item_name,
        description: data.description,
        category: data.category,
        status: data.status,
        quantity: String(data.quantity),
        warehouse_id: data.warehouse_id,
      };

      setInputValues(initialValues);
    });
  }, [id]);

  // Reassigns status based on value of quantity
  useEffect(() => {
    if (inputValues.quantity === "0") setStatus("outStock");
  }, [inputValues.quantity]);

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
        .put(`${URL}${PORT}/inventories/${id}`, {
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

  // Re-assigns status to correct string to match database
  if (status === "outStock") {
    inputValues.status = "Out of Stock";
  } else {
    inputValues.status = "In Stock";
  }

  return (
    <form className="inventory-edit" onSubmit={onSubmit}>
      <div className="inventory-edit__container-headers">
        <div className="inventory-edit__container-header">
          <Link to={`/inventories`} className="inventory-edit__arrow">
            <img
              src={backArrow}
              alt="back arrow"
              className="inventory-edit__arrow-image"
            />
          </Link>
          <h1 className="inventory-edit__title">Edit Inventory Item</h1>
        </div>
      </div>
      <div className="inventory-edit__container-fields">
        <InventoryDetailsEdit
          inputChange={handleInputChange}
          errorState={error}
          name={inputValues.item_name}
          description={inputValues.description}
          category={inputValues.category}
        />
        <InventoryAvailabilityEdit
          inputChange={handleInputChange}
          status={status}
          toggleStatus={handleToggleStatus}
          errorState={error}
          quantity={inputValues.quantity}
          warehouse={inputValues.warehouse_id}
        />
      </div>
      <InventorySubmitEdit />
    </form>
  );
};

export default InventoryEditPage;
