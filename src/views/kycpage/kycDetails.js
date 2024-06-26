import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import Axios from "axios";
import consts from "../../constant/constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NFTLogo from '../../assets/images/NFT-Logo.png'
import "./kyc.css";


const KycDetails = () => {
  const detail = useLocation();
  const [reason, setReason] = useState();
  const [reasons, setReasons] = useState(false);
  const Navigate = useNavigate();
  const back = useNavigate();

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
        if (res?.data?.success) {
          toast.success(`${res?.data?.message}`, {

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
        }
        else {
          toast.error(`${res?.data?.message}`, {

            duration: 1800,
            position: "top-center",

            // Styling
            style: {
              padding: "1rem",
              fontSize: "15px",
              color: "red",
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
        }
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

  return (
    <>
      <ToastContainer />
      <Button
        className="Backbutton"
        onClick={() => {
          back("/imperialAdmin/kyc");
        }}
      >
        {" "}
        <ArrowBack /> Back
      </Button>

      <div className="input kyc-detail-input-fields-outer">
        <div className="DocIMage">
          <p style={{ color: "black" }}>Document Image</p>
          <img src={detail?.state?.document_image} alt="NFTLogo" />
        </div>
        <div className="inputstyle kyc-detail-input-fields">
          <div>
            <label>First Name</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.first_name}
              disabled={detail?.state?.first_name}
              variant="outlined"
            />
          </div>
          <div>
            <label>Last Name</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.last_name}
              disabled="true"
              variant="outlined"
            />
          </div>
          <div>
            <label>Reason</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.reason}
              disabled="true"
              variant="outlined"
            />
          </div>
          <div>
            <label>Phone</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.phone_no}
              disabled={detail?.state?.phone_no}
              label=""
              variant="outlined"
            />
          </div>
          <div>
            <label>Gender</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.gender}
              disabled={detail?.state?.gender}
              variant="outlined"
            />
          </div>
          <div>
            <label>DOB</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.dob}
              disabled={detail?.state?.dob}
              variant="outlined"
            />
          </div>
          <div>
            <label>Country</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.country}
              disabled={detail?.state?.country}
              variant="outlined"
            />
          </div>
          <div>
            <label>State</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.state}
              disabled={detail?.state?.state}
              variant="outlined"
            />
          </div>
          <div>
            <label>City</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.city}
              disabled={detail?.state?.city}
              variant="outlined"
            />
          </div>
          <div>
            <label>Zipcode</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.zipcode}
              disabled={detail?.state?.zipcode}
              variant="outlined"
            />
          </div>
          <div>
            <label>Address</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.address}
              disabled={detail?.state?.address}
              variant="outlined"
            />
          </div>
          <div>
            <label>Document Type</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.document_type}
              disabled={detail?.state?.document_type}
              variant="outlined"
            />
          </div>
          <div>
            <label>Document Number</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.document_num}
              disabled={detail?.state?.document_num}
              variant="outlined"
            />
          </div>
          <div>
            <label>Telegram Name</label>
            <TextField
              id="outlined-basic"
              value={detail?.state?.telegram}
              disabled={detail?.state?.telegram}
              variant="outlined"
            />
          </div>
        </div>
      </div>

      <div className="buttons">
        {reasons && (
          <>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Please enter reason...."
              onChange={(e) => {
                setReason(e.target.value);
              }}
            />
            <Button
              className="submitbutton"
              onClick={() => {
                Action("2");
              }}
              disabled={
                reason == undefined ? true : reason?.length <= 3 ? true : false
              }
              onCLick
              variant="contained"
            >
              Submit
            </Button>
          </>
        )}
      </div>

      <div className="button">

        {(detail?.state?.status == "2" || detail?.state?.status == "0") && (
          <Button
            variant="contained"
            onClick={() => {
              Action("1");
            }}
          >
            Approve
          </Button>

        )}



        {detail?.state?.status == "0" && (
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setReason();
              setReasons(true);
            }}
          >
            Decline
          </Button>
        )}
      </div>

    </>
  );
};

export default KycDetails;
{
  /* <h2>Kyc Detail Page</h2> */
}
