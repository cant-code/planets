import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Tabs.css";

function CustomTabs() {
  const [key, setKey] = useState("first");

  return (
    <Card className="custom-card my-auto mx-auto">
      <Tab.Container
        id="left-tabs-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Card.Header>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              libero aliquid magnam quibusdam, nam est cum fugiat distinctio
              doloribus, beatae eveniet voluptatem neque? Sint iure ipsum nulla
              recusandae voluptate natus amet, saepe soluta quia cumque. Nemo,
              sed voluptates ea dicta minus sit tempora aut sequi ipsum
              repudiandae quis, natus modi?
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              magnam in consequuntur blanditiis quo ut esse? Itaque voluptas
              excepturi omnis neque recusandae voluptates, harum officia quidem
              earum similique eveniet libero facilis a, quisquam cumque, enim
              minus aperiam! Optio ea, a debitis voluptates facere atque
              adipisci quod culpa deleniti quas at.
            </Tab.Pane>
          </Tab.Content>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
}

export default CustomTabs;
