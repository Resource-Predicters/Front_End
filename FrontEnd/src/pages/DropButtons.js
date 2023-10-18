import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Dropbuttons(data) {
  // console.log(data);

  // const [selectedValue, setSelectedValue] = useState(''); // 선택된 값을 저장할 상태

  // const handleDropdownChange = (value) => {
  //   setSelectedValue(value);
  // };

  // return (
  //   <Dropdown className="d-inline mx-2" size="sm" variant="secondary">
  //     <Dropdown.Toggle id="dropdown-autoclose-true">
  //       {selectedValue || '원자재 재료'} {/* 선택된 값 또는 초기 텍스트 표시 */}
  //     </Dropdown.Toggle>
  //     <Dropdown.Menu>
  //       {data.map((item) => (
  //         <Dropdown.Item
  //           key={item.resourceSymbol}
  //           eventKey={item.resourceSymbol}
  //           onSelect={handleDropdownChange}
  //         >
  //           {item.resourceSymbol}
  //         </Dropdown.Item>
  //       ))}
  //     </Dropdown.Menu>
  //   </Dropdown>
  // );


  return (
  <Dropdown className="d-inline mx-2" size="sm" variant="secondary">
    <Dropdown.Toggle id="dropdown-autoclose-true">
      원자재 재료
    </Dropdown.Toggle>
    <Dropdown.Menu>
        {data.map((item) => {
    // console.log(item);
    return(<Dropdown.Item eventKey={item.resourceSymbol}>{item.resourceSymbol}</Dropdown.Item>)
    })}
    </Dropdown.Menu>
  </Dropdown>
  );
  
    
    

  // const [resource, setResource] = useState({ data: [] });
  // const [exchange, setExchangeData] = useState({ data: [] });

  // 원자재 data 가져오기
  // const selectResource = async function getData() {
  //   try {
  //     await axios
  //       .get("http://222.98.255.30:12344/resource/gettball")
  //       .then((response) => {
  //         let save = [...response.data];
  //         setResource(save);
  //       });
  //       await axios
  //       .get("http://222.98.255.30:12344/exchange/gettball")
  //       .then((response) => {
  //         console.log(response.data);
  //         let save = [...response.data];
  //         setExchangeData(save);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //     alert("Error");
  //   }
  // };

  // useEffect(() => {
  //   selectResource();
  // }, []);

  // function buttonResource() {
  //   if (resource.length > 0) {
  //     return resource && resource.map((data) => (
  //         <Dropdown.Item>{data.resourceSymbol}</Dropdown.Item>
  //     ));
  //   }
  // }
  


  // return (
  //   <>
  //      <Dropdown className="d-inline mx-2" size="sm" variant="secondary">
  //       <Dropdown.Toggle id="dropdown-autoclose-true">
  //         원자재 종류
  //       </Dropdown.Toggle>
  //       <Dropdown.Menu>
  //         {buttonResource()}
  //       </Dropdown.Menu>
  //     </Dropdown>
       
  //     <Dropdown className="d-inline mx-2" size="sm" variant="secondary">
  //       <Dropdown.Toggle id="dropdown-autoclose-true">
  //         화폐 종류
  //       </Dropdown.Toggle>
  //       <Dropdown.Menu>
  //         {buttonExchange()}
  //       </Dropdown.Menu>
  //     </Dropdown>

  //     <Dropdown className="d-inline mx-2" size="sm" variant="secondary">
  //       <Dropdown.Toggle id="dropdown-autoclose-true">
  //         기간 종류
  //       </Dropdown.Toggle>

  //       <Dropdown.Menu>
  //         <Dropdown.Item >Menu Item</Dropdown.Item>
  //         <Dropdown.Item >Menu Item</Dropdown.Item>
  //         <Dropdown.Item >Menu Item</Dropdown.Item>
  //       </Dropdown.Menu>
  //     </Dropdown>
  //     <Button className="d-inline mx-2" size="md" variant="secondary">조회</Button>{' '}
      
  //   </>
  // );
}

export default Dropbuttons;