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
import Pagination from '@mui/material/Pagination';

const Userlist = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);


  useEffect(() => {
    if (localStorage.getItem("imperials")) {
      Axios.get(`${consts.BackendUrl}/users/getMasterRequestsAdmin?limit=${limit}&page=${page}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          Authorization: localStorage.getItem("imperials"),
        },
      })
        .then((res) => {
          if (res?.data?.result?.docs?.length > 0) {
            let datas = [];
            console.log(res?.data?.result?.docs, "datststst");
            for (let i = 0; i < res.data?.result?.docs.length; i++) {
              if (res?.data?.result?.docs[i].status == "pending") {
                datas.push(res?.data?.result?.docs[i]);
              }
            }
            if (datas.length > 0) {
              setData(datas);
            }
          }
        })
        .catch((err) => {
          console.log("");
        });
    } else {
      Navigate("/imperialAdmin/login");
    }
  }, []);

  const array = ["S.no", "Name", "Email", "Status", "Action"];

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
            {data.map((value, index) => {
  
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
                    {value.user_id?.name ? value.user_id.name : "-"}
                  </CTableDataCell>
                  <CTableDataCell
                    style={{ verticalAlign: "middle", width: "32%" }}
                    scope="row"
                  >
                    {value.user_id?.email ? value.user_id.email : "-"}
                  </CTableDataCell>
                  <CTableDataCell
                    style={{ verticalAlign: "middle", color: "orange" }}
                    scope="row"
                  >
                    {value.status ? value.status : "-"}
                  </CTableDataCell>

                  <CTableDataCell
                    style={{ verticalAlign: "middle" }}
                    scope="row"
                  >
                    <CButton
                      style={{ marginLeft: "-7px" }}
                      onClick={() => {
                        Navigate("/imperialAdmin/masterRequestDetail", {
                          state: value,
                        });
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
      {page > 1 && (
        <div className="paginationdiv">
          <Pagination
            id="pagination-button-color"
            onClick={(event) => {
              setPage(event.target.textContent);
            }}
            count={page}
            variant="outlined"
            color="primary"
          />
        </div>
      )}
    </>
  );
};

export default Userlist;
