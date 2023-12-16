'use client';

import Dropdown from 'react-bootstrap/Dropdown';

export default function DropdownComp() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success sayem-primary-button" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
