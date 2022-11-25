import { Link } from "react-router-dom";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseDetailsInventory from "../../components/WarehouseDetailsInventory/WarehouseDetailsInventory";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import edit from "../../assets/images/Icons/edit_white-24px.svg";
import "./WarehouseDetailsPage.scss";
import sortIcon from "../../assets/images/Icons/sort-24px.svg";
import { Fragment } from "react";

const WarehouseDetailsPage = () => {
  return (
    <Fragment>
      <section className="warehouse-details">
        <div className="warehouse-details__container-headers">
          <div className="warehouse-details__container-header">
            <Link to="/" className="warehouse-details__arrow">
              <img
                src={backArrow}
                alt="back arrow"
                className="warehouse-details__arrow-image"
              />
            </Link>
            <h1 className="warehouse-details__title">Washington</h1>
          </div>
          <Link to="/edit-warehouse/:id" className="warehouse-details__edit">
            <img
              src={edit}
              alt="edit pencil"
              className="warehouse-details__edit-img"
            />
            <p className="warehouse-details__edit-text">Edit</p>
          </Link>
        </div>
        <WarehouseDetails />
        <div className="warehouse-details__container-headings">
          <div className="warehouse-details__container-heading">
            <h4 className="warehouse-details__headers">inventory</h4>
            <img
              src={sortIcon}
              alt="sort"
              className="warehouse-details__sort"
            />
          </div>
          <div className="warehouse-details__container-heading ">
            <h4 className="warehouse-details__headers">category</h4>
            <img
              src={sortIcon}
              alt="sort"
              className="warehouse-details__sort"
            />
          </div>
          <div className="warehouse-details__container-heading ">
            <h4 className="warehouse-details__headers">status</h4>
            <img
              src={sortIcon}
              alt="sort"
              className="warehouse-details__sort"
            />
          </div>
          <div className="warehouse-details__container-heading warehouse-details__container-heading--padded">
            <h4 className="warehouse-details__headers">quantity</h4>
            <img
              src={sortIcon}
              alt="sort"
              className="warehouse-details__sort"
            />
          </div>
          <div className="warehouse-details__container-heading warehouse-details__container-heading--end">
            <h4 className="warehouse-details__headers">action</h4>
          </div>
        </div>
      </section>
      <WarehouseDetailsInventory />
    </Fragment>
  );
};

export default WarehouseDetailsPage;
