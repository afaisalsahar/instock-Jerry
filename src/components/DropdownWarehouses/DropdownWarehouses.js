import { Fragment } from "react";

const DropdownWarehouses = ({ warehouse }) => {
  return (
    <Fragment>
      <option value={warehouse.id}>{warehouse.warehouse_name}</option>
    </Fragment>
  );
};

export default DropdownWarehouses;
