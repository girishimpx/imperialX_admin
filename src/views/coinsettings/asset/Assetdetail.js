import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBack";
import NotFound from "../../noDataFoundPage";
import "./tradedetail.css";

const Assetdetail = () => {
  const history = useLocation();
  const [assetDetial, setAssetdetail] = useState();


  useEffect(()=>{
if(history?.state?.asset){
setAssetdetail(history?.state?.asset)
}
  },[])



  const active = [
    { value: "Active", label: "Active" },
    { value: "Deactive", label: "Deactive" },
  ];
  const yes = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const back = useNavigate();

  return (
    <>
      {assetDetial && (
        <>
          <Button
            className="backbutton"
            onClick={() => {
              back("/imperialAdmin/coinseetings/asset");
            }}
          >
            {" "}
            <ArrowBack /> Back
          </Button>

          <div className="inputstyle1">
            <div className="para1">
              <p>{<img  style={{width:"30px"}} src={assetDetial?.image}/>} Coin Name</p>
            </div>
            <div className="input1">
              <TextField
              value={`${assetDetial?.coinname}`}
                id="standard-basic"
                label=" "
                variant="standard"
              />
            </div>
          </div>

          <div className="inputstyle1">
            <div className="para1">
              <p>Symbol</p>
            </div>

            <div className="input1">
              <TextField
                id="standard-basic"
                value={`${assetDetial?.symbol}`}
                label=" "
                variant="standard"
              />
            </div>
          </div>

          <div className="inputstyle1">
            <div className="para1">
              <p>Chain</p>
            </div>

            <div className="input1">
              <TextField
                id="standard-basic"
                value={`${assetDetial?.chain}`}
                label=" "
                variant="standard"
              />
            </div>
          </div>

          <div className="inputstyle2">
            <div className="para2">
              <p>Withdraw</p>
            </div>
            <div className="input2">
              <TextField
              value={`${assetDetial?.withdraw}`}
                id="standard-basic"
                label=" "
                variant="standard"
              />
            </div>
          </div>

          <div className="inputstyle2">
            <div className="para2">
              <p>Maximum Withdraw</p>
            </div>
            <div className="input2">
              <TextField
                id="standard-basic"
                value={`${assetDetial?.maxwithdraw}`}
                label=" "
                variant="standard"
              />
            </div>
          </div>

          <div className="inputstyle2">
            <div className="para2">
              <p>Minimum Withdraw</p>
            </div>
            <div className="input2">
              <TextField
                id="standard-basic"
                value={`${assetDetial?.minwithdraw}`}
                label=" "
                variant="standard"
              />
            </div>
          </div>

          <div className="inputstyle2">
            <div className="para2">
              <p>NetFee</p>
            </div>
            <div className="input2">
              <TextField
              value={`${assetDetial?.netfee}`}
                id="standard-basic"
                label=" "
                variant="standard"
              />
            </div>
          </div>

          <div className="inputstyle2">
            <div className="para2">
              <p>Order List</p>
            </div>
            <div className="input2">
              <TextField
              value={`${assetDetial?.orderlist}`}
                id="standard-basic"
                label=" "
                variant="standard"
              />
            </div>
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
                defaultValue="USDT"
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

          <Button variant="contained">Update</Button>
        </>
      )}

      {!assetDetial && (
        <NotFound/>
      )}
    </>
  );
};
export default Assetdetail;
