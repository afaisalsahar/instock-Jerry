import WarehouseCard from "../components/WarehouseCard/WarehouseCard";
import WarehouseSearch from "../components/WarehouseSearch/WarehouseSearch";
import { useState, useEffect } from "react";
import axios from "axios";

// ENV variables
const URL = process.env.REACT_APP_URL;
const PORT = process.env.REACT_APP_PORT;

function WarehouseList() {
    const [warehouseList, setWarehouseList] = useState([]);
    
    useEffect(() => {
        axios.get(`${URL}${PORT}/warehouses`)
        .then((response) => {
            setWarehouseList(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return(
        <section className="warehouse-list">
            <WarehouseSearch/>
            <WarehouseCard warehouseList={warehouseList}/>
        </section>
    )
}

export default WarehouseList;