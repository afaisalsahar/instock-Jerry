import WarehouseCard from "../components/WarehouseCard/WarehouseCard";
import WarehouseSearch from "../components/WarehouseSearch/WarehouseSearch";
import WarehouseModal from "../components/WarehouseModal/WarehouseModal";
import { useState, useEffect } from "react";
import axios from "axios";

// ENV variables
const URL = process.env.REACT_APP_URL;
const PORT = process.env.REACT_APP_PORT;

function WarehouseList() {
    const [warehouseList, setWarehouseList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    console.log(warehouseList)
    
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
            <WarehouseCard warehouseList={warehouseList} setIsOpen={setIsOpen} />
            <WarehouseModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
    )
}

export default WarehouseList;