import { useState } from "react";
import SMGrid from "../../Components/SMGrid";

export default function Institute() {
    const [listData, setListData] = useState([]);
    let cols = [
        {
            displayName: "Institue Logo",
            key: "id",
        },
        {
            displayName: "Institute Name",
            key: "id",
        },
        {
            displayName: "No of Campus",
            key: "id",
        },
        {
            displayName: "Active/Inctive",
            key: "id",
        },


    ];
    return (
        <>

            <SMGrid title="Institute" datasource={listData} cols={cols} />
        </>
    )
}