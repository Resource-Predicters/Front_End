import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

function Dropbuttons() {
  return (
    <>
      <Dropdown className="d-inline mx-2" size="sm" variant="secondary">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          원자재 종류
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" size="sm" variant="secondary">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          화폐 종류
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" size="sm" variant="secondary">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          기간 종류
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button className="d-inline mx-2" size="md" variant="secondary">조회</Button>{' '}
      
    </>
  );
}

export default Dropbuttons;