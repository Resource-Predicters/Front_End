import axios from "axios";
import Chart from "./chart";
import { ResourceInfoData } from "../axios/infoAxios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function MainPage() {
  let [resourceData, setResourceData] = useState();

  useEffect(() => {
    ResourceInfoData("resource", "getinfo?date=2023-09-01", setResourceData);
  }, []);

  return (
    <Row xs={2} md={2} className="g-4">
      {resourceData &&
        resourceData["korName"].map((item, i) => {
          return (
            <Card>
              <Chart
                variant="outline-primary"
                korName={resourceData["korName"][i]}
                price={resourceData["price"][i]}
                date={resourceData["date"][i]}
                engName={resourceData["engName"][i]}
                symbols={resourceData["symbols"][i]}
                unit={resourceData["unit"][i]}
                color="#A9A9A9"
              ></Chart>
              <Button
                href={`/admin/detail/${resourceData["symbols"][i]}`}
                variant="dark"
              >
                {resourceData["symbols"][i]} 상세보기
              </Button>
            </Card>
          );
        })}
    </Row>
  );
}

export default MainPage;
