import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function MyDropdown(setDropData) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (eventKey, event) => {
    // eventKey는 선택된 아이템의 고유 키입니다.
    // 이를 사용하여 선택된 아이템을 식별할 수 있습니다.
    console.log("선택된 아이템의 eventKey:", eventKey);

    // event 타겟에서 아이템의 텍스트 내용을 가져올 수도 있습니다.
    console.log("선택된 아이템의 텍스트 내용:", event.target.text);

    // 선택된 아이템 정보를 상태로 업데이트
    setSelectedItem(eventKey);
    setDropData(event.target.text);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        드롭다운
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="item1">아이템 1</Dropdown.Item>
        <Dropdown.Item eventKey="item2">아이템 2</Dropdown.Item>
        <Dropdown.Item eventKey="item3">아이템 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MyDropdown;
