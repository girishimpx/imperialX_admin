import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import Axios from "../../../Axios";
import consts from "../../../constant/constant";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import "./kyc.css";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const KycDetails = ({ setaddpage, on }) => {
  const navigate = useNavigate();
  const detail = useLocation();
  const [reason, setReason] = useState();
  const [reasons, setReasons] = useState(false);
  const Navigate = useNavigate();
  const back = useNavigate();

  const [coinname1, setcoinname1] = useState("");
  const [coinname2, setcoinname2] = useState("");
  const [coin1, setcoin1] = useState();
  const [coin2, setcoin2] = useState();
  const [chain, setchain] = useState("");
  const [withdraw, setwithdraw] = useState("");
  const [maxwithdraw, setmaxwithdraw] = useState("");
  const [minwithdraw, setminwithdraw] = useState("");
  const [point_value, setpoint_value] = useState("");
  const [netfee, setnetfee] = useState("");
  const [orderlist, setorderlist] = useState("");

  const [coinname1err, setcoinname1err] = useState("");
  const [coinname2err, setcoinname2err] = useState("");
  const [chainerr, setchainerr] = useState("");
  const [withdrawerr, setwithdrawerr] = useState("");
  const [maxwithdrawerr, setmaxwithdrawerr] = useState("");
  const [minwithdrawerr, setminwithdrawerr] = useState("");
  const [point_valueerr, setpoint_valueerr] = useState("");
  const [netfeeerr, setnetfeeerr] = useState("");
  const [orderlisterr, setorderlisterr] = useState("");

  const [assets, setassets] = useState();

  const handlechanger = (setdata, event) => {
    setdata(event.target.value);
  };

  const chainArray = ["coin"];

  useEffect(() => {
    if (localStorage.getItem("imperials")) {
      Axios.get(`${consts.BackendUrl}/assets/getallasset`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          Authorization: localStorage.getItem("imperials"),
        },
      })
        .then((res) => {
          if (res?.data?.result.length > 0) {
            setassets(res?.data?.result);
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } else {
      Navigate("/imperialAdmin/login");
    }
  }, [on]);

  const Action = async (status) => {
    setReasons(false);
    const data = {
      _id: detail?.state?._id,
      status: status,
      reason: reason != undefined ? reason : "original",
    };
    await Axios.post(`${consts.BackendUrl}/auth/verifyKyc`, data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Authorization: localStorage.getItem("imperials"),
      },
    })
      .then((res) => {



        toast.success(`${res?.data.message}`, {
          duration: 1800,
          position: "top-center",

          // Styling
          style: {
            padding: "1rem",
            fontSize: "15px",
            color: "green",
            fontWeight: "bold",
          },
          className: "",

          // Custom Icon
          icon: "👏",

          // Change colors of success/error/loading icon
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },

          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });


        setTimeout(() => {
          Navigate("/imperialAdmin/kyc");
        }, 1800);
      })
      .catch((err) => {
  


        toast.error(`${err?.response?.data?.message}`, {
          duration: 1800,
          position: "top-center",

          // Styling
          style: {
            padding: "1rem",
            fontSize: "15px",
            color: "green",
            fontWeight: "bold",
          },
          className: "",

          // Custom Icon
          // icon: "👏",

          // Change colors of success/error/loading icon
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },

          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
      });
  };

  const submitFunction = () => {
    if (coinname1 === "" || coinname1 === " ") {
      setcoinname1err("Coin1 required");
    } else if (coinname2 === "" || coinname2 === " ") {
      setcoinname2err("Coin2 required");
    } else if (chain === "" || chain === " ") {
      setchainerr("Chain required");
    } else if (withdraw === "" || withdraw === " ") {
      setwithdrawerr("Withdraw required");
    } else if (withdraw == "0" || withdraw <= "0") {
      setwithdrawerr("Withdraw must be greater than 0");
    } else if (maxwithdraw === "" || maxwithdraw === " ") {
      setmaxwithdrawerr("Max withdraw required");
    } else if (maxwithdraw == "0" || maxwithdraw <= "0") {
      setmaxwithdrawerr("Max withdraw must be greater than 0");
    } else if (minwithdraw === "" || minwithdraw === " ") {
      setminwithdrawerr("Min withdraw required");
    } else if (minwithdraw == "0" || minwithdraw <= "0") {
      setminwithdrawerr("Min withdraw must be greater than 0");
    } else if (point_value === "" || point_value === "") {
      setpoint_valueerr("Point value required");
    } else if (point_value == "0" || point_value <= "0") {
      setpoint_valueerr("Point value must be greater than 0");
    } else if (netfee === "" || netfee === " ") {
      setnetfeeerr("Netfee required");
    } else if (netfee == "0" || netfee <= "0") {
      setnetfeeerr("Netfee must be greater than 0");
    } else if (orderlist === "" || orderlist === " ") {
      setorderlisterr("Orderlist required");
    } else if (orderlist == "0" || orderlist <= "0") {
      setorderlisterr("Orderlist must be greater than 0");
    } else {
      let data = {
        tradepair: `${coin1}-${coin2}`,
        coinname1,
        coinname2,
        chain,
        withdraw,
        maxwithdraw,
        minwithdraw,
        point_value,
        netfee,
        orderlist,
      };
      
      Axios.post("/assets/inserttradepair", data, {
        headers: { Authorization: localStorage.getItem("imperials") },
      })
      .then((response) => {
        toast.success(`${response?.data.message}`, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: {
            padding: "1rem",
            fontSize: "15px",
            color: "green",
            fontWeight: "bold",
          },
          className: "",

          // Custom Icon
          icon: "👏",

          // Change colors of success/error/loading icon
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },

          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });

        setTimeout(() => {
          window.location.reload();
        }, 1600);
      })
        .catch((err) => {
          toast.error(`${err?.response?.data?.message}`, {
            duration: 4000,
            position: "top-center",

            // Styling
            style: {
              backgroundColor: "#fc1922",
              padding: "1rem",
              fontSize: "18px",
              color: "white",
              fontWeight: "bold",
            },
            className: "",

            // Custom Icon
            icon: "",

            // Change colors of success/error/loading icon
            iconTheme: {
              primary: "#000",
              secondary: "#fff",
            },

            // Aria
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
          });
        });
    }
  };

  return (
    <>
      <Toaster />
      <Button
        className="Backbutton"
        onClick={() => {
          setaddpage(false);
          setcoin1("")
          setcoinname1("")
          setcoinname2("")
          setcoin2("")
          setchain("");
          setwithdraw("");
          setmaxwithdraw("");
          setminwithdraw("");
          setpoint_value("");
          setnetfee("");
          setorderlist("");
        }}
      >
        {" "}
        <ArrowBack /> Back
      </Button>

      <div className="input">
        <div className="inputstyle">
          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Coin 1</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={coin1}
                label="Chain"
                onChange={(e) => {
                  setcoinname1err("");
                  setcoinname1(e.target.value.coinname);
                  setcoin1(e.target.value.symbol);
                }}
              >
                {assets?.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item.symbol}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {coinname1err && (
              <p style={{ marginLeft: "10px", color: "red" }}>{coinname1err}</p>
            )}
          </div>

          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Coin 2</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={coin2}
                label="Chain"
                onChange={(e) => {
                  setcoinname2err("");
                  setcoinname2(e.target.value.coinname);
                  setcoin2(e.target.value.symbol);
                }}
              >
                {assets?.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item.symbol}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {coinname2err && (
              <p style={{ marginLeft: "10px", color: "red" }}>{coinname2err}</p>
            )}
          </div>

          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Chain</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={chain}
                label="Chain"
                onChange={(e) => {
                  setchainerr("");
                  handlechanger(setchain, e);
                }}
              >
                {chainArray.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {chainerr && (
              <p style={{ marginLeft: "10px", color: "red" }}>{chainerr}</p>
            )}
          </div>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setwithdrawerr("");
                handlechanger(setwithdraw, e);
              }}
              type="number"
              label="Withdraw"
              variant="outlined"
            />
            {withdrawerr && (
              <p style={{ marginLeft: "10px", color: "red" }}>{withdrawerr}</p>
            )}
          </div>

          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setmaxwithdrawerr("");
                handlechanger(setmaxwithdraw, e);
              }}
              type="number"
              label="Max withdraw"
              variant="outlined"
            />
            {maxwithdrawerr && (
              <p style={{ marginLeft: "10px", color: "red" }}>
                {maxwithdrawerr}
              </p>
            )}
          </div>

          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setminwithdrawerr("");
                handlechanger(setminwithdraw, e);
              }}
              type="number"
              label="Min withdraw"
              variant="outlined"
            />
            {minwithdrawerr && (
              <p style={{ marginLeft: "10px", color: "red" }}>
                {minwithdrawerr}
              </p>
            )}
          </div>

          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setpoint_valueerr("");
                handlechanger(setpoint_value, e);
              }}
              type="number"
              label="Point value"
              variant="outlined"
            />
            {point_valueerr && (
              <p style={{ marginLeft: "10px", color: "red" }}>
                {point_valueerr}
              </p>
            )}
          </div>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setorderlisterr("");
                handlechanger(setorderlist, e);
              }}
              type="number"
              label="Order List"
              variant="outlined"
            />
            {orderlisterr && (
              <p style={{ marginLeft: "10px", color: "red" }}>{orderlisterr}</p>
            )}
          </div>

          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setnetfeeerr("");
                handlechanger(setnetfee, e);
              }}
              type="number"
              label="Netfee"
              variant="outlined"
            />
            {netfeeerr && (
              <p style={{ marginLeft: "10px", color: "red" }}>{netfeeerr}</p>
            )}
          </div>
        </div>
      </div>
      <div className="button">
        <Button variant="contained" onClick={submitFunction}>
          Create Pair
        </Button>
      </div>
    </>
  );
};

export default KycDetails;
{
  /* <h2>Kyc Detail Page</h2> */
}
