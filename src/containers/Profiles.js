import React, { useEffect, useState } from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import NavFooter from "../components/NavFooter";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import axios from "axios";

const Profiles = () => {

    const getFotos = async (state) => {
    const peticion = await axios.get('https://json-worksop-02.herokuapp.com/users')
    console.log(peticion.data[0].fotos[1].imagen);
    }

    const [Fotos, setFotos] = useState(null);

  useEffect(() => {
    getFotos(setFotos);
  }, []);


  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <img
              src="https://res.cloudinary.com/dy8n5pg1g/image/upload/v1654806139/workshop/final_l2epbr.png"
              className="img-fluid rounded mx-auto d-block"
            />
            <Container fluid className="d-flex align-items-center mx-5 p-2">
              <img
                src="https://res.cloudinary.com/dy8n5pg1g/image/upload/v1654803731/workshop/p-4_pnsbhr.png"
                className="img-fluid rounded-circle w-25"
              />
              <p className="fw-semibold mx-3">Jennie Kim</p>
              <AiOutlineHeart />
              <FaRegComments />
              <TbBrandTelegram />
            </Container>
            <p className="lh-1 text-center my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              gravida tortor in habitant pellentesque a quisque. Nisl diam, amet
              eu est libero dignissim donec nec. Fames bibendum porta phasellus
              neque. Integer et lectus amet, vitae facilisis laoreet feugiat
              pellentesque accumsan. Turpis eget laoreet turpis urna tincidunt
              nisl, integer nisl. Id nec tortor vel, dui, lectus. Donec
              consequat dolor cursus sed pellentesque etiam ipsum, id quam.
              Tincidunt eu duis ullamcorper posuere augue. Arcu senectus elit,
              semper diam porta. Platea tempus augue ante pellentesque dictum
              sed vitae. Auctor dui ac bibendum lacus.
            </p>
            <Container fluid className="d-flex align-items-center my-5 p-2">
              <img
                src="https://res.cloudinary.com/dy8n5pg1g/image/upload/v1654809352/workshop/profile_a0elvs.png"
                className="img-fluid rounded-circle w-25 "
              />
              <InputGroup className="mb-3 ">
                <Form.Control aria-label="First name" />
                <Button><TbBrandTelegram /></Button>
              </InputGroup>
            </Container>
          </Col>
        </Row>
      </Container>

      <NavFooter />
    </>
  );
};

export default Profiles;
