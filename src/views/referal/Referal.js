import React,{useState,useEffect} from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Axios from "axios";
import consts from "../../constant/constant";
import './referal.css';
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CForm,
  CFormInput,
  CFormCheck
} from "@coreui/react";
import CIcon from '@coreui/icons-react'
import { cilBell } from '@coreui/icons'
import {useNavigate} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Referal = () => {

  const Navigate = useNavigate()
  const tabelHeader=["S.no","Name","Refered By","Referal Code",'Redeem INR',"Action"];
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false)
  const [Name, setName] = useState('')
  const [bank, setBank] = useState('')
  const [accNo, setAccNo] = useState('')
  const [ifsc, setIfsc] = useState('')
  const [inr, setInr] = useState('')
  const [inrerr, setInrerr] = useState('')
  const [id, setId] = useState('')
  const [enableRedeem, setEnableRedeem] = useState(false)
  const [checked, setChecked] = useState(false);

  const [data, setData] = useState();   

  const redeemlist = () => {
  if (localStorage.getItem("imperials")) {
    Axios.get(`${consts.BackendUrl}/auth/getredemlist`,{
      headers: { Authorization: window.localStorage.getItem("imperials") },
    })
      .then((res) => {
        console.log(res?.data?.result ,"open")
        if (res?.data?.result.length > 0 ) {
          
          setData(res?.data?.result)
        }
      })
      .catch((err) => console.log(err.response?.data, "errrr"));
  } else {
    Navigate("/imperialAdmin/login");
  }
}

  useEffect(() => {
    redeemlist()
  }, [page,limit]);


  const handleMOdeldata = (item) => {
    setName(item.name)
    // setBank(item.name)
    setAccNo(item?.accountdetailes?.account_no)
    setIfsc(item?.accountdetailes?.ifsc_code)
    setId(item?._id)
  }

  const handleSave = () => {
   
    if(inr == ''){
        setInrerr('Please Enter Redeem INR ')
    }else{
    const payload = {
        _id : id,
        redeempoints : inr,
        eligible : enableRedeem
    }
    setVisible(false)
    Axios.post(`${consts.BackendUrl}/auth/updatereedem`,payload,{
        headers: { Authorization: window.localStorage.getItem("imperials") },
      })
        .then((res) => {
          console.log(res,"openning")
          if (res?.data?.success ) {
            setInr('')
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
           
          }
          redeemlist()
          setInr('')
        })
        .catch((err) => { setInr(''); console.log(err.response?.data, "errrr")});
    }

    }


      const handleCheck = () => {
      
        checked ? console.log('true') : console.log('false');

        setChecked(!checked);
        setEnableRedeem(!checked)
        console.log(!checked)
    }
  
  return (
    <>
    <ToastContainer />
      <CTable >
        <CTableHead style={{color:"white",background:"#303c54"}}>
          <CTableRow>
            {tabelHeader.map((value,index)=>{
              
              return <CTableHeaderCell scope="col" key={index}>{value}</CTableHeaderCell>
              
            })}
          </CTableRow>
        </CTableHead>
        {console.log(data,'data found')}
        {data && 
          <CTableBody>{
            data.map((value, index) => {
              return (
                <CTableRow key={index}>
                  <CTableDataCell style={{verticalAlign:"middle"}} scope="row">{index + 1}</CTableDataCell>
                  <CTableDataCell style={{verticalAlign:"middle"}} scope="row">{value?.name}</CTableDataCell>
                  <CTableDataCell style={{verticalAlign:"middle"}} scope="row">{value?.Following?.name}</CTableDataCell>
                  <CTableDataCell style={{verticalAlign:"middle"}} scope="row">{value?.referred_by_code}</CTableDataCell>
                  <CTableDataCell style={{verticalAlign:"middle"}} scope="row">{value?.redeem_points}</CTableDataCell>
                  <CTableDataCell style={{verticalAlign:"middle"}} scope="row">
                    <CButton
                      style={{ marginLeft: "-7px" }}
                      onClick={() =>{ handleMOdeldata(value); setVisible(!visible)}}
                      color={"warning"}
                    >
                      {/* <CIcon icon={cilBell} className="me-2" /> */}
                       Enable Redeem
                    </CButton>
                    <CModal
      alignment="center"
      visible={visible}
      onClose={() =>{  setVisible(false) }}
      aria-labelledby="VerticallyCenteredExample"
      className="redeem-pop-up-style-cls"
    >
      <CModalHeader>
        <CModalTitle id="VerticallyCenteredExample">Enable Redeem</CModalTitle>
      </CModalHeader>
      <CModalBody>
      <CForm>
      <CFormInput
    type="text"
    id="exampleFormControlInput1"
    value={Name}
    label="Name"
    placeholder="Name"
    aria-describedby="exampleFormControlInputHelpInline"
  />
    <CFormInput
    type="text"
    value={bank}
    id="exampleFormControlInput1"
    label="Bank Name"
    placeholder="Bank"
    aria-describedby="exampleFormControlInputHelpInline"
  />
  <CFormInput
    type="text"
    value={accNo}
    id="exampleFormControlInput1"
    label="Account Number"
    placeholder="Account Number"
    aria-describedby="exampleFormControlInputHelpInline"
  />
  <CFormInput
    type="text"
    value={ifsc}
    id="exampleFormControlInput1"
    label="IFSC Code"
    placeholder="IFSC"
    aria-describedby="exampleFormControlInputHelpInline"
  />
  <CFormInput
    type="number"
    value={inr}
    onChange={(e) => {setInr(e.target.value); setInrerr('')}}
    id="exampleFormControlInput1"
    label="Redeem INR"
    placeholder="INR"
    aria-describedby="exampleFormControlInputHelpInline"
  />
<div className="error-msg-red">{inrerr != '' ?  <>{inrerr}</> : <></>}</div>

  {/* <input type="checkbox" id="myCheckbox" />
  <label for="myCheckbox">Approve Redemption</label> */}

  {/* <CFormCheck id="flexCheckDefault" label="Approve Redemption" defaultChecked onClick={handleCheck}/>   */}

  <div className="approve-redeem-checbox"><input type="checkbox" onChange={handleCheck} /><label>Approve Redemption</label></div>

  
  

      </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="danger" onClick={() => {setVisible(false); setInrerr('')  }}>
          Close
        </CButton>
        <CButton color="success" onClick={handleSave}>Save</CButton>
      </CModalFooter>
    </CModal>
                  </CTableDataCell>
                </CTableRow>
              );
            })}
            </CTableBody>
           }

        
        
      </CTable>
     {!data &&  <p style={{textAlign:"center",color:"black",fontSize:"18px"}} >Data Not Found</p>}
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

export default Referal;
