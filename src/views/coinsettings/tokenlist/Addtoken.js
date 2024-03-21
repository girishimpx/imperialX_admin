import React from "react";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';
import "./addtoken.css";
const Addtoken=()=>{

    const presentage=[{value:"presentage",label:"presentage"},{value:"fixed",label:"fixed"}];

    const Type=[{value:"Select Type",label:"Select Type"},{value:"Bep20 Token",label:"Bep20 Token"},
                {value:"Trc20 Token",label:"Trc20 Token"},{value:"ERC20 Token",label:"ERC20 Token"},
                {value:"Poly20 Token",label:"Poly20 Token"},{value:"ERC20 Token",label:"ERC0 Token"}];

    const active=[{value:"Active",label:"Active"},{value:"Deactive",label:"Deactive"}];
    
    const back=useNavigate();
    
    return (
        <>

            <Button className="Backbutton" onClick={()=>{
                back('/coinseetings/tokenlist')
                }} > <ArrowBack/> Back</Button>

         <div className="inputstyle">
            <div className="para">
            <p>Source</p> 
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
          defaultValue="Select Type"
          SelectProps={{
            native: true,
          }}
        //   helperText="Please select your currency"
          variant="standard"
        >
          {presentage.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
            </div>
        </div>
        
        <div className="inputstyle1">
            <div className="para1">
            <p>Type</p> 
            </div>
            <div className="input1">
            <TextField
          id="standard-select-currency-native"
          select
        //   label="Native select"
          defaultValue="fixed"
          SelectProps={{
            native: true,
          }}
        //   helperText="Please select your currency"
          variant="standard"
        >
          {Type.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
            </div>
        </div>

        <div className="inputstyle">
            <div className="para">
            <p>Coinname</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>

        <div className="inputstyle">
            <div className="para">
            <p>Point Digit</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>

        <div className="inputstyle">
            <div className="para">
            <p>Contract Decimal Value</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>

        <div className="inputstyle">
            <div className="para">
            <p>Live url(Optional)</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>

        <div className="inputstyle">
            <div className="para">
            <p>Minimum deposit</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>
        
        <div className="inputstyle">
            <div className="para">
            <p>Minimum Withdraw</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>

        <div className='file'>
            <input type='file'/>
            <p className="filetext">Allowed only png image format 35 X 35</p>
        </div>

        <div className="inputstyle1">
            <div className="para1">
            <p>Active Status</p> 
            </div>
            <div className="input1">
            <TextField
          id="standard-select-currency-native"
          select
        //   label="Native select"
          defaultValue="fixed"
          SelectProps={{
            native: true,
          }}
        //   helperText="Please select your currency"
          variant="standard"
        >
          {active.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
            </div>
        </div>

        <Button variant="contained">Add Now</Button>
            
        </>
    )
}

export default Addtoken;