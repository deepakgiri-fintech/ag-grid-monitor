import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./data/data.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Make",
          field: "make",
          sortable: true,
          filter: true,
          width: 100,
          autoHeight: true
        },
        {
          headerName: "Model",
          field: "model",
          sortable: true,
          filter: true,
          width: 100
        },
        {
          headerName: "Price",
          field: "price",
          sortable: true,
          filter: true,
          width: 100
        },
        {
          headerName: "City",
          field: "city",
          sortable: true,
          filter: true,
          width: 100
        }
      ],
      hkRowData: [
        {
          make: "Toyota",
          model: "Celica",
          price: 35000,
          city: "Central"
        },
        {
          make: "Ford",
          model: "Mondeo",
          price: 32000,
          city: "Kowloon"
        },
        {
          make: "Porsche",
          model: "Boxter",
          price: 72000,
          city: "WanChai"
        }
      ],

      auRowData: [
        {
          make: "Toyota",
          model: "Celica",
          price: 35000,
          city: "Perth"
        },
        {
          make: "Ford",
          model: "Mondeo",
          price: 32000,
          city: "Melbourne"
        },
        {
          make: "Porsche",
          model: "Boxter",
          price: 72000,
          city: "Sydney"
        }
      ],

      jpRowData: [
        {
          make: "Toyota",
          model: "Celica",
          price: 35000,
          city: "Tokyo"
        },
        {
          make: "Ford",
          model: "Mondeo",
          price: 32000,
          city: "Tokyo"
        },
        {
          make: "Porsche",
          model: "Boxter",
          price: 72000,
          city: "Tokyo"
        }
      ],


      leftPaneColDefs: [
        {
          headerName: "Type",
          field: "rowName",
          sortable: true,
          filter: true,
          width: 120,
          autoHeight: true
        },
        {
          headerName: "HK",
          field: "hk",
          width: 50,
          cellStyle: this.changeCellColor,
        },
        {
          headerName: "JP",
          field: "jp",
          width: 50,
          cellStyle: this.changeCellColor,
        },
        {
          headerName: "AU",
          field: "au",
          width: 50,
          cellStyle: this.changeCellColor,
        }
      ],

      leftPaneData: [
        {
          rowName: "MDServer",
          hk: "X",
          jp: "X",
          au: "O",          
        },
        {
          rowName: "ExchangeServer",
          hk: "O",
          jp: "O",
          au: "O",          
        }
      ]
    };
  }

  changeCellColor(params){
      if (params.value  === "X") {
        //Here you can check the value and based on that you can change the color
        //mark police cells as red
        return { backgroundColor: 'red'};
    } else {
      return null;
    }
  }

  render() {
    return (
      <div style={{ height: "100%", width: "100%" }}>

        
        <div
          style={{
            width: "100%",
            height: "90px",
            border: "1px solid #0000FE",
            borderStyle: "solid"
          }}
        >
          I am Header
        </div>
          

        <div style={{ border: "5px solid #0000FE", height: "850px" }}>
          <div class="sidenav">
            <div
              className="ag-theme-balham-dark"
              style={{
                height: "200px",
                width: "295px",
                borderStyle: "solid"
              }}
            >
              <h2> Process Status </h2>
              <AgGridReact
                columnDefs={this.state.leftPaneColDefs}
                rowData={this.state.leftPaneData}
              ></AgGridReact>
            </div>
          </div>

          <div class="main" style={{ border: "1px solid #FE0000" }}>
            <div
              className="ag-theme-balham-dark"
              style={{
                height: "200px",
                width: "600px",
                borderStyle: "solid"
              }}
            >
              <h3> HK </h3>
              <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.hkRowData}
              ></AgGridReact>
            </div>
            <div
              className="ag-theme-balham-dark"
              style={{
                height: "200px",
                width: "600px",
                borderStyle: "solid"
              }}
            >
              <h2> JP </h2>
              <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.jpRowData}
              ></AgGridReact>
            </div>
            <div
              className="ag-theme-balham-dark"
              style={{
                height: "200px",
                width: "600px",
                borderStyle: "solid"
              }}
            >
              <h2> AU </h2>
              <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.auRowData}
              ></AgGridReact>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
