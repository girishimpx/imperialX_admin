import axios from "axios";
import { useState, useEffect } from "react";
import Const from '../constant/constant'



function AxiosHook(method, url, data) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setsuccess] = useState();
  const [recall,setrecall]= useState(false)
  const [stored,setstored] = useState(data)

console.log(stored,"storde")
  // if(stored.order_type != data.order_type || stored.pair != data.pair || stored.trade_type != data.trade_type ){
  //   setrecall(!recall)
  // }



  const call = ()=>{
    let config;

    if (method == "post") {
      config = {
        method: method,
        maxBodyLength: Infinity,
        url: `${Const.BackendUrl}/${url}`,
        headers: {
          Authorization: localStorage.getItem("imperials"),
        },
        data: data,
      };
    } else {
      config = {
        method: method,
        maxBodyLength: Infinity,
        url: `${Const.BackendUrl}/${url}`,
        headers: {
          Authorization: localStorage.getItem("imperials"),
        },
      };
    }

    axios
      .request(config)
      .then((response) => {
        setsuccess(response.data)
      })
      .catch((error) => {
        
        setError(error.response.data)
      });

  }

  useEffect(() => {
    call()
    // console.log(data,"option")
      }, [url,recall]);

  return [error, loading, success];
}

export default AxiosHook
