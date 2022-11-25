import sortIcon from "../../assets/images/Icons/sort-24px.svg";
import "./WarehouseDetailsHeaders.scss";

const WarehouseDetailsHeaders = () => {
  return (
    <div className="warehouse-details__container-headings">
      <div className="warehouse-details__container-heading">
        <h4 className="warehouse-details__headers">inventory</h4>
        <img src={sortIcon} alt="sort" className="warehouse-details__sort" />
      </div>
      <div className="warehouse-details__container-heading ">
        <h4 className="warehouse-details__headers">category</h4>
        <img src={sortIcon} alt="sort" className="warehouse-details__sort" />
      </div>
      <div className="warehouse-details__container-heading ">
        <h4 className="warehouse-details__headers">status</h4>
        <img src={sortIcon} alt="sort" className="warehouse-details__sort" />
      </div>
      <div className="warehouse-details__container-heading warehouse-details__container-heading--padded">
        <h4 className="warehouse-details__headers">quantity</h4>
        <img src={sortIcon} alt="sort" className="warehouse-details__sort" />
      </div>
      <div className="warehouse-details__container-heading warehouse-details__container-heading--end">
        <h4 className="warehouse-details__headers">action</h4>
      </div>
    </div>
  );
};

export default WarehouseDetailsHeaders;
