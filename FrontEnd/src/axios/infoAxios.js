import axios from "axios";
import dataSlice from "../function/dataSlice";

  const infoData = function (label, url, setFunc) {
    try {
      axios
        .get("http://222.98.255.30:12344/" + label + "/"+ url)
        .then((response) => {
          let sliceData = dataSlice(response.data);
          setFunc(sliceData);
        });
    } catch (error) {
      console.log(error);
    }
  };
  
  const tbData = function (label, url, setFunc) {
    try {
      axios
        .get("http://222.98.255.30:12344/" + label + "/"+ url)
        .then((response) => {
          console.log(response.data);
          setFunc(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

export { infoData, tbData };
