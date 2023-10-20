import React, { useEffect, useState } from "react";
import { ResourceInfoData, tbData, ResourceAiData } from "../axios/infoAxios";
import Chart from "components/Chart";
import { useParams } from "react-router-dom";
import DateDropdown from "../components/DatePicker";
// import ChartistGraph from "react-chartist";
import ResourceDropdown from "../components/DropButtons";
import IssueTable from "../components/IssueTable";
// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";

function AiPage() {
  let [resourceData, setResourceData] = useState();
  let [resourceAiData, setResourceAiData] = useState();
  let [resources, setResources] = useState();
  let [dropData, setDropData] = useState();
  let aiChartData = [];

  let defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() - 30);
  defaultDate = formatDate(defaultDate);

  let AiDate = new Date();
  AiDate.setDate(AiDate.getDate() + 7);
  AiDate = formatDate(AiDate);
  // let [startDate, setStartDate] = useState(defaultDate);
  let { id } = useParams();

  useEffect(() => {
    ResourceInfoData(
      "resource",
      "getinfo?date=" + defaultDate,
      setResourceData
    );

    ResourceAiData("resource", "getaidata?date=" + AiDate, setResourceAiData);

    tbData("resource", "gettball", setResources);
    setDropData(id);
  }, []);

  useEffect(() => {
    aiChartData = [];
    resourceData &&
      resourceData["symbols"].map((item, i) => {
        if (item == dropData) {
          // resource의 price와 date를 resourceAiData의 price와 date를 합쳐서 aiChartData에 넣어준다
          aiChartData = [
            [...resourceData["price"][i], ...resourceAiData["price"][i]],
            [...resourceData["date"][i], ...resourceAiData["date"][i]],
          ];
        }
      });
  }, [dropData]);

  return (
    <div>
      <Container fluid>
        {resources && ResourceDropdown(resources, setDropData)}
        {/* {DateDropdown(startDate, setStartDate)} */}
        <p></p>
        <Card>
          {resourceData &&
            resourceData["symbols"].map((item, i) => {
              if (item == dropData) {
                return (
                  <Chart
                    variant="outline-primary"
                    korName={resourceData["korName"][i]}
                    price={[
                      ...resourceData["price"][i],
                      ...resourceAiData["price"][i],
                    ]}
                    date={[
                      ...resourceData["date"][i],
                      ...resourceAiData["date"][i],
                    ]}
                    engName={resourceData["engName"][i]}
                    symbols={resourceData["symbols"][i]}
                    unit={resourceData["unit"][i]}
                    color="#A9A9A9"
                    forecastDataPoints={7}
                  ></Chart>
                );
              }
            })}
        </Card>
        <p />
      </Container>
    </div>
  );
}
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
export default AiPage;
