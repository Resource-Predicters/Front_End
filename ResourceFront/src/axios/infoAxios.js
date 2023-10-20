import axios from "axios";
import { ResourceSlice, AiDataSlice, IssueSlice } from "../function/dataSlice";

const ResourceInfoData = function (label, url, setFunc) {
  try {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + label + "/" + url)
      .then((response) => {
        let sliceData = ResourceSlice(response.data);
        setFunc(sliceData);
      });
  } catch (error) {
    console.log(error);
  }
};

const ResourceAiData = function (label, url, setFunc) {
  try {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + label + "/" + url)
      .then((response) => {
        let sliceData = AiDataSlice(response.data);

        setFunc(sliceData);
      });
  } catch (error) {
    console.log(error);
  }
};

const IssueInfoData = function (label, url, setFunc) {
  try {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + label + "/" + url)
      .then((response) => {
        let sliceData = IssueSlice(response.data);
        setFunc(sliceData);
      });
  } catch (error) {
    console.log(error);
  }
};

const tbData = function (label, url, setFunc) {
  try {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + label + "/" + url)
      .then((response) => {
        setFunc(response.data);
      });
  } catch (error) {
    console.log(error);
  }
};

export { ResourceInfoData, IssueInfoData, tbData, ResourceAiData };
