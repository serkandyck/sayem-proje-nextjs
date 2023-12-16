'use client';

import Dropdown from 'react-bootstrap/Dropdown';
import { signOut } from 'next-auth/react';

export default function DropdownComp({name}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success sayem-primary-button" id="dropdown-basic">
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Talep Listesi</Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => {
        signOut();
      }}>Çıkış yap</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
