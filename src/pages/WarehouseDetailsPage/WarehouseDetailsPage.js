import { Link, useParams, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseDetailsInventory from "../../components/WarehouseDetailsInventory/WarehouseDetailsInventory";
import WarehouseDetailsHeaders from "../../components/WarehouseDetailsHeaders/WarehouseDetailsHeaders";
import WarehouseInventoryModal from "../../components/WarehouseInventoryModal/WarehouseInventoryModal";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import edit from "../../assets/images/Icons/edit_white-24px.svg";
import "./WarehouseDetailsPage.scss";

const PORT = process.env.REACT_APP_PORT;
const URL = process.env.REACT_APP_URL;

const WarehouseDetailsPage = () => {
  const [singleWarehouse, setSingleWarehouse] = useState({});
  const [inventoryList, setInventoryList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [selectedInventId, setSelectedInventId] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}${PORT}/warehouses`)
      .then(({ data }) => {
        return axios.get(`${URL}${PORT}/warehouses/${!id ? data[2].id : id}`);
      })
      .then(({ data }) => {
        setSingleWarehouse(data);
        return axios.get(`${URL}${PORT}/warehouses/${data.id}/inventories`);
      })
      .then(({ data }) => {
        setInventoryList(data);
      })
      .catch((err) => console.error(err));
  }, [isOpen]);

  return (
    <Fragment>
      <section className="warehouse-details">
        <div className="warehouse-details__container-headers">
          <div className="warehouse-details__container-header">
            <img
              onClick={() => navigate(-1)}
              src={backArrow}
              alt="back arrow"
              className="warehouse-details__arrow-image"
            />
            <h1 className="warehouse-details__title">
              {singleWarehouse.warehouse_name}
            </h1>
          </div>
          <Link
            to={`/warehouses/${id}/edit`}
            className="warehouse-details__edit"
          >
            <img
              src={edit}
              alt="edit pencil"
              className="warehouse-details__edit-img"
            />
            <p className="warehouse-details__edit-text">Edit</p>
          </Link>
        </div>
        <WarehouseDetails
          address={singleWarehouse.address}
          city={singleWarehouse.city}
          country={singleWarehouse.country}
          contactName={singleWarehouse.contact_name}
          position={singleWarehouse.contact_position}
          phone={singleWarehouse.contact_phone}
          email={singleWarehouse.contact_email}
        />
        <WarehouseDetailsHeaders />
      </section>
      {inventoryList.map((inventory) => {
        return (
          <WarehouseDetailsInventory
            item={inventory.item_name}
            category={inventory.category}
            status={inventory.status}
            quantity={inventory.quantity}
            key={inventory.id}
            id={inventory.id}
            setIsOpen={setIsOpen}
            setSelectedInventory={setSelectedInventory}
            setSelectedInventId={setSelectedInventId}
          />
        );
      })}
      <WarehouseInventoryModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        itemName={selectedInventory}
        itemId={selectedInventId}
        warehouseName={singleWarehouse.warehouse_name}
        warehouseId={singleWarehouse.id}
      />
    </Fragment>
  );
};

export default WarehouseDetailsPage;
