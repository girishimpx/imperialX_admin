import React, { useEffect, useState } from "react";

import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from "@coreui/react";
import Button from "@mui/material/Button";
import CIcon from "@coreui/icons-react";
import { cilBell } from "@coreui/icons";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import consts from "../../constant/constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTradePair from "./AddPAir";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Userlist = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState();
  const [addpage, setaddpage] = useState(false);
  const [on, seton] = useState(false);
  const [limit, setLimit] = useState(10);
  const [totalPageCount, settotalPageCount] = useState();

  const [page, setPage] = useState(1);

  useEffect(() => {
    setData("");
    if (localStorage.getItem("imperials")) {
      Axios.get(
        `${consts.BackendUrl}/users/getMastersAdmin?limit=${limit}&page=${page}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            Authorization: localStorage.getItem("imperials"),
          },
        }
      )
        .then((res) => {
          if (res?.data?.result?.docs?.length > 0) {
            setData(res?.data?.result);
            settotalPageCount(res?.data?.result?.totalPages);
          }
        })
        .catch((err) => {
          console.log("");
        });
    } else {
      Navigate("/imperialAdmin/login");
    }
  }, [page, limit]);

  const array = ["S.no", "Name", "Email", "Suspend", "Verify", "Action"];

  return (
    <>
      {!addpage && (
        <Button
          style={{ marginBottom: "1rem" }}
          variant="contained"
          size="small"
          onClick={() => {
            setaddpage(true);
          }}
        >
          Add Masters
        </Button>
      )}

      {addpage && <AddTradePair setaddpage={setaddpage} on={on} />}

      {!addpage && (
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
              {data?.docs?.map((value, index) => {
                return (
                  <CTableRow key={index}>
                    {console.log(value, "open128")}
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
                      style={{ verticalAlign: "middle", width: "32%" }}
                      scope="row"
                    >
                      {value.email}
                    </CTableDataCell>
                    <CTableDataCell
                      style={{
                        verticalAlign: "middle",
                        color: `${value.suspend != true ? "green" : "red"}`,
                      }}
                      scope="row"
                    >
                      {value.suspend ? "Suspend" : " Resume"}
                    </CTableDataCell>
                    <CTableDataCell
                      style={{
                        verticalAlign: "middle",
                        color: `${
                          value?.email_verify == "true" ? "green" : "red"
                        }`,
                      }}
                      scope="row"
                    >
                      {value?.email_verify == "true"
                        ? "verified  "
                        : "Not verified"}
                    </CTableDataCell>
                    <CTableDataCell
                      style={{ verticalAlign: "middle" }}
                      scope="row"
                    >
                      <CButton
                        style={{ marginLeft: "-7px" }}
                        onClick={() => {
                          Navigate("/imperialAdmin/masterDetail", {
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
      )}
      {!data && !addpage && (
        <p style={{ textAlign: "center", color: "black", fontSize: "18px" }}>
          Data Not Found
        </p>
      )}

      {page && !addpage ? (
        <div className="paginationdiv">
          <Stack spacing={1}>
            <Pagination
              count={totalPageCount}
              page={page}
              onChange={(event, value) => {
                setPage(value);
              }}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Userlist;
