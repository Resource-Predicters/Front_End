import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

function ResourceDropdown(data) {
  return (
    <Dropdown className="d-inline mx-2" size="sm" variant="secondary">
      <Dropdown.Toggle id="dropdown-autoclose-true">
        원자재 재료
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {data.map((item) => {
          // console.log(item);
          return (
            <Dropdown.Item eventKey={item.resourceSymbol}>
              {item.resourceSymbol}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ResourceDropdown;
