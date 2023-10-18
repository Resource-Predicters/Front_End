import axios from "axios";
import App from "./chart";
import {infoData} from "../axios/infoAxios";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";



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
        <Card>
          <App variant="outline-primary"
            korName={resourceData["korName"][i]}
            price={resourceData["price"][i]}
            date={resourceData["date"][i]}
            engName={resourceData["engName"][i]}
            symbols={resourceData["symbols"][i]}
            unit={resourceData["unit"][i]}
            color="#A9A9A9"
          >
          </App>
          {/* <a href="http://localhost:3000/admin/detail">상세보기</a> */}
          <Link to={`/admin/detail/${resourceData["symbols"][i]}`}>상세보기</Link>
        </Card>
      )
    })}
    </Row>
  );
}

export default MainPage;
