import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Axios from "axios";
import consts from "../../constant/constant";
import "./userlist.css";
import { CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell } from "@coreui/icons";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const UserDetails = () => {
  const back = useNavigate();
  const detail = useLocation();
  const [reason, setreason] = React.useState("");

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  console.log(detail?.state,"check")

  const Resume = (data) => {
    console.log(data,"sick")
    Axios.post(`${consts.BackendUrl}/users/masterrequestupdate`, data, {
      headers: {
        Authorization: localStorage.getItem("imperials"),
      },
    })
      .then((res) => {
        toast.success(`${res?.data.message}`, {
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
          navigate("/imperialAdmin/masterRequest");
        }, 2600);
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
  };

  const success = () => {
    Resume({
      _id: detail?.state?._id,
      status: "rejected",
      reason:reason
    });
  };

  return (
    <>
      <Toaster />

      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Enter reason for rejection"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              id="outlined-basic"
              placeholder="reason"
              sx={{ padding: "10px" }}
              variant="outlined"
              onChange={(e) => {
                if (reason.length < 3) {
                  const result = e.target.value.replace(/[^a-z]/gi, "");
                  setreason(result);
                } else {
                  setreason(e.target.value);
                }
              }}
            />
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={() => {
              handleClose();
              setreason("");
            }}
          >
            Cancel
          </Button>
          {reason.length > 3 && (
            <Button
              onClick={() => {
                success();
              }}
            >
              Submit
            </Button>
          )}
        </DialogActions>
      </Dialog>

      <Button
        className="Backbutton"
        onClick={() => {
          back("/imperialAdmin/masterRequest");
        }}
      >
        {" "}
        <ArrowBack /> Back
      </Button>
      <div className="input">
        <div className="inputstyle news usedetail-table-cls">
          <div className="head1">
            {/* <h2 className="Heading">User Detail</h2> */}
            <div className="usedetail-table-cls-inner">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>{" "} Kyc Verify</th>
                  <th>Action</th>
                </tr>
                <tr>
                 <td>{detail?.state?.user_id?.name}</td>
                 <td>{detail?.state?.user_id?.email}</td>
                 <td>{detail?.state?.user_id?.email_verify == "true" ? (
                  <span>Verified</span>
                ) : (
                  <span>Not Verified</span>
                )}</td>
                 <td>{" "}
                {detail?.state?.user_id?.kyc_verify ? (
                  <span>Verified</span>
                ) : (
                  <span>Not Verified</span>
                )}</td>
                 <td>
                 <div className="two_buttons">
                <CButton
                  style={{ backgroundColor: "red", marginRight: "1rem" }}
                  onClick={() => {
                    handleClickOpen();
                  }}
                  color={"primary"}
                >
                  {/* <CIcon icon={cilBell} className="me-2" /> */}
                  Reject
                </CButton>

                <CButton
                  style={{ backgroundColor: "RGB(56 220 27)" }}
                  onClick={() => {
                    Resume({
                      _id: detail?.state?._id,
                      status: "approved",
                    });
                  }}
                  color={"primary"}
                >
                  {/* <CIcon icon={cilBell} className="me-2" /> */}
                  Approve
                </CButton>
              </div>
              </td>
                </tr>
              </table>
            </div>
            {/* <div>
              <p> Name : {detail?.state?.user_id?.name}</p>
              <p> Email : {detail?.state?.user_id?.email}</p>
              <p>
                {" "}
                status :
                {detail?.state?.user_id?.email_verify == "true" ? (
                  <span>Verified</span>
                ) : (
                  <span>Not Verified</span>
                )}
              </p>
              <p>
                {" "}
                Kyc verify :{" "}
                {detail?.state?.user_id?.kyc_verify ? (
                  <span>Verified</span>
                ) : (
                  <span>Not Verified</span>
                )}
              </p>
              <div className="two_buttons">
                <CButton
                  style={{ backgroundColor: "red", marginRight: "1rem" }}
                  onClick={() => {
                    handleClickOpen();
                  }}
                  color={"primary"}
                >
                  Reject
                </CButton>

                <CButton
                  style={{ backgroundColor: "RGB(56 220 27)" }}
                  onClick={() => {
                    Resume({
                      _id: detail?.state?._id,
                      status: "approved",
                    });
                  }}
                  color={"primary"}
                >
                  Approve
                </CButton>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
