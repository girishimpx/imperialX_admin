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
import Stack from '@mui/material/Stack';
import './userlist.css'

const Subscribelist = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState();
  const [loading, setloading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPageCount, settotalPageCount] = useState()

  const [value, setValue] = useState(0);
  // const[checkbox, setCheckBox] =useState(false)
  // const[checkbox1, setCheckBox1] =useState(false)
  // const[checkbox2, setCheckBox2] =useState(false)

  // const handleChange = () => {
  //   setCheckBox(!checkbox)
  // }
  // const handleChange1 = () => {
  //   setCheckBox1(!checkbox1)
  // }
  // const handleChange2 = () => {
  //   setCheckBox2(!checkbox2)
  // }





  useEffect(() => {
    setData("")
    if (localStorage.getItem("imperials")) {
      Axios.get(`${consts.BackendUrl}/users/getSubscriptionHistory?limit=${limit}&page=${page}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          Authorization: localStorage.getItem("imperials"),
        },
      })
        .then((res) => {
          console.log(res.data.result, "info")
          if (res?.data?.result?.length > 0) {
            console.log(res.data.result, "info")
            setData(res?.data?.result)
            settotalPageCount(res?.data?.result?.totalPages)

          } else {
            console.log("Data Not Found")
          }
        })
        .catch((err) => {
          console.log("", err);
          // toast.error(`${err?.response?.data?.message}`, {

          // duration: 3000,
          // position: "top-center",

          // Styling
          // style: {
          //   padding: "1rem",
          //   fontSize: "15px",
          //   color: "green",
          //   fontWeight: "bold",
          // },
          // className: "",

          // Custom Icon
          // icon: "👏",

          // Change colors of success/error/loading icon
          // iconTheme: {
          //   primary: "#000",
          //   secondary: "#fff",
          // },

          // Aria
          //   ariaProps: {
          //     role: "status",
          //     "aria-live": "polite",
          //   },
          // });
        });
    } else {
      Navigate("/imperialAdmin/login");
    }

  }, [limit, page]);

  const array = ["S.no", "UserName", "Exchange", "FollowerName", "Amount", "Spot", "Margin", "Future"];



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
                    style={{ verticalAlign: "middle", width: "12" }}
                    scope="row"
                  >
                    {value.user_name}
                  </CTableDataCell>
                  <CTableDataCell
                    style={{ verticalAlign: "middle", width: "12%" }}
                    scope="row"
                  >
                    {value.exchange}
                  </CTableDataCell>

                  <CTableDataCell
                    style={{ verticalAlign: "middle", width: "12%" }}
                    scope="row"
                  >
                    {value.follower_name}
                  </CTableDataCell>
                  <CTableDataCell
                    style={{ verticalAlign: "middle", width: "12%" }}
                    scope="row"
                  >
                    {value.amount}
                  </CTableDataCell>
                  <CTableDataCell 
                  style={{ verticalAlign: "middle", width: "12%" }} 
                  scope="row">
                    <input type="checkbox" checked={value?.trade_base?.spot} />
                  </CTableDataCell>
                  <CTableDataCell 
                  style={{ verticalAlign: "middle", width: "12%" }} 
                  scope="row">
                    <input type="checkbox" checked={value?.trade_base?.margin} />
                  </CTableDataCell>
                  <CTableDataCell 
                  style={{ verticalAlign: "middle", width: "12%" }} 
                  scope="row">
                    <input type="checkbox" checked={value?.trade_base?.future}  />
                  </CTableDataCell>
                  {/* <CTableDataCell
                    style={{ verticalAlign: "middle" }}
                    scope="row"
                  >
                    <CButton
                      style={{ marginLeft: "-7px" }}
                      onClick={() => {
                        Navigate("/imperialAdmin/UserDetail", { state: value });
                      }}
                      color={"primary"}
                    >
                      View
                    </CButton>
                  </CTableDataCell> */}
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

      {page ? (
        <div className="paginationdiv">
          <Stack spacing={2}>
            <Pagination
              count={totalPageCount}
              page={page}
              onChange={(event, value) => {
                setPage(value);
              }}
              variant="outlined" shape="rounded" />
          </Stack>
        </div>

      ) : (
        <>
        </>
      )}
    </>
  );
};

export default Subscribelist;
