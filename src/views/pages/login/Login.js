import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import consts from "../../../constant/constant";

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import Axios from "axios";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailerr, setEmailerr] = useState(false);
  const [passworderr, setPassworderr] = useState(false);
  const [emailerrmsg, setEmailerrmsg] = useState();
  const [pswErrmsg, setpswerrmsg] = useState();

  const signin = () => {
    console.log("signin");
    const data = {
      email,
      password,
    };
    const emailRegex = new RegExp(
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      "gm"
    );

    const emailcheck = emailRegex.test(email);
    if (!emailcheck) {
      setEmailerrmsg("Invalid Email");
      return setEmailerr(true);
    } else {
      if (password.length <= 5) {
        setpswerrmsg("Password must be at least 5 characters long");

        return setPassworderr(true);
      } else {
        Axios.post(`${consts.BackendUrl}/auth/login`, data)
          .then((res) => {
            if (res.data.success) {
              localStorage.setItem(
                "imperials",
                res?.data?.result?.token
              );
              navigate('/imperialAdmin/dashboard');
            }
          })
          .catch((err) => {
            toast.error(`${err?.response?.data?.message}`, {
            
                duration: 3000,
                position: "top-right",
      
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
      }
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <ToastContainer />
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            
              <CCard className="p-4" style={{width:"50%",margin:"auto"}}>
                <CCardBody>
                  <CForm>
                    <h1 style={{textAlign:"center"}}>Sign in</h1>
                    <p className="text-medium-emphasis" style={{textAlign:"center"}}>
                      Sign In to your account
                    </p>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="email"
                        placeholder="example@gmail.com"
                        autoComplete="Email"
                        onChange={(e) => {
                          setEmailerr(false);
                          setEmail(e.target.value);
                        }}
                      />
                    </CInputGroup>
                    {emailerr && <p className="errmsg">{emailerrmsg}</p>}
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        name="password"
                        type="password"
                        placeholder="Password1234"
                        autoComplete="current-password"
                        onChange={(e) => {
                          setPassworderr(false);
                          setPassword(e.target.value);
                        }}
                      />
                    </CInputGroup>
                    {passworderr && <p className="errmsg">{pswErrmsg}</p>}

                    <CRow >

                    {/* <CCol xs={6} type="button" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}

                      <CCol  style={{textAlign:"end",textAlign:"center"}} >
                        <CButton
                          onClick={signin}
                          color="primary"
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                      
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
