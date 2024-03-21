import React from "react";
import "./Tokenlistdetail.css"
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBack from '@mui/icons-material/ArrowBack';


const Tokenlistdetail=()=>{
   
    const currencies = [
        {
          value: 'presentage',
          label: 'presentage',
        },
        {
          value: 'fixed',
          label: 'fixed',
        },]
        const Token = [
            {
              value: 'Token',
              label: 'Token',
            },
            {
              value: 'Bep20 Token',
              label: 'Bep20 Token',
            },{value: 'TRC20 Token', label: 'TRC20 Token',},{value: 'ERC20 Token', label: 'ERC20 Token',}]
        
        const active=[{value:"Active",label:'Active'},{value:"Deactive",label:'Deactive'}]
        const back=useNavigate();
        const detail=useLocation();
        console.log(detail);
    return(
        <>
        <Button className="Backbutton" onClick={()=>{
                back('/imperialAdmin/coinseetings/tokenlist')
                }} > <ArrowBack/> Back</Button>

        <div className="inputstyle">
            <div className="para">
            <p>Source</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" label="Standard" value={detail?.state?.Tokensymbol} variant="standard" />
            </div>
        </div>
         
         <div className="inputstyle">
            <div className="para">
            <p>Withdraw Commission (%)</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" value={detail?.state?.WidWidhdrawcommission} label="Standard" variant="standard" />
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
          defaultValue="fixed"
          SelectProps={{
            native: true,
          }}
        //   helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
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
          {Token.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

            </div>
        </div>
        
        <div className="inputstyle">
            <div className="para">
            <p>Contract Address </p> 
            </div>
            <div className="input">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          {/* <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel> */}
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">{detail?.state?.ContractAddress}</InputAdornment>}
          />
        </FormControl>
            </div>
        </div>

        <div className="inputstyle">
            <div className="para">
            <p>Abi Array </p> 
            </div>
            <div className="input">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
            </div>
        </div>


        <div className="inputstyle">
            <div className="para">
            <p>Coin name</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" value={detail?.state?.tokenname} label="Standard" variant="standard" />
            </div>
        </div>

        <div className="inputstyle">
            <div className="para">
            <p>Point digit</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>

        
        <div className="inputstyle">
            <div className="para">
            <p>Contract Decimal value</p> 
            </div>
            <div className="input">
            <TextField id="standard-basic" value={detail?.state?.Decimal} label="Standard" variant="standard" />
            </div>
        </div>

        <div className="inputstyle">
            <div className="para">
            <p>Live Url</p> 
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

            <input className="file" type="file"/>
            <p className="filechoose">Allowed only png image format 35 X 35</p>

            <div className="inputstyle12">
            <div className="para12">
            <p>Active Status</p> 
            </div>
            <div className="input12">
            <TextField
          id="standard-select-currency-native"
          select
        //   label="Native select"
          defaultValue="Active"
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

        <Button className="button" variant="contained">Update</Button>

        </>
    )
}
export default Tokenlistdetail;