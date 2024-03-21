import React from "react";
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
  import {useNavigate} from 'react-router-dom';


const Tokenlist=()=>{
    
    const Navigate = useNavigate();
    const Add=useNavigate();
    const tabelHeader=["S.no","Token symbol","Token type","Token name","Widhdraw commission","Contract Address",
                                "Decimal","visiblity","Status"]
    const tokenDetail=[{Tokensymbol:"USDT",Tokentype:"token",tokenname:"tether",WidWidhdrawcommission:"0.5",
                        ContractAddress:"0xdAC17F958D2ee523a2206206994597C13D831ec7",Decimal:"6",visiblity:"show"}]
    return (
      <>
       <Button variant="contained" onClick={()=>{
        Add('coinseetings/tokenlist/addtoken')
       }}>Add Token</Button>

        <CTable >
        <CTableHead style={{color:"white",background:"#303c54"}}>
          <CTableRow>
            {tabelHeader.map((value,index)=>{
              
              return <CTableHeaderCell scope="col" key={index}>{value}</CTableHeaderCell>
              
            })}
          </CTableRow>
          </CTableHead>
          <CTableBody>
          {tokenDetail.map((value,index)=>{
            return  <CTableRow key={index}>
            <CTableDataCell scope="row">{index+1}</CTableDataCell>
            <CTableDataCell scope="row">{value.Tokensymbol}</CTableDataCell>
            <CTableDataCell scope="row">{value.Tokentype}</CTableDataCell>
            <CTableDataCell scope="row">{value.tokenname}</CTableDataCell>
            <CTableDataCell scope="row">{value.WidWidhdrawcommission}</CTableDataCell>
            <CTableDataCell scope="row">{value.ContractAddress}</CTableDataCell>
            <CTableDataCell scope="row">{value.Decimal}</CTableDataCell>
            <CTableDataCell scope="row">{value.visiblity}</CTableDataCell>
            <CTableDataCell scope="row"><CButton style={{marginLeft:"-7px"}}
            color={"primary"} onClick={()=>{
                Navigate('/imperialAdmin/coinseetings/tokenlist/tokenlistdetail',{state:value})
            }}>
                {/* <CIcon icon={cilBell} className="me-2" />  */}
                 View/edit
    
            </CButton>
            </CTableDataCell>
          </CTableRow>
          })}
        
        </CTableBody>
          </CTable>
      </>
    )
}
export default Tokenlist;