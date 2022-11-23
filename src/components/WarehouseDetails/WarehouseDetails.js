import "./WarehouseDetails.scss";

const WarehouseDetails = () => {
  return (
    <div className="warehouse-details__container-info">
      <div className="warehouse-details__container-address">
        <h4 className="warehouse-details__head">warehouse address:</h4>
        <p className="warehouse-details__text">
          33 Pearl Street SW, Washington, USA
        </p>
      </div>
      <div className="warehouse-details__container-contact">
        <div className="warehouse-details__container-details">
          <h4 className="warehouse-details__head">contact name:</h4>
          <p className="warehouse-details__text">Graeme Lyon</p>
          <p className="warehouse-details__text">Warehouse Manager</p>
        </div>
        <div className="warehouse-details__container-details">
          <h4 className="warehouse-details__head">contact information:</h4>
          <p className="warehouse-details__text">+1 (647) 504-0911</p>
          <p className="warehouse-details__text">glyon@instock.com</p>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDetails;
