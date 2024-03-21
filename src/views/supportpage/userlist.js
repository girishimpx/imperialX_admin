import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell } from "@coreui/icons";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import consts from "../../constant/constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './userlist.css'

const Userlist = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    if (localStorage.getItem("imperials")) {
      Axios.get(`${consts.BackendUrl}/auth/usersList?limit=50`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          Authorization: localStorage.getItem("imperials"),
        },
      })
        .then((res) => {
          if (res?.data?.docs.length > 0) {
            console.log(res.data,"success")
            let userlist = []
            for(let i=0; i<res.data.docs.length; i++){
              
                userlist.push(res.data.docs[i])
              
            }
            
            if(userlist.length > 0 ){
              setData(userlist)
            }
          }
        })
        .catch((err) => {
          toast.error(`${err?.response?.data?.message}`, {
            
              duration: 3000,
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
        });
    } else {
      Navigate("/imperialAdmin/login");
    }
  }, []);

  const array = ["S.no", "Name", "Email","suspend", "Verify", "Action"];

  return (
    <>
      <CTable>
        <ToastContainer />
        <CTableHead style={{ color: "white", background: "#303c54" }}>
          <CTableRow>
            {array.map((val, index) => {
              return (
                <CTableHeaderCell scope="col" key={index}>
                  {val}
                </CTableHeaderCell>
              );
            })}
          </CTableRow>
        </CTableHead>

        {data && (
          <CTableBody className="font-weight-normal">
            {data?.map((value, index) => {
              return (
                <CTableRow key={index}>
                  <CTableDataCell
                    style={{ verticalAlign: "middle" }}
                    scope="row"
                  >
                    {index + 1}
                  </CTableDataCell>
                  <CTableDataCell
                    style={{ verticalAlign: "middle" }}
                    scope="row"
                  >
                    {value.name}
                  </CTableDataCell>
                  <CTableDataCell
                    style={{ verticalAlign: "middle",width:"32%" }}
                    scope="row"
                  >
                    {value.email}
                  </CTableDataCell>
                  
                  <CTableDataCell
                    style={{ verticalAlign: "middle",
                    color: `${value?.suspend != true ? "green" : "red"}`,
                  }}
                    scope="row"
                  >
                    {value.suspend ? "Suspend" :" Resume" }
                  </CTableDataCell>
                  <CTableDataCell
                    style={{
                      verticalAlign: "middle",
                      color: `${value?.email_verify == "true" ? "green" : "red"}`,
                    }}
                    scope="row"
                  >
                    
                    {value.email_verify == "true" ? "verified  " : "Not verified"}
                  </CTableDataCell>
                  <CTableDataCell
                    style={{ verticalAlign: "middle" }}
                    scope="row"
                  >
                    <CButton
                      style={{ marginLeft: "-7px" }}
                      onClick={() => {
                        Navigate("/imperialAdmin/supportMain", { state: value });
                      }}
                      color={"primary"}
                    >
                      {/* <CIcon icon={cilBell} className="me-2" /> */}
                      View
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              );
            })}
          </CTableBody>
        )}
      </CTable>
        {!data && (
          <p style={{ textAlign: "center", color: "black", fontSize: "18px" }}>
            Data Not Found
          </p>
        )}
    </>
  );
};

export default Userlist;
