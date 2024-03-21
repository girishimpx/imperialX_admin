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
  import './AdminWalet.css'

const Adminwallet=()=>{

    const admin=["S.no","Coins/Token/Currency","Address"];
    const admindetail=[{coin:"BNB",Address:"0xABF3d44F8e2598f45541dB55b84f425BdE813EDd"}]

    return(
        <>

        <h4>ADMIN WALLET</h4>

        <CTable>
            <CTableHead style={{color:"white",background:"#303c54"}}>
                <CTableRow>
                    {admin.map((value,index)=>{
                        return <CTableHeaderCell scope="col" key={index}>{value}</CTableHeaderCell>
                    })}
                </CTableRow>
            </CTableHead>
            <CTableBody className="font-weight-normal">
                {admindetail.map((value,index)=>{
                    return <CTableRow key={index}>
                        <CTableDataCell scope="row">{index +1}</CTableDataCell>
                        <CTableDataCell scope="row">{value.coin}</CTableDataCell>
                        <CTableDataCell scope="row">{value.Address}</CTableDataCell>
                    </CTableRow>
                })}
            </CTableBody>
        </CTable>
        </>
    )
}

export default Adminwallet;