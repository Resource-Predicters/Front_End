import axios from "axios";
import App from "./chart";
import infoData from "../axios/infoAxios";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function MainPage() {
  let [resourceData, setResourceData] = useState();

  useEffect(() => {
    infoData("resource", "2023-09-01","/getinfo?date=", setResourceData);
    console.log("실행");
  }, []);

  return (
        <Row xs={2} md={2} className="g-4">
          
      {resourceData &&
    resourceData["korName"].map((item, i) => {
      return (
        <App variant="outline-primary"
          korName={resourceData["korName"][i]}
          price={resourceData["price"][i]}
          date={resourceData["date"][i]}
          engName={resourceData["engName"][i]}
          symbols={resourceData["symbols"][i]}
          unit={resourceData["unit"][i]}
          color="#A9A9A9"
        ></App>
      );
    })}
    </Row>
    
  );
}

export default MainPage;
