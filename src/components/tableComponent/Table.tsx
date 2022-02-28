import * as React from "react";
import { useEffect, useState } from "react";
import { getCoinsData } from '../../endpoints/CryptoCoin';
import MUIDataTable from "mui-datatables";
import { ICoinDto } from "../../interfaces/ICoin";
import RefreshButton from "../Buttons/RefreshButton";


export function DataTable() {
    const [data, setData] = useState<ICoinDto[]>([]);
    const columns = getColumnDefinition();

    // Fetch the data
    useEffect(() => {

        refreshData(setData);

    }, []);

    return (
        <MUIDataTable
            title="" // We do not want a title
            data={data}
            columns={columns}
            options={
                {
                    print: false,
                    download: false,
                    viewColumns: false,
                    selectableRowsHideCheckboxes: true,
                    customToolbar: () =>
                    (<RefreshButton onClick={() =>
                        refreshData(setData)
                    }></RefreshButton>)
                }
            }
        />
    )
}

function refreshData(setData: React.Dispatch<React.SetStateAction<ICoinDto[]>>) {
    getCoinsData()
        .then(x => setData(x))
        .catch(() => setData([]));
}

function getColumnDefinition() {
    return [
        {
            name: "Id",
            label: "Id",
            options: {
                filter: true,
                sort: true,
                visible: false
            }
        },
        {
            name: "Uid",
            label: "Uid",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "Coin_name",
            label: "Name",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "Acronym",
            label: "Acronym",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "LogoJSX",
            label: "Logo",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];
}
