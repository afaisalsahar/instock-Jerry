import { useEffect, useState } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import ItemAvailability from "../../components/ItemAvailability/ItemAvailability";
import ItemSubmit from "../../components/ItemSubmit/ItemSubmit";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import "./AddInventoryItemPage.scss";

const AddInventoryItemPage = () => {
  const navigate = useNavigate();

  return (
    <form className="inventory-add">
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
        <ItemDetails />
        <ItemAvailability />
      </div>
      <ItemSubmit />
    </form>
  );
};

export default AddInventoryItemPage;
