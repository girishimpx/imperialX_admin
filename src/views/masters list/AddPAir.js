import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import Axios from "../../Axios";
import consts from "../../constant/constant";
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

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmsetpassword] = useState("");
  const [apikey, setapikey] = useState("");
  const [secretkey, setsecretkey] = useState("");
  const [api_name, setapiname] = useState("");
  const [permission, setpermission] = useState("");
  const [Exchange, setExchange] = useState("");
  const [passphase, setpassphase] = useState("");

  const [nameerr, setnameerr] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [passworderr, setpassworderr] = useState("");
  const [confirmpassworderr, setconfirmsetpassworderr] = useState("");
  const [apikeyerr, setapikeyerr] = useState("");
  const [secretkeyerr, setsecretkeyerr] = useState("");
  const [api_nameerr, setapinameerr] = useState("");
  const [permissionerr, setpermissionerr] = useState("");
  const [Exchangeerr, setExchangeerr] = useState("");
  const [passphaseerr, setpassphaseerr] = useState("");

  const exchangeList = ["imperial"];
  const permissionList = [{ value: "read/write", type: "Read/write" }];

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
    const emailchec = new RegExp(
      /(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$)+/,
      "gm"
    ).test(password);
    

    if (name === "") {
      setnameerr("name required");
    } else if (email === "") {
      setemailerr("email required");
    } else if (
      new RegExp(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        "gm"
      ).test(email) == false
    ) {
      setemailerr("Invalid email ");
    } else if (permission === "") {
      setpermissionerr("permission required");
    } else if (passphase === "") {
      setpassphaseerr("Passphase required");
    } else if (apikey == "") {
      setapikeyerr("Apikey required");
    } else if (secretkey == "") {
      setsecretkeyerr("Secretkey required");
    } else if (api_name == "") {
      setapinameerr("Api name required");
    } else if (password == "") {
      setpassworderr("password required");
    } else if (
      new RegExp(/(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$)+/, "gm").test(
        password
      ) == false
    ) {
      setpassworderr("password must be 8 character like Abcd1234");
    } else if (Exchange == "") {
      setExchangeerr("Exchange required");
    } else if (confirmpassword == "") {
      setconfirmsetpassworderr("Confirm password required");
    } else if (confirmpassword != password) {
      setconfirmsetpassworderr("Confirm password must be same as Password");
    } else {
      let data = {
        name,
        email,
        password,
        api_key: apikey,
        secret_key: secretkey,
        api_name,
        permission,
        exchange: Exchange,
        passphrase: passphase        
      };
     
      Axios.post("/auth/addMasterByAdmin", data, {
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
            Axios.post("/wallet/createwalletbyAdmin", {user_id:response.data.result.user_id},{
              headers: { Authorization: localStorage.getItem("imperials") },
            })
          }, 1000);

        
       
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
          setname("");
          setemail("");
          setpassword("");
          setconfirmsetpassword("");
          setapikey("");
          setsecretkey("");
          setapiname("");
          setpermission("");
          setExchange("");
          setpassphase("");

          setnameerr("");
          setemailerr("");
          setpassworderr("");
          setconfirmsetpassworderr("");
          setapikeyerr("");
          setsecretkeyerr("");
          setapinameerr("");
          setpermissionerr("");
          setExchangeerr("");
          setpassphaseerr("");
        }}
      >
        {" "}
        <ArrowBack /> Back
      </Button>

      <div className="input">
        <div className="inputstyle">
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setnameerr("");

                if (name.length < 3) {
                  const result = e.target.value.replace(/[^A-Za-z0-9-_@#$%^&*]/gi, "");
                  setname(result);
                } else {
                  handlechanger(setname, e);
                }
              }}
              label="Name"
              variant="outlined"
            />
            {nameerr && (
              <p style={{ marginLeft: "10px", color: "red" }}>{nameerr}</p>
            )}
          </div>

          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setemailerr("");

                if (email.length < 3) {
                  const result = e.target.value.replace(/[^^A-Za-z0-9-_@#$%^&*]/gi, "");
                  setemail(result);
                } else {
                  handlechanger(setemail, e);
                }
              }}
              label="Email"
              variant="outlined"
            />
            {emailerr && (
              <p style={{ marginLeft: "10px", color: "red" }}>{emailerr}</p>
            )}
          </div>

          <div>
            <div>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Permission
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={permission}
                  label="Permission"
                  onChange={(e) => {
                    setpermissionerr("");
                    setpermission(e.target.value);
                  }}
                >
                  {permissionList?.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item.value}>
                        {item.type}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              {permissionerr && (
                <p style={{ marginLeft: "10px", color: "red" }}>
                  {permissionerr}
                </p>
              )}
            </div>
          </div>

          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setpassphaseerr("");

                if (passphase.length < 3) {
                  const result = e.target.value.replace(/[^A-Za-z0-9-_@#$%^&*]/gi, "");
                  setpassphase(result);
                } else {
                  handlechanger(setpassphase, e);
                }
              }}
              label="Passphase"
              variant="outlined"
            />
            {passphaseerr && (
              <p style={{ marginLeft: "10px", color: "red" }}>{passphaseerr}</p>
            )}
          </div>

          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setapikeyerr("");

                if (apikey.length < 3) {
                  const result = e.target.value.replace(/[^A-Za-z0-9-_@#$%^&*]/gi, "");
                  setapikey(result);
                } else {
                  handlechanger(setapikey, e);
                }
              }}
              label="Api key"
              variant="outlined"
            />

            
            {apikeyerr && (
              <p style={{ marginLeft: "10px", color: "red" }}>{apikeyerr}</p>
            )}
          </div>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setsecretkeyerr("");

                if (secretkey.length < 3) {
                  const result = e.target.value.replace(/[^A-Za-z0-9-_@#$%^&*]/gi, "");
                  setsecretkey(result);
                } else {
                  handlechanger(setsecretkey, e);
                }
              }}
              label="Secret Key"
              variant="outlined"
            />
            {secretkeyerr && (
              <p style={{ marginLeft: "10px", color: "red" }}>{secretkeyerr}</p>
            )}
          </div>

          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setapinameerr("");

                if (api_name.length < 3) {
                  const result = e.target.value.replace(/[^a-z]/gi, "");
                  setapiname(result);
                } else {
                  handlechanger(setapiname, e);
                }
              }}
              label="Api Name"
              variant="outlined"
            />
            {api_nameerr && (
              <p style={{ marginLeft: "10px", color: "red" }}>{api_nameerr}</p>
            )}
          </div>

          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setpassworderr("");

                if (password.length < 3) {
                  const result = e.target.value.replace(/[^a-z]/gi, "");
                  setpassword(result);
                } else {
                  handlechanger(setpassword, e);
                }
              }}
              label="Password"
              variant="outlined"
            />
            {passworderr && (
              <p style={{ marginLeft: "10px", color: "red", width: "70%" }}>
                {passworderr}
              </p>
            )}
          </div>

          <div>
            <div>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Exchange</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Exchange}
                  label="Exchange"
                  onChange={(e) => {
                    setExchangeerr("");
                    setExchange(e.target.value);
                  }}
                >
                  {exchangeList?.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              {Exchangeerr && (
                <p style={{ marginLeft: "10px", color: "red" }}>
                  {Exchangeerr}
                </p>
              )}
            </div>
          </div>

          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) => {
                setconfirmsetpassworderr("");

                if (confirmpassword.length < 3) {
                  const result = e.target.value.replace(/[^a-z]/gi, "");
                  setconfirmsetpassword(result);
                } else {
                  handlechanger(setconfirmsetpassword, e);
                }
              }}
              label="Confirm Password"
              variant="outlined"    
            />
            {confirmpassworderr && (
              <p style={{ marginLeft: "10px", color: "red", width: "60%" }}>
                {confirmpassworderr}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="button">
        <Button variant="contained" onClick={submitFunction}>
          Sumbit
        </Button>
      </div>
    </>
  );
};

export default KycDetails;
{
  /* <h2>Kyc Detail Page</h2> */
}
