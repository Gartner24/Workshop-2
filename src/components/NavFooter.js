import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { AiOutlineHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';

const NavFooter = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
        <Container>
          <Navbar.Brand href="#"><AiOutlineHome/></Navbar.Brand>
          <Navbar.Brand href="#"><BsSearch/></Navbar.Brand>
          <Navbar.Brand href="#"><IoMdNotificationsOutline/></Navbar.Brand>
          <Navbar.Brand href="#"><AiOutlineUser/></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
    
  );
};

export default NavFooter;
