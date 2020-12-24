import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListPlanet from "../ListPlanet/ListPlanet";
import "./Tabs.css";

function CustomTabs() {
  const [key, setKey] = useState("first");
  const [planets, setPlanets] = useState([]);
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    async function getPlanets() {
      const fetchOptions = {
        Method: "GET",
        "Content-Type": "application/json",
      };
      const res = await fetch(
        "https://assignment-machstatz.herokuapp.com/planet",
        fetchOptions
      );
      const data = await res.json();
      setPlanets(data);
      setLoad(false);
    }
    getPlanets();
  }, []);

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
              <Nav.Link eventKey="first">
                <h3>List of Planets</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                <h3>Favourites</h3>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ListPlanet planets={planets} loading={loading} />
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
        </Card.Body>
      </Tab.Container>
    </Card>
  );
}

export default CustomTabs;
