import axios from "axios";
import Chart from "components/Chart";
import { ResourceInfoData } from "../axios/infoAxios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { CardHeader, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function MainPage() {
  let [resourceData, setResourceData] = useState();
  let defaultDate = new Date("2023-08-01");
  defaultDate.setDate(defaultDate.getDate() - 30);
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    ResourceInfoData(
      "resource",
      "getinfo?date=" + formatDate(defaultDate),
      setResourceData
    );
  }, []);

  return (
    <Row xs={2} md={2} className="g-4">
      {resourceData &&
        resourceData["korName"].map((item, i) => {
          return (
            <div class="col-sm-6">
              <Card>
                <CardHeader className="justify-content-md-center">
                  <h4>
                    {resourceData["korName"][i]} {resourceData["unit"][i]}
                  </h4>
                </CardHeader>
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
            </div>
          );
        })}
    </Row>
  );
}

export default MainPage;
