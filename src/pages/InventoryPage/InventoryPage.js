import InventoryCard from "../../components/InventoryCard/InventoryCard";
import InventorySearch from "../../components/InventorySearch/InventorySearch";
import InventoryModal from "../../components/InventoryModal/InventoryModal";
import { useState, useEffect } from "react";
import axios from "axios";

// ENV variables
const URL = process.env.REACT_APP_URL;
const PORT = process.env.REACT_APP_PORT;

function InventoryList() {
    const [inventoryList, setInventoryList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedInventory, setSelectedInventory] = useState(null);
    const [inventoryName, setInventoryName] = useState(null);

    useEffect(() => {
        axios.get(`${URL}${PORT}/inventories`)
        .then((response) => {
            setInventoryList(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[isOpen])

    return(
        <section className="inventory-list">
            <InventorySearch/>
            <InventoryCard 
            inventoryList={inventoryList}
            setIsOpen={setIsOpen}
            setSelectedInventory={setSelectedInventory}
            setInventoryName={setInventoryName}
            />
            <InventoryModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedInventory={selectedInventory}
            inventoryName={inventoryName}
            />
        </section>
    )
}

export default InventoryList;