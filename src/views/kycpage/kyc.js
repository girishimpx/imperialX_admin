import React,{useState,useEffect} from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Stack from "@mui/material/Stack";
import Axios from "axios";
import consts from "../../constant/constant";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton
} from "@coreui/react";
import CIcon from '@coreui/icons-react'
import { cilBell } from '@coreui/icons'
import {useNavigate} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';

const Kyc = () => {

  const Navigate = useNavigate()
  const tabelHeader=["S.no","Name","Email","Verify","Reason","Action"];
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalpage] = useState()


  const [data, setData] = useState();
  useEffect(() => {
    if (localStorage.getItem("imperials")) {
      Axios.get(`${consts.BackendUrl}/auth/kycsList?limit=${limit}&page=${page}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          Authorization: localStorage.getItem("imperials"),
        },
      })
        .then((res) => {
          // console.log(res?.data?.result ,"open")
          if (res?.data?.result.docs.length > 0 ) {
            setTotalpage(res?.data?.result?.totalPages)
            setData(res.data.result)
          }
        })
        .catch((err) => console.log(err.response?.data, "errrr"));
    } else {
      Navigate("/imperialAdmin/login");
    }
  }, [page,limit]);
  
  return (
    <>
      <CTable >
        <CTableHead style={{color:"white",background:"#303c54"}}>
          <CTableRow>
            {tabelHeader.map((value,index)=>{
              
              return <CTableHeaderCell scope="col" key={index}>{value}</CTableHeaderCell>
              
            })}
          </CTableRow>
        </CTableHead>
        
        {data && 
          <CTableBody className="font-weight-normal">{
            data.docs.map((value, index) => {
              return (
                <CTableRow key={index}>
                  <CTableDataCell style={{verticalAlign:"middle"}} scope="row">{index + 1}</CTableDataCell>
                  <CTableDataCell style={{verticalAlign:"middle"}} scope="row">{value?.user_id?.name}</CTableDataCell>
                  <CTableDataCell style={{verticalAlign:"middle"}} scope="row">{value?.user_id?.email}</CTableDataCell>
                  
                  <CTableDataCell style={{verticalAlign:"middle",color:`${value?.status == "0" ? "orange" :value?.status == "1"? "green" : value?.status == "2" ? "red":"" }`}} scope="row">{value?.status == "0" ? "Not verified" :value?.status == "1"? "verified" : value?.status == "2" ? "Declined":""   }</CTableDataCell>
                  <CTableDataCell style={{verticalAlign:"middle",color:`${value?.reason ? "red" :"black"}`}} scope="row" >{value?.reason ? value?.reason :"-" }</CTableDataCell>
                  <CTableDataCell style={{verticalAlign:"middle"}} scope="row">
                    <CButton
                      style={{ marginLeft: "-7px" }}
                      onClick={() => {
                        Navigate("/imperialAdmin/KycDetails", { state: value });
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
           }

        
        
      </CTable>
     {!data &&  <p style={{textAlign:"center",color:"black",fontSize:"18px"}} >Data Not Found</p>}
     {/* {page > 1 && ( */}
     {data ? (
        <div className="paginationdiv">
          <Stack spacing={2}>
          <Pagination
            page={page}
            // id="pagination-button-color"
            onChange={(event, value) => {
              setPage(value);
            }}
            count={totalPage}
            variant="outlined"
            color="primary"
          />
          </Stack>
        </div>
      )
      : (
        <></>
      )}
      
    </>
  );
};

export default Kyc;
