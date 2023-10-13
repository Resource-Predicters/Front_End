import React, { useEffect, useState } from "react";
import axios from "axios";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";


function GetIssueTable() {
    const [data, setData] = useState({ data: [] });

    // 이슈 data 가져오기
  const getIssue = async function getData() {
    try {
      const response = await axios
        .get("http://222.98.255.30:12344/issue/getinfo?date=2023-09-01")
        .then((response) => {
          // console.log(response.data);
          let save = [...response.data];
          setData(save);
        });
    } catch (error) {
      // console.log(error);
      alert("Error");
    }
  };

  useEffect(() => {
    getIssue();
  }, []);

  // 이슈 테이블 
  function issueTable() {

    if (data.length > 0) {
      return (
        data &&
        data.map((item) => (
          <tr>
            <td>{item.issueDate}</td>
            <td><a href='#' onClick={()=> window.open(item.url)}>{item.title}</a></td>
            {/* <button><td onClick={() => window.open(item.url)}>{item.title}</td></button> */}
            <td>{item.publisher}</td>
            <td>{item.resourceSymbol}</td>
          </tr>
        ))
      );
    }
  }

    return(
      <>
      <Row>
        <Col md="6">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">관련 뉴스</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">DATE</th>
                      <th className="border-0">HEADLINE</th>
                      <th className="border-0">PUBLISHER</th>
                      <th className="border-0">RESOURCE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {issueTable()}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
}

export default GetIssueTable;