import axios from "axios";
import dataSlice from "../function/dataSlice";

const infoData = function (label, url, date, setFunc) {
  try {
    axios
      .get("http://222.98.255.30:12344/" + label + url + date)
      .then((response) => {
        let sliceData = dataSlice(response.data);
        console.log(sliceData);
        setFunc(sliceData);
      });
  } catch (error) {
    console.log(error);
  }
};

export default infoData;
