import axios from "axios";
import { ResourceSlice, IssueSlice } from "../function/dataSlice";

const ResourceInfoData = function (label, url, setFunc) {
  try {
    axios
      .get("http://222.98.255.30:12344/" + label + "/" + url)
      .then((response) => {
        let sliceData = ResourceSlice(response.data);
        setFunc(sliceData);
      });
  } catch (error) {
    console.log(error);
  }
};

const IssueInfoData = function (label, url, setFunc) {
  try {
    axios
      .get("http://222.98.255.30:12344/" + label + "/" + url)
      .then((response) => {
        console.log(response.data);
        let sliceData = IssueSlice(response.data);
        console.log(sliceData);
        setFunc(sliceData);
      });
  } catch (error) {
    console.log(error);
  }
};

const tbData = function (label, url, setFunc) {
  try {
    axios
      .get("http://222.98.255.30:12344/" + label + "/" + url)
      .then((response) => {
        setFunc(response.data);
      });
  } catch (error) {
    console.log(error);
  }
};

export { ResourceInfoData, IssueInfoData, tbData };
