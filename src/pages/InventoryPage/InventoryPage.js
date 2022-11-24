import InventoryCard from "../../components/InventoryCard/InventoryCard";
import InventorySearch from "../../components/InventorySearch/InventorySearch";
import { useState, useEffect } from "react";
import axios from "axios";

// ENV variables
const URL = process.env.REACT_APP_URL;
const PORT = process.env.REACT_APP_PORT;

function InventoryList() {
    const [inventoryList, setInventoryList] = useState([]);

    useEffect(() => {
        axios.get(`${URL}${PORT}/inventories`)
        .then((response) => {
            setInventoryList(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return(
        <section className="inventory-list">
            <InventorySearch/>
            <InventoryCard inventoryList={inventoryList}/>
        </section>
    )
}

export default InventoryList;