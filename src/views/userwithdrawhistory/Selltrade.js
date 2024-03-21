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
import "./selltrade.css";
import Axios from "../../Axios";
import Consts from "src/constant/constant";
import Button from "@mui/material/Button";
import consts from "../../constant/constant";

import useAxios from "../../customHook/AxiosHook";
import ErrorMessage from "../../Data Not Found/datanotfound";

const selltrade = () => {
  const buytrade = [
    "S.No",
    "User Name",
    "Price(USDT)",
    "Volume",
    "Trade At",
    "Trade type",
    "Status",
    "Action",
  ];

  const coin = [];

  const [limits, setlimits] = useState("limit");
  const [order, setOrder] = useState("XRP-USDT");
  const [list, setList] = useState();
  const [tradePAir, setPair] = useState();
  const [assetlist, setassetlist] = useState();

  const historydata = () => {
    axios
      .post(
        `${Consts.BackendUrl}/trade/buysellhistory`,
        {
          order_type: limits,
          pair: order,
          trade_type: "sell",
        },
        {
          headers: {
            Authorization: localStorage.getItem("imperials"),
          },
        }
      )
      .then((res) => {
        if (res.data?.result?.length > 0) {
          setList(res?.data?.result);
        }
      })
      .catch((err) => console.log(err.response.data, "error"));
  };

  useEffect(() => {
    if (localStorage.getItem("imperials")) {
      Axios.get(`${consts.BackendUrl}/assets/getallasset`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          Authorization: localStorage.getItem("imperials"),
        },
      })
        .then((res) => {
          if (res?.data?.result.length > 0) {
            setassetlist(res?.data?.result);
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } else {
      Navigate("/imperialAdmin/login");
    }
  }, []);

  const tradepairsList = () => {
    Axios.get(`${Consts.BackendUrl}/assets/getalltradepair`, {
      headers: {
        Authorization: localStorage.getItem("imperials"),
      },
    })
      .then((res) => {
        if (res.data?.result?.length > 0) {
          setPair(res?.data?.result);
        }
      })
      .catch((err) => console.log(err.response.data, "error"));
  };

  // useEffect(() => {
  //   tradepairsList();
  // }, []);

  // useEffect(() => {
  //   historydata();
  // }, [limits, order]);

  // const timeconvert = (time)=>{
  //   const dateTime = new Date(dateTimeString).toLocaleString();
  //   const localDateTime = dateTime.toLocaleString();
  // }

  return (
    <>
      <h4 className="tittle">USER DEPOSIT HISTORY</h4>

      <div style={{ textAlign: "start"}}>
        <div>
          {assetlist && (
            <TextField
              style={{ width: "10%", textAlign: "start",padding:"8px" }}
              id="standard-select-currency-native"
              select
              defaultValue="XRP-USDT"
              
              onChange={(e) => {
                setOrder(e.target.value);
              }}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              <option
                style={{ textAlign: "center" }}
                value={"All"}
              >
                All
              </option>
              {assetlist.map((option, index) => (
                <option
                  key={index}
                  value={option.symbol}
                  style={{ textAlign: "center" }}
                >
                  {option.symbol}
                </option>
              ))}
            </TextField>
          )}
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
            {list.map((item, index) => {
              console.log(item, "datas");
              return (
                <CTableRow>
                  <CTableDataCell className="datacell">
                    {index + 1}
                  </CTableDataCell>
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
                    {item.trade_type}
                  </CTableDataCell>
                  <CTableDataCell className="datacell">
                    <span
                      style={{
                        color:
                          item.status == "init"
                            ? "orange"
                            : item.status == "filled"
                            ? "#1ba102"
                            : item.status == "partially_filled"
                            ? "blue"
                            : item.status == "canceled"
                            ? "red"
                            : "",
                      }}
                    >
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </span>
                  </CTableDataCell>
                  <CTableDataCell className="sdatacell">
                    <span>
                      <Button
                        size="small"
                        variant="contained"
                        style={{ textDecoration: "lowercase !important" }}
                      >
                        view
                      </Button>
                    </span>
                  </CTableDataCell>
                </CTableRow>
              );
            })}
          </CTableBody>
        )}
      </CTable>

      {!list && <ErrorMessage />}
    </>
  );
};
export default selltrade;
