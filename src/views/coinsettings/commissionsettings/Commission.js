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
import { useNavigate } from "react-router-dom";


const Commission=()=>{

  const Navigate=useNavigate();  
  const tabelHeader=["S.no","Coin/Currency","Name","Withdraw","Commission Type","Net Fee",
                        "Deposit Status","Withdraw Status","Status"]
    const tradepair=[{Coin:"BNB",Name:"	BNB Smart Chain",Withdraw:"0.5",CommissionType:"Percentage",NetFee:"0.00010000",
                      DepositStatus:"Active" ,WithdrawStatus:"Deactive" }]
    return (
        <CTable >
        <CTableHead style={{color:"white",background:"#303c54"}}> 
          <CTableRow>
            {tabelHeader.map((value,index)=>{
              
              return <CTableHeaderCell scope="col" key={index}>{value}</CTableHeaderCell>
              
            })}
          </CTableRow>
          </CTableHead>
          <CTableBody>
          {tradepair.map((value,index)=>{
            return  <CTableRow key={index}>
            <CTableDataCell scope="row">{index+1}</CTableDataCell>
            <CTableDataCell scope="row">{value.Coin}</CTableDataCell>
            <CTableDataCell scope="row">{value.Name}</CTableDataCell>
            <CTableDataCell scope="row">{value.Withdraw}</CTableDataCell>
            <CTableDataCell scope="row">{value.CommissionType}</CTableDataCell>
            <CTableDataCell scope="row">{value.NetFee}</CTableDataCell>
            <CTableDataCell scope="row">{value.DepositStatus}</CTableDataCell>
            <CTableDataCell scope="row">{value.WithdrawStatus}</CTableDataCell>
            <CTableDataCell scope="row"><CButton style={{marginLeft:"-7px"}}
            color={"primary"} onClick={()=>{
              Navigate('/imperialAdmin/coinseetings/commissionsettings/commissiondetail')
            }}>
                {/* <CIcon icon={cilBell} className="me-2" />  */}
                 View/edit
    
            </CButton>
            </CTableDataCell>
          </CTableRow>
          })}
        
        </CTableBody>
          </CTable>
    )        

}

export default Commission;