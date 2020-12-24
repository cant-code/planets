import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./ListPlanet.css";

function ListPlanet({ planets, loading, setPlanets }) {
  const handleFav = (id) => {
    let newPlanets = planets.map((item) => {
      if (item.id === id) {
        return { ...item, isFavourite: !item.isFavourite };
      }
      return item;
    });
    setPlanets(newPlanets);
  };

  return (
    <>
      {loading && (
        <Spinner animation="border" className="d-flex mx-auto" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      {planets.length > 0 && (
        <>
          <Row className="ml-1 mr-1">
            <h3>Planets</h3>
            <h3 className="ml-auto">Add to Favourites</h3>
          </Row>
          <hr />
          <Container className="ml-1">
            {planets.map((m) => (
              <Row key={m.id}>
                <div className="h6">{m.name}</div>
                <Form.Check
                  className="ml-auto"
                  type="switch"
                  id={m.id}
                  value={m.isFavourite}
                  onChange={() => handleFav(m.id)}
                />
              </Row>
            ))}
          </Container>
        </>
      )}
    </>
  );
}

export default ListPlanet;
