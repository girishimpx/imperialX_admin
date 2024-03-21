import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./withdraw.css";
import { CTabPane, CTable, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";

const Withdraw=()=>{

    const tabel=["S.no","Date","Type","Txn ID","Recipient","Sender","Amount"];
    const asset=[{value:"BNB(coin)",label:"BNB(coin)"},{value:"ETH(coin)",label:"ETH(coin)"}];

    return(
        <>

        <h4 className="head">ETH WITHDRAWAL WALLET</h4>

        <div className="align">
            <div className="para">
                <p>Select Withdraw Asset</p>
            </div>
            <div className="textfield">
            <TextField
          id="standard-select-currency-native"
          select
        //   label="Native select"
          defaultValue="ETH(coin)"
          SelectProps={{
            native: true,
          }}
        //   helperText="Please select your currency"
          variant="standard"
        >
          {asset.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
            </div>
        </div>

        <div className="align1">
            
            <div className="para1">
                <p>coin</p>
            </div>
            <div className="textfield1">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>
        
        <div className="align2">
            
            <div className="para2">
                <p>Form Address</p>
            </div>
            <div className="textfield2">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
            <div className="button">
            <Button variant="contained">Click To Copy</Button>
            </div>
        </div>

        <div className="align1">
            
            <div className="para1">
                <p>Total Balance</p>
            </div>
            <div className="textfield1">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>

        <div className="align1">
            
            <div className="para1">
                <p>To Address</p>
            </div>
            <div className="textfield1">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>
        <div className="align1">
            
            <div className="para1">
                <p>Amount</p>
            </div>
            <div className="textfield1">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>
        
        <Button variant="contained">Submit</Button>

        <hr/>
        <h4>Transaction Histroy:-</h4>
        <hr/>
        
        <CTable>
            <CTableHead>
                <CTableRow>
                    {tabel.map((value,index)=>{
                        return <CTableHeaderCell scope="col" key={index}>{value}</CTableHeaderCell>
                    })}
                </CTableRow>
            </CTableHead>
        </CTable>

        <p>No record found!</p>

        </>
    )
}
export default Withdraw;