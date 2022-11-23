import { Link } from "react-router-dom";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import edit from "../../assets/images/Icons/edit_white-24px.svg";
import "./WarehouseDetailsPage.scss";

const WarehouseDetailsPage = () => {
  return (
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
        <Link to="/:id" className="warehouse-details__edit">
          <img
            src={edit}
            alt="edit pencil"
            className="warehouse-details__edit-img"
          />
        </Link>
      </div>
      <WarehouseDetails />
    </section>
  );
};

export default WarehouseDetailsPage;
