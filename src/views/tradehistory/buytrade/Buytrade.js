import React, { useEffect, useState } from "react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from "@coreui/react";
import TextField from "@mui/material/TextField";
import "./buytrade.css";
import axios from "../../../Axios";
import Consts from "src/constant/constant";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

import useAxios from "../../../customHook/AxiosHook";
import ErrorMessage from "../../../Data Not Found/datanotfound";

const Buytrade = () => {
  const buytrade = [
    "S.No",
    "User Name",
    "Price(USDT)",
    "Volume",
    "Trade Time",
    "Order type",
    "Trade At",
    "Trade type",
    "Status",
  ];
  const limit = [
    { value: "limit", label: "Limit" },
    { value: "market", label: "Market" },
  ];

  const trade = [
    { value: "all", label: "All" },
    { value: "spot", label: "Spot" },
    { value: "Margin", label: "Margin" },
    { value: "future", label: "Future" },

  ];
  const coin = [];

  const [limits, setlimits] = useState("limit");
  const [order, setOrder] = useState("XRP-USDT");
  const [trades, setTrades] = useState("all");
  const [limiti, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [list, setList] = useState();
  const [tradePAir, setPair] = useState();

  const historydata = () => {
    setList("")
    axios
      .post(
        `${Consts.BackendUrl}/trade/buysellhistory?limit=${limiti}&page=${page}`,
        {
          order_type: limits,
          pair: order,
          trade_type: "buy",
        },
        {
          headers: {
            Authorization: localStorage.getItem("imperials"),
          },
        }
      )
      .then((res) => {
        
        if (res.data?.result?.docs?.length > 0) {
          if(trades == "all"){
            setList(res.data.result)
          }else{
            const data = []
          res.data.result.docs?.map((item) => {
            if(item.trade_at == trades){
              data.push(item)
            }
        })
        setList(data)

          }
        }
      })
      .catch((err) => {
        setList('')

       
      
      });
  };

  const tradepairsList = () => {
    axios
      .get(`${Consts.BackendUrl}/assets/getalltradepairAdmin`, {
        headers: {
          Authorization: localStorage.getItem("imperials"),
        },
      })
      .then((res) => {
        
        if (res.data?.result?.length > 0) {
          setPair(res?.data?.result)
          
      }
    })
      .catch((err) => console.log(err.response.data, "error"));
  };

  // useEffect(() => {
  //   tradepairsList();
  // }, []);

  useEffect(() => {
    historydata();
    tradepairsList();
  }, [limits, order, trades,page,limiti]);

  // const timeconvert = (time)=>{
  //   const dateTime = new Date(dateTimeString).toLocaleString();
  //   const localDateTime = dateTime.toLocaleString();
  // }

  return (
    <>
      <h4 className="tittle">BUY TRADE HISTORY</h4>

      <div className="inputstyle">
        <div className="input1">
          <TextField
            id="standard-select-currency-native"
            select
            // label="Native select"
            defaultValue="EUR"
            onChange={(e) => {
              
              setlimits(e.target.value);
            }}
            SelectProps={{
              native: true,
            }}
            //  helperText="Please select your currency"
            variant="standard"
          >
            {limit.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>

        <div className="input1">
          {tradePAir && (
            <TextField
              id="standard-select-currency-native"
              select
              defaultValue="XRP-USDT"
              onChange={(e) => {
                setOrder(e.target.value);
              }}
              SelectProps={{
                native: true,
              }}
              variant="standard"
            >
              {tradePAir.map((option, index) => (
                <option key={index} value={option.tradepair}>
                  {option.tradepair}
                </option>
              ))}
            </TextField>
          )}
        </div>

         <div className="input1">
          <TextField
            id="standard-select-currency-native"
            select
            // label="Native select"
            defaultValue="EUR"
            onChange={(e) => {
              
              setTrades(e.target.value);
            }}
            SelectProps={{
              native: true,
            }}
            //  helperText="Please select your currency"
            variant="standard"
          >
            {trade.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
      </div>

      <CTable>
        <CTableHead style={{ color: "white", background: "#303c54" }}>
          <CTableRow>
            {buytrade.map((value, index) => {
              return <CTableHeaderCell key={index}>{value}</CTableHeaderCell>;
            })}
          </CTableRow>
        </CTableHead>

        {list && (
          <CTableBody>
            {list.docs.map((item, index) => {
              
              return (
                <CTableRow>
                  <CTableDataCell className="datacell">{index+1}</CTableDataCell>
                  <CTableDataCell className="datacell">
                    {item.user_id.name}
                  </CTableDataCell>
                  <CTableDataCell className="datacell">
                    {item.price}
                  </CTableDataCell>
                  <CTableDataCell className="datacell">
                    {item.volume}
                  </CTableDataCell>
                  <CTableDataCell className="datacell">
                    {new Date(item.createdAt).toLocaleString()}
                  </CTableDataCell>
                  <CTableDataCell className="datacell">
                    {item.order_type.charAt(0).toUpperCase() + item.order_type.slice(1)}
                  </CTableDataCell>
                  <CTableDataCell className="datacell">
                    {item.trade_at.charAt(0).toUpperCase() + item.trade_at.slice(1)}
                  </CTableDataCell>
                  <CTableDataCell className="datacell">
                    {item.trade_type}
                  </CTableDataCell>
                  <CTableDataCell className="datacell">
                    <span style={{color:item.status == "init" ? "orange" :item.status == "filled"? "#1ba102":item.status == "partially_filled"? "blue":item.status == "canceled"?"red":""}}>{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</span>
                  </CTableDataCell>
                  {/* <CTableDataCell className="sdatacell">
                  <span><Button size="small" variant="contained" style={{textDecoration:"lowercase !important" }}>view</Button></span>
                  </CTableDataCell> */}
                </CTableRow>
              );
            })}
          </CTableBody>
        )}
      </CTable>
      {page > 1 && (
        <div className="paginationdiv">
          <Pagination
            id="pagination-button-color"
            onClick={(event) => {
              setPage(event.target.textContent);
            }}
            count={page}
            variant="outlined"
            color="primary"
          />
        </div>
      )}
      {(!list || list?.length <=0 )&& <ErrorMessage />}
    </>
  );
};
export default Buytrade;
