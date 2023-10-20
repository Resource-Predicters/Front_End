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

function IssueTable(props) {
  return (
    <>
      <Card>
        <div className="text-center b-0"> 관련 뉴스</div>
      </Card>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>날짜</th>
            <th>뉴스 제목</th>
            <th>신문사</th>
            <th>자재 이름</th>
          </tr>
        </thead>
        {props.issueDate.map((item, i) => {
          return (
            <tbody>
              <tr>
                <td>{props.issueDate[i]}</td>
                <td>
                  <a href="#" onClick={() => window.open(props.url[i])}>
                    {props.title[i]}
                  </a>
                </td>
                <td>{props.publisher[i]}</td>
                <td>{props.resourceSymbol}</td>
              </tr>
            </tbody>
          );
        })}

        {/* {data.map((item) => {
          return (
            
          );
        })} */}
      </Table>
    </>
  );
}

export default IssueTable;
