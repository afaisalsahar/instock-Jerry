import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import edit from "../../assets/images/Icons/edit_white-24px.svg";
import "./InventoryDetailsPage.scss";

const PORT = process.env.REACT_APP_PORT;
const URL = process.env.REACT_APP_URL;

const InventoryDetailsPage = () => {
  const [inventoryDetail, setInventoryDetail] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}${PORT}/inventories/${id}`)
      .then(({ data }) => setInventoryDetail(data))
      .catch((err) => console.error(err));
  }, [id]);

  const { item_name, category, description, status, quantity, warehouse_name } =
    inventoryDetail;

  return (
    <section className="inventory">
      <div className="inventory-details__container-headers">
        <div className="inventory-details__container-header">
          <img
            onClick={() => navigate(-1)}
            src={backArrow}
            alt="back arrow"
            className="inventory-details__arrow-image"
          />
          <h1 className="inventory-details__title">{item_name}</h1>
        </div>
        <Link
          to={`/inventories/${id}/edit`}
          className="inventory-details__edit"
        >
          <img
            src={edit}
            alt="edit pencil"
            className="inventory-details__edit-img"
          />
          <p className="inventory-details__edit-text">Edit</p>
        </Link>
      </div>
      <div className="inventory-details__container">
        <div className="inventory-details__container-info">
          <div className="inventory-details__container-detail">
            <h4 className="inventory-details__head">item description :</h4>
            <p className="inventory-details__text">{description}</p>
          </div>
          <div className="inventory-details__container-detail inventory-details__container-detail--padded">
            <h4 className="inventory-details__head">category :</h4>
            <p className="inventory-details__text">{category}</p>
          </div>
        </div>
        <div className="inventory-details__container-information">
          <div className="inventory-details__container-wrap">
            <h4 className="inventory-details__head">status :</h4>
            <div className="inventory-details__container-stock">
              <span
                className={`inventory-details__span ${
                  status === "In Stock"
                    ? "inventory-details__span--instock "
                    : "inventory-details__span--outstock"
                }`}
              >
                <p
                  className={`inventory-details__stock ${
                    status === "In Stock"
                      ? "inventory-details__stock--instock "
                      : "inventory-details__stock--outstock"
                  }`}
                >
                  {status}
                </p>
              </span>
            </div>
          </div>
          <div className="inventory-details__container-wrap">
            <h4 className="inventory-details__head">quantity :</h4>
            <p className="inventory-details__text">{quantity}</p>
          </div>
          <div className="inventory-details__container-wrap inventory-details__container-wrap--padded">
            <h4 className="inventory-details__head">warehouse:</h4>
            <p className="inventory-details__text">{warehouse_name}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryDetailsPage;
