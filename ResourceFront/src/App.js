import "./App.css";
import infoData from "./axios/infoAxios";
import { useEffect, useState } from "react";
import dataSelice from "./function/dataSelice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginDB, profile } from "../src/user/user";

function App() {
  // POST 요청을 보낼 데이터

  const name = "name";
  const password = "password";

  // POST 요청을 보낼 엔드포인트 URL
  const postUrl = `${process.env.REACT_APP_BACKEND_URL}/user/login`;
  const dispatch = useDispatch();
  const token = dispatch(loginDB(name, password));

  dispatch(profile(token));

  // Axios를 사용하여 POST 요청 보내기

  // axios
  //   .post(postUrl, jsonData, {
  //     headers: {
  //       "Content-Type": "application/json", // 요청 데이터 형식
  //     },
  //   })
  //   .then((response) => {
  //     // 성공적으로 응답을 받았을 때 실행할 코드
  //     console.log("응답 데이터:", response.data);
  //   })
  //   .catch((error) => {
  //     // 요청에 실패했을 때 실행할 코드
  //     console.error("에러:", error);
  //   });

  return <div>{}</div>;
}

export default App;
