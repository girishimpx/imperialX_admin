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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Support from '../Support/Support'

const UserDetails = () => {
  const back = useNavigate();
  const detail = useLocation();
  const [reason, setreason] = React.useState();

const navigate = useNavigate()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  const Resume = (data) => {
    Axios.post(
      `${consts.BackendUrl}/users/suspendUsersandMasters`,
      { id: data._id, suspend: data.suspend },
      {
        headers: {
          Authorization: localStorage.getItem("imperials"),
        },
      }
    )
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
          navigate("/imperialAdmin/userlist")
        },2600)
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

  return (
    <Support/>
//     <>
//       <Toaster />

//       <Dialog
//         open={open}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Do you want to suspend" }
//         </DialogTitle>
//         <DialogActions>
//           <Button onClick={handleClose}>No</Button>
//           <Button onClick={()=>{
//             handleClose()
//             Resume({_id:detail?.state?._id,suspend:true})
//           }} autoFocus>
//             Yes
//           </Button>
//         </DialogActions>
//       </Dialog>


//       <Button
//         className="Backbutton"
//         onClick={() => {
//           back("/imperialAdmin/userlist");
//         }}
//       >
//         {" "}
//         <ArrowBack /> Back

        
//       </Button>
//       <div className="input">
//         <div className="inputstyle news">
//           <div className="head1">
//             {/* <h2 className="Heading">User Detail</h2> */}
//             <div>
//               <p> Name : {detail?.state?.name}</p>
//               <p> Email : {detail?.state?.email}</p>
//               <p>
//                 {" "}
//                 status : 
//                 {detail?.state?.email_verify == "true" ? (
//                   <span>Verified</span>
//                 ) : (
//                   <span>Not Verified</span>
//                 )}
//               </p>
//               <p>
//                 {" "}
//                 Kyc verify :{" "}
//                 {detail?.state?.kyc_verify ? (
//                   <span>Verified</span>
//                 ) : (
//                   <span>Not Verified</span>
//                 )}
//               </p>
//               <div className="two_buttons">
//                 {!detail?.state?.suspend && 
//                   <CButton
//                   style={{ backgroundColor: "red" }}
//                   onClick={() => {
//                     handleClickOpen()
//                   }}
//                   color={"primary"}
//                 >
//                   {/* <CIcon icon={cilBell} className="me-2" /> */}
//                   Suspend
//                 </CButton>}

// {detail?.state?.suspend &&              <CButton
//                   style={{ backgroundColor: "RGB(56 220 27)" }}
//                   onClick={() => {
//                     Resume({_id:detail?.state?._id,suspend:false});
//                   }}
//                   color={"primary"}
//                 >
//                   {/* <CIcon icon={cilBell} className="me-2" /> */}
//                   Resume
//                 </CButton>}
//                 {console.log(detail?.state,"open")}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
  );
};

export default UserDetails;
