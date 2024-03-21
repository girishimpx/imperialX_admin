import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';
import "./commission.css";

const Commissiondetail=()=>{
 
    const presentage=[{value:"Presentage",label:'Presentage'},{value:"fixed",label:'fixed'}]
    const active=[{value:"Active",label:'Active'},{value:"Deactive",label:'Deactive'}]
    const back=useNavigate();

    return (
        <>

            <Button className="backbutton" onClick={()=>{
                    back('/imperialAdmin/coinseetings/commissionsettings')
                    }} > <ArrowBack/> Back</Button>

        <div className="inputstyle">
            <div className="para">
            <p>Coin/Token</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>

        <div className="inputstyle">
            <div className="para">
            <p>Withdraw Commission (%)</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>

        <div className="inputstyle1">
            <div className="para1">
            <p>Withdraw Commission Type</p> 
            </div>
            <div className="input1">
            <TextField
                id="standard-select-currency-native"
                select
            //   label="Native select"
                defaultValue="USDT"
                SelectProps={{
                native: true,
                 }}
            //   helperText="Please select your currency"
             variant="standard" >
        
             {presentage.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                 </option>
                 ))}
                </TextField>
            </div>
        </div>
        
        <div className="inputstyle">
            <div className="para">
            <p>Minimum deposit amount</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>

        <div className="inputstyle">
            <div className="para">
            <p>Minimum Withdraw Amount</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>

        <div className="inputstyle">
            <div className="para">
            <p>Netfee</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>


        <div className="inputstyle1">
            <div className="para1">
            <p>Deposit Status</p> 
            </div>
            <div className="input1">
            <TextField
                id="standard-select-currency-native"
                select
            //   label="Native select"
                defaultValue="USDT"
                SelectProps={{
                native: true,
                 }}
            //   helperText="Please select your currency"
             variant="standard" >
        
             {active.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                 </option>
                 ))}
                </TextField>
            </div>
        </div>

        <div className="inputstyle1">
            <div className="para1">
            <p>Withdraw Status</p> 
            </div>
            <div className="input1">
            <TextField
                id="standard-select-currency-native"
                select
            //   label="Native select"
                defaultValue="USDT"
                SelectProps={{
                native: true,
                 }}
            //   helperText="Please select your currency"
             variant="standard" >
        
             {active.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                 </option>
                 ))}
                </TextField>
            </div>
        </div>
        
        <Button variant="contained">Update</Button>

        </>
    )
}

export default Commissiondetail;