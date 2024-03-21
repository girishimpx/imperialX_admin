import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBack";
import "./tradedetail.css";
import NotFound from "../../noDataFoundPage";
import Axios from "axios";
import consts from "../../../constant/constant";

const Tradedetail = () => {
  const history = useLocation();
  const [pair, setPair] = useState();
  const [coinlist, setCoinlist] = useState(['USDT']);

  

  useEffect(() => {
(async()=>{
    if (localStorage.getItem("imperials")) {
        await Axios.get(`${consts.BackendUrl}/assets/getallasset`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            Authorization: localStorage.getItem("imperials"),
          },
        }).then((res) => {
            if (res?.data?.result.length > 0) {
              res?.data?.result?.map((coins) => {
                return ( 
                  coinlist.push(coins.symbol)
                );
              });
            }
          })
          .catch((err) => console.log(err.response.data, "errrr"));
  
        if (history?.state?.tradepair) {
          setPair(history?.state?.tradepair);
        }
      } else {
        Navigate("/imperialAdmin/login");
      }
})()

    
  }, [history?.state?.tradepair]);

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
      {pair && (
        <>
          <Button
            className="backbutton"
            onClick={() => {
              back("/imperialAdmin/coinseetings/tradepair");
            }}
          >
            {" "}
            <ArrowBack /> Back
          </Button>

          {console.log(coinlist, pair, "coinone")}

          <div className="inputstyle1">
            <div className="para1">
              <p>Coinone</p>
            </div>
            <div className="input1">

                {console.log(pair,"open")}
              <TextField
                id="standard-select-currency-native"
                select
                //   label="Native select"
                defaultValue={pair?.tradepair.split("-")[0]}
                SelectProps={{
                  native: true,
                }}
                //   helperText="Please select your currency"
                variant="standard"
              >
                {coinlist.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </div>
          </div>

          <div className="inputstyle1">
            <div className="para1">
              <p>Cointwo</p>
            </div>

            <div className="input1">
              <TextField
                id="standard-select-currency-native"
                select
                //   label="Native select"
                defaultValue={pair?.tradepair.split("-")[1]}
                SelectProps={{
                  native: true,
                }}
                //   helperText="Please select your currency"
                variant="standard"
              >
                {coinlist.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </div>
          </div>

          <div className="inputstyle2">
            <div className="para2">
              <p>Withdraw</p>
            </div>
            <div className="input2">
              <TextField id="standard-basic" label=" " value={pair.withdraw} variant="standard" />
            </div>
          </div>
          <div className="inputstyle2">
            <div className="para2">
              <p>Minimum Withdraw</p>
            </div>
            <div className="input2">
              <TextField id="standard-basic" label=" " value={pair.minwithdraw} variant="standard" />
            </div>
          </div>
          <div className="inputstyle2">
            <div className="para2">
              <p>Maximum Withdraw</p>
            </div>
            <div className="input2">
              <TextField id="standard-basic" label=" " variant="standard" value={pair.maxwithdraw} />
            </div> 
          </div>
          <div className="inputstyle2">
            <div className="para2">
              <p>Net Fee</p>
            </div>
            <div className="input2">
              <TextField id="standard-basic" label=" " variant="standard" value={pair.netfee}/>
            </div>
          </div>
          <div className="inputstyle2">
            <div className="para2">
              <p>Order List</p>
            </div>
            <div className="input2">
              <TextField id="standard-basic" label=" " variant="standard" value={pair.orderlist} />
            </div>
          </div>
          <div className="inputstyle2">
            <div className="para2">
              <p>Point Value </p>
            </div>
            <div className="input2">
              <TextField id="standard-basic" label=" " variant="standard"  value={pair.pointvalue}/>
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
      {!pair && <NotFound />}
    </>
  );
};
export default Tradedetail;
