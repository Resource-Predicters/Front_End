import React, { useEffect, useState } from "react";
import { ResourceInfoData, tbData, IssueInfoData } from "../axios/infoAxios";
import Chart from "./chart";
import { useParams } from "react-router-dom";
import DateDropdown from "./DatePicker";
// import ChartistGraph from "react-chartist";
import ResourceDropdown from "./DropButtons";
import IssueTable from "./GetIssueTable";
// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";

function DetailPage() {
  let [resourceData, setResourceData] = useState();
  let [resources, setResources] = useState();
  let [issueDate, setIssueDate] = useState();
  let [dropData, setDropData] = useState();

  let defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() - 30);
  let [startDate, setStartDate] = useState(defaultDate);
  let { id } = useParams();

  useEffect(() => {
    ResourceInfoData(
      "resource",
      "getinfo?date=" + formatDate(startDate),
      setResourceData
    );
    IssueInfoData(
      "issue",
      "getinfo?date=" + formatDate(startDate),
      setIssueDate
    );
    tbData("resource", "gettball", setResources);
    setDropData(id);
  }, []);

  useEffect(() => {
    ResourceInfoData(
      "resource",
      "getinfo?date=" + formatDate(startDate),
      setResourceData
    );
    IssueInfoData(
      "issue",
      "getinfo?date=" + formatDate(startDate),
      setIssueDate
    );
    tbData("resource", "gettball", setResources);

    console.log("dropData", dropData);
    console.log("startDate", startDate);
  }, [dropData, startDate]);

  return (
    <div>
      <Container fluid>
        {resources && ResourceDropdown(resources, setDropData)}
        {DateDropdown(startDate, setStartDate)}
        <p></p>
        <Card>
          {resourceData &&
            resourceData["symbols"].map((item, i) => {
              if (item == dropData) {
                console.log(resourceData);
                return (
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
                );
              }
            })}
        </Card>
        <p />

        {issueDate &&
          issueDate["resourceSymbols"].map((item, i) => {
            if (item == dropData) {
              return (
                <IssueTable
                  variant="outline-primary"
                  issueDate={issueDate["issueDate"][i]}
                  title={issueDate["title"][i]}
                  url={issueDate["url"][i]}
                  publisher={issueDate["publisher"][i]}
                  resourceSymbol={issueDate["resourceSymbols"][i]}
                ></IssueTable>
              );
            }
          })}
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

export default DetailPage;
