import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./dataGrid.module.scss";
import { CgMoreVerticalO } from "react-icons/cg";

export default function DayaTable({data}) {
    console.log("data",data)
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
          field: "rocket_name",
          headerName: "Rocket name",
          width: 150,
        },
        {
          field: "first_flight",
          headerName: "First flight",
          width: 150,
        },
        {
          field: "active",
          headerName: "Active",
          width: 110,
        },
        {
            field: "success_rate_pct",
            headerName: "Success Rate (%)",
            width: 150,
          },
        {
          field: "cost_per_launch",
          headerName: "Cost per launch",
          type: "number",
          width: 160,
            //   valueGetter: (params) =>
            //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
          field: "Know More",
          headerName: "Know More",
          width: 100,
          renderCell: (row) => {
            return (
              <a href={`${encodeURIComponent(row.id)}`}>
                <CgMoreVerticalO/>
              </a>
            );
          },
        },
      ];
      
      const rows = data;
  return (
    <div className={styles.box}>
      <div className={styles.dataBox}>
        <h3>All you need to know about SpaceX Rockets</h3>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
          disableSelectionOnClick
          // experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    </div>
  );
}
