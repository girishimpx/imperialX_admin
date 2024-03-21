import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import consts from '../../../constant/constant'
import AddTradePair from './AddPAir'

import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CButton
  } from "@coreui/react";
  import Button from '@mui/material/Button';
const Tradepair=()=>{

  const [result,setResult] = useState()
    const Navigate=useNavigate();
    const tabelHeader=["S.no","Coin One","Coin Two","Trade pair","Status","Action"];
    const [pairList,setpairList] = useState()
    const [addpage,setaddpage] = useState(false)
    const [on,seton] = useState(false)
    

    useEffect(() => {
      if (localStorage.getItem("imperials")) {
        Axios.get(`${consts.BackendUrl}/assets/getalltradepairAdmin`,{
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            Authorization: localStorage.getItem("imperials"),
          },
        })
          .then((res) => {
            

            if (res?.data?.result.length > 0 ) {
              setResult(res?.data?.result)
                
            }
          })
          .catch((err) => console.log(err.response.data, "errrr"));
      } else {
        Navigate("/imperialAdmin/login");
      }
    }, []);





    return (
      <>
{!addpage && <Button style={{marginBottom:"1rem"}} variant="contained" size="small" onClick={()=>{
setaddpage(true)        
      }}    >Add Tradepair</Button>}
{addpage && <AddTradePair setaddpage={setaddpage} on={on} /> }


       {!addpage &&  <CTable  >
        <CTableHead style={{color:"white",background:"#303c54"}}>
          <CTableRow>
            {tabelHeader.map((value,index)=>{
              
              return <CTableHeaderCell scope="col" key={index}>{value}</CTableHeaderCell>
              
            })}
          </CTableRow>
          </CTableHead>
          <CTableBody className="font-weight-normal" style={{verticalAlign:"middle"}}>
          {result?.map((value,index)=>{
            return  <CTableRow key={index}>
            <CTableDataCell scope="row">{index+1}</CTableDataCell>
            <CTableDataCell scope="row">{<img  style={{width:"30px"}} src={value?.coinimage2}/>}{value?.coinname2}</CTableDataCell>
            <CTableDataCell scope="row">{<img  style={{width:"30px"}} src={value?.coinimage1}/>} {value?.coinname1}</CTableDataCell>
            <CTableDataCell scope="row">{`${value?.tradepair.split("-")[0]} - ${value?.tradepair.split("-")[1]}`}</CTableDataCell>
            <CTableDataCell style={{color:`${value.status ? " green" :"red"}`}} scope="row">{value.status ? "Active" : "inavtive"}</CTableDataCell>
            <CTableDataCell scope="row"><CButton style={{marginLeft:"-7px"}}
            color={"primary"} onClick={()=>{
              Navigate('/imperialAdmin/coinseetings/tradepair/tradedetail',{state:{tradepair:value}})
            }}>
                {/* <CIcon icon={cilBell} className="me-2" />  */}
                 View/edit
    
            </CButton>
            </CTableDataCell>
          </CTableRow>
          })}
        
        </CTableBody>
          </CTable>}
      </>
    )
}
export default Tradepair;






