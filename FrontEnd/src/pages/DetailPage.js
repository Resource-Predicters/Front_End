import React, { useEffect, useState } from "react";
import { ResourceInfoData, tbData, IssueInfoData } from "../axios/infoAxios";
import App from "./chart";
import { useParams } from "react-router-dom";

// import ChartistGraph from "react-chartist";
import ResourceDropdown from "./DropButtons";
import issueTable from "./GetIssueTable";
// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";

function DetailPage() {
  let [resourceData, setResourceData] = useState();
  let [resources, setResources] = useState();
  let [issueDate, setIssueDate] = useState();

  let { id } = useParams();

  useEffect(() => {
    ResourceInfoData("resource", "getinfo?date=2023-09-01", setResourceData);
    IssueInfoData("issue", "getinfo?date=2023-09-01", setIssueDate);
    tbData("resource", "gettball", setResources);
  }, []);

  // // const [data, setData] = useState({ data: [] });
  // // const [xData, setXData] = useState();

  // // // 환율 data 가져오기
  // // const getExchange = async function getData() {
  // //   try {
  // //     const response = await axios
  // //       .get("http://222.98.255.30:12344/exchange/getinfo?date=2023-09-01")
  // //       .then((response) => {
  // //         // console.log(response.data);
  // //         let save = [...response.data];
  // //         setData(save);
  // //       });
  // //   } catch (error) {
  // //     console.log(error);
  // //     alert("Error");
  // //   }
  // // };

  // // useEffect(() => {
  // //   getExchange();
  // // }, []);

  // // 출력
  // // function showData() {
  // //   let x = [];
  // //   if (data.length > 0) {
  // //     return data.map((realdata) => (
  // //       <div key={realdata.date}>
  // //         {realdata.currency}
  // //         {realdata.currencyName}
  // //         {realdata.currencySymbol}
  // //         {realdata.exchangeRate}
  // //       </div>
  // //     ));
  // //   }
  // // }

  // // x축 - 날짜
  // function xLine() {
  //   let xxx = [];
  //   if (data.length > 0) {
  //     data.map((realdata) => xxx.push(realdata.date));
  //   }
  //   return xxx;
  // }

  // // y축 - 환율가격
  // function yLine() {
  //   let yyy = [];
  //   if (data.length > 0) {
  //     data.map((realdata) => yyy.push(realdata.exchangeRate));
  //   }
  //   // console.log(yyy);
  //   return yyy;
  // }

  // // 환율 테이블
  // function exchangeTable() {
  //   if (data.length > 0) {
  //     return (
  //       data &&
  //       data.map((item) => (
  //         <tr>
  //           <td>{item.date}</td>
  //           <td>{item.exchangeRate}</td>
  //           <td>{item.currencyName}</td>
  //           <td>{item.currencySymbol}</td>
  //           <td>{item.currency}</td>
  //         </tr>
  //       ))
  //     );
  //   }
  // }

  return (
    <div>
      <Container fluid>
        {resources && ResourceDropdown(resources)}
        <p></p>
        <Card>
          {resourceData &&
            resourceData["symbols"].map((item, i) => {
              if (item == id) {
                return (
                  <App
                    variant="outline-primary"
                    korName={resourceData["korName"][i]}
                    price={resourceData["price"][i]}
                    date={resourceData["date"][i]}
                    engName={resourceData["engName"][i]}
                    symbols={resourceData["symbols"][i]}
                    unit={resourceData["unit"][i]}
                    color="#A9A9A9"
                  ></App>
                );
              }
            })}
          {/* </div> */}
        </Card>
        <p />

        {/* {issueDate && issueTable(issueDate)} */}
      </Container>
    </div>
  );
}

{
  /* <div>
  <Container fluid>
    {resources && Dropbuttons(resources)}
    <p></p>
    <Row>
      <Col md="12">
        <Card>
          <Card.Body>

            {resourceData &&
              resourceData["symbols"].map((item, i) => {
                if (item == id) {
                  return (
                    <App
                      variant="outline-primary"
                      korName={resourceData["korName"][i]}
                      price={resourceData["price"][i]}
                      date={resourceData["date"][i]}
                      engName={resourceData["engName"][i]}
                      symbols={resourceData["symbols"][i]}
                      unit={resourceData["unit"][i]}
                      color="#A9A9A9"
                    ></App>
                  );
                }
              })}
          </Card.Body>
        </Card>
        <p />
      </Col>
    </Row>

    {issueDate && issueTable(issueDate)}
  </Container>
</div>; */
}

export default DetailPage;
