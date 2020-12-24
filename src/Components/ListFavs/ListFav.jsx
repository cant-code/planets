import React, { useMemo } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function ListFav({ planets, loading }) {
  const count = useMemo(() => {
    let i = 0;
    planets.forEach((ele) => {
      if (ele.isFavourite) i++;
    });
    return i;
  }, [planets]);

  return (
    <>
      {loading && (
        <Spinner animation="border" className="d-flex mx-auto" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      {count > 0 ? (
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
      ) : (
        <h4>No planets in Favourites List</h4>
      )}
    </>
  );
}

export default ListFav;
