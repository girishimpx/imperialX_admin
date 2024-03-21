import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Axios from "axios";
import consts from "../../../constant/constant";
import CircularProgress from '@mui/material/CircularProgress';
import AddAsset from './AddAsset'

import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from "@coreui/react";
import Button from "@mui/material/Button";

const Asset = () => {
  const [result, setResult] = useState();
  const navigate = useNavigate()
  const [loader ,setloader] = useState(true)
  const [addpage ,setaddpage] = useState(false)




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
            setResult(res?.data?.result);
            setloader(false)
          }
        })
        .catch((err) => {setloader(false),console.log(err.response.data)});
    } else {
      Navigate("/imperialAdmin/login");
    }
  }, []);

  // const Navigate=useNavigate();
  const tabelHeader = ["S.no","Coin Name", "Symbol", "Status", "Action"];

  return (
    <>
      {!addpage && <Button sx={{marginBottom:"1rem"}} onClick={()=>{
setaddpage(true)        
      }} size="small" variant="contained">Add Asset</Button>}

{addpage && <AddAsset setaddpage={setaddpage}/>}


{!addpage && 
      <CTable>
        <CTableHead style={{ color: "white", background: "#303c54" }}>
          <CTableRow>
            {tabelHeader.map((value, index) => {
              return (
                <CTableHeaderCell scope="col" key={index}>
                  {value}
                </CTableHeaderCell>
              );
            })}
          </CTableRow>
        </CTableHead>

     {!loader &&    result && (
          <CTableBody className="font-weight-normal">
            {result.map((value, index) => {
              return (
                <CTableRow key={index} style={{ verticalAlign: "middle" }}>
                  <CTableDataCell scope="row">{index + 1}</CTableDataCell>
                  <CTableDataCell scope="row">{<img  style={{width:"30px"}} src={value?.image}/>} {value?.coinname}</CTableDataCell>
                  <CTableDataCell scope="row">{value?.symbol}</CTableDataCell>
                  <CTableDataCell
                    style={{ color: `${value.status ? " green" : "red"}` }}
                    scope="row"
                  >
                    {value.status ? "Active" : "inavtive"}
                  </CTableDataCell>
                  <CTableDataCell scope="row">
                    <CButton style={{ marginLeft: "-7px" }} onClick={()=>{
                      navigate('/imperialAdmin/coinseetings/asset/assetdetail',{state:{asset:value}})
                    }}>
                      {/* <CIcon icon={cilBell} className="me-2" />  */}
                      View/edit
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              );
            })}
          </CTableBody>
        )}
      </CTable>}

      {!loader &&  (!result && (
        <div
          style={{
            textAlign: "center",
            margin: "1rem 0",
            color: "grey",
            background: "lightgrey",
          }}
        >
          <h5 style={{ padding: "1rem" }}>Data not found....</h5>
        </div>
      ))}

      {loader && <div style={{textAlign:"center",padding:"1rem",marginTop:"15%"}}><CircularProgress/><p>please wait some while </p></div>}
      </>
    
  );
};
export default Asset;
