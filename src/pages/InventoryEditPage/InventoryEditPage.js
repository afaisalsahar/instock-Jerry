import InventoryEdit from "../../components/InventoryEdit/InventoryEdit";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


// ENV variables
const URL = process.env.REACT_APP_URL;
const PORT = process.env.REACT_APP_PORT;

function InventoryEditPage () {
  const {id} = useParams();
  const [inventoryDetails, setInventoryDetails] = useState([null]);

  useEffect(() => {
    axios.get(`${URL}${PORT}/inventories/${id}`)
    .then((response) => {
        setInventoryDetails(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
},[id])

  return (
    <>
      <InventoryEdit inventoryDetails={inventoryDetails} />
    </>
  )
}

export default InventoryEditPage;