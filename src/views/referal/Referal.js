import React, { useState, useEffect } from "react";
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
import { useNavigate } from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CancelIcon from '@mui/icons-material/Cancel';

const Referal = () => {

  const Navigate = useNavigate()
  const tabelHeader = ["S.no", "Name", "Refered By", "Referal Code", 'Redeem INR', "Action"];
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false)
  const [Name, setName] = useState('')
  const [bank, setBank] = useState('')
  const [accNo, setAccNo] = useState('')
  const [ifsc, setIfsc] = useState('')
  const [inr, setInr] = useState('')
  const [inrerr, setInrerr] = useState('')
  const [checkerr, setCheckerr] = useState('')

  const [id, setId] = useState('')
  const [referralid, setReferralId] = useState('')
  const [enableRedeem, setEnableRedeem] = useState(false)
  const [amount, setAmount] = useState(false)
  const [referAmount, setReferAmount] = useState(0)
  const [referAmounterr, setReferAmounterr] = useState('')

  const [checked, setChecked] = useState(false);
  const [referalCode, setreferalCode] = useState(false);
  const [data, setData] = useState([]);

  const openReferalCode = () => {
    setreferalCode(true)
  }
  const closeReferalCode = () => {
    setreferalCode(false)
  }

  const redeemlist = () => {
    if (localStorage.getItem("imperials")) {
      Axios.get(`${consts.BackendUrl}/auth/getredemlist`, {
        headers: { Authorization: window.localStorage.getItem("imperials") },
      })
        .then((res) => {
          console.log(res?.data?.result, "open")
          if (res?.data?.result.length > 0) {
            setData(res?.data?.result)
          }
          else {
            setData([])
          }
        })
        .catch((err) => console.log(err.response?.data, "errrr"));
    } else {
      Navigate("/imperialAdmin/login");
    }
  }

  useEffect(() => {
    redeemlist()
  }, [page, limit]);


  const handleMOdeldata = (item) => {
    setName(item?.ReferredBy?.name)
    setBank(item?.accountdetailes?.bank_name)
    setAccNo(item?.accountdetailes?.account_no)
    setIfsc(item?.accountdetailes?.ifsc_code)
    setId(item?._id)
    setReferralId(item?.user.referred_by_id)
    setAmount(item?.amount)
  }

  const handleSave = () => {

    // if (inr == '') {
    //   setInrerr('Please Enter Redeem INR ')
    // }
    if (!checked) {
      setCheckerr('Please Approve Redemption')
    }
    else {
      const payload = {
        _id: id,
        referralId: referralid,
        amount: amount,
        redeempoints: inr,
        eligible: enableRedeem
      }
      setVisible(false)
      Axios.post(`${consts.BackendUrl}/auth/updatereedem`, payload, {
        headers: { Authorization: window.localStorage.getItem("imperials") },
      })
        .then((res) => {
          console.log(res, "openning")
          if (res?.data?.success) {
            redeemlist()
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
          else {
            redeemlist()
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
          }
          setInr('')
        })
        .catch((err) => { setInr(''); console.log(err.response?.data, "errrr") });
    }

  }


  const handleCheck = () => {
    checked ? console.log('true') : console.log('false');
    setChecked(true);
    setEnableRedeem(!checked)
    console.log(!checked)
  }

  const AddReferralAmount = async (req, res) => {
    try {
      if (referAmount == 0) {
        setReferAmounterr("Please Enter Amount")
      }
      else {
        const response = await Axios.post(`${consts.BackendUrl}/auth/referralAmount`, { amount: referAmount }, {
          headers: { Authorization: window.localStorage.getItem("imperials") },
        })
        setReferAmount(response?.data?.result?.amount)
        // console.log(response, 'response');
        if (response?.data?.success == true) {
          toast.success(`${response?.data?.message}`, {

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
          setReferAmount(0)
          closeReferalCode()
        }
      }
    } catch (error) {
      console.log(error, 'err');
    }
  }

  const findReferralAmount = async () => {
    try {
      const response = await Axios.post(`${consts.BackendUrl}/auth/getreferralAmount`, {}, {
        headers: { Authorization: window.localStorage.getItem("imperials") },
      })
      // console.log(response, 'response');
      if (response?.data?.success == true) {
        setReferAmount(response?.data?.result)
      }
      else {
        setReferAmount(0)
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    findReferralAmount()
  }, [])

  return (
    <>

      <ToastContainer />
      <div className="Add-Referel-Price-outer-btn"><button onClick={() => openReferalCode()}>Add Referel Price</button></div>
      {referalCode &&
        <div className="Add-Referel-Price-outer">
          <div className="Add-Referel-Price">
            <div className="cancel-icon">
              <CancelIcon onClick={closeReferalCode} />
            </div>
            <label>Referel Price</label>
            <input
              // type="Number"
              value={referAmount}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                  setReferAmounterr("Enter Valid Amount")
                }
              }}
              onChange={(e) => { setReferAmount(e.target.value); setReferAmounterr('') }} />
            {referAmounterr ? <div className='error-msg-red'>{referAmounterr}</div> : <></>}

            <button onClick={() => AddReferralAmount()} className="add-referal-btn">Add Referal</button>
          </div>
        </div>
      }
      <CTable >
        <CTableHead style={{ color: "white", background: "#303c54" }}>
          <CTableRow>
            {tabelHeader.map((value, index) => {

              return <CTableHeaderCell scope="col" key={index}>{value}</CTableHeaderCell>

            })}
          </CTableRow>
        </CTableHead>
        {console.log(data, 'data found')}
        {data.length > 0 &&
          <CTableBody>{
            data.map((value, index) => {
              return (
                <CTableRow key={index}>
                  <CTableDataCell style={{ verticalAlign: "middle" }} scope="row">{index + 1}</CTableDataCell>
                  <CTableDataCell style={{ verticalAlign: "middle" }} scope="row">{value?.ReferredBy?.name}</CTableDataCell>
                  <CTableDataCell style={{ verticalAlign: "middle" }} scope="row">{value?.user?.name}</CTableDataCell>
                  <CTableDataCell style={{ verticalAlign: "middle" }} scope="row">{value?.user?.referred_by_code}</CTableDataCell>
                  <CTableDataCell style={{ verticalAlign: "middle" }} scope="row">{value?.amount}</CTableDataCell>
                  <CTableDataCell style={{ verticalAlign: "middle" }} scope="row">
                    <CButton
                      style={{ marginLeft: "-7px" }}
                      onClick={() => { handleMOdeldata(value); setVisible(!visible) }}
                      color={"warning"}
                    >
                      {/* <CIcon icon={cilBell} className="me-2" /> */}
                      Enable Redeem
                    </CButton>
                    <CModal
                      alignment="center"
                      visible={visible}
                      onClose={() => { setVisible(false) }}
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
                            // type="number"
                            // value={inr}
                            value={amount}
                            // onChange={(e) => { setInr(e.target.value); setInrerr('') }}
                            id="exampleFormControlInput1"
                            label="Redeem INR"
                            placeholder="INR"
                            aria-describedby="exampleFormControlInputHelpInline"
                          />
                          <div className="error-msg-red">{inrerr != '' ? <>{inrerr}</> : <></>}</div>

                          {/* <input type="checkbox" id="myCheckbox" />
  <label for="myCheckbox">Approve Redemption</label> */}

                          {/* <CFormCheck id="flexCheckDefault" label="Approve Redemption" defaultChecked onClick={handleCheck}/>   */}

                          <div className="approve-redeem-checbox"><input type="checkbox" onChange={() => { handleCheck(); setCheckerr('') }} /><label>Approve Redemption</label></div>
                          <div className="error-msg-red">{checkerr != '' ? <>{checkerr}</> : <></>}</div>
                        </CForm>
                      </CModalBody>
                      <CModalFooter>
                        <CButton color="danger" onClick={() => { setVisible(false); setInrerr('') }}>
                          Close
                        </CButton>
                        <CButton color="success" onClick={() => { handleSave() }}>Save</CButton>
                      </CModalFooter>
                    </CModal>
                  </CTableDataCell>
                </CTableRow>
              );
            })}
          </CTableBody>
        }



      </CTable>
      {data.length == 0 && <p style={{ textAlign: "center", color: "black", fontSize: "18px" }} >Data Not Found</p>}
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
