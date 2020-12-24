import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import "./ListPlanet.css";

function ListFav({ planets, loading }) {
  return (
    <>
      {loading && (
        <Spinner animation="border" className="d-flex mx-auto" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      {planets.length > 0 && (
        <Container className="ml-1">
          {planets.map(
            (m) =>
              m.isFavourite && (
                <Row key={m.id}>
                  <div className="h6">{m.name}</div>
                </Row>
              )
          )}
        </Container>
      )}
    </>
  );
}

export default ListFav;
