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

function issueTable(data) {
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
        {data.map((item) => {
          return (
            <tbody>
              <tr>
                <td>{item.issueDate}</td>
                <td>
                  <a href="#" onClick={() => window.open(item.url)}>
                    {item.title}
                  </a>
                </td>
                <td>{item.publisher}</td>
                <td>{item.resourceSymbol}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </>
  );
}

export default issueTable;
