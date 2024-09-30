import React, { useState, useEffect } from 'react';
import Col from "react-bootstrap/Col";
import Record from './recordComponent';
import { Container, Row } from 'react-bootstrap'; // Import Container and Row

async function fetchJsonData() {
  const response = await fetch('./data.json');
    const data = await response.json();
    return data;
}

function Cycling() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchJsonData().then((fetchedData) => setData(fetchedData));
    }, []);
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          {data.slice(0, 5).map((item, index) => (
            <Record
              key={index}
              image="https://xsfitness.com.au/wp-content/uploads/2022/07/Cycling-is-Beneficial-1024x576.png"
              session="Cycling"
              description={item.city}
              details={item.deatils}
            />
          ))}
        </Col>
        <Col>
          {data.slice(5).map((item, index) => (
            <Record
              key={index}
              image="https://xsfitness.com.au/wp-content/uploads/2022/07/Cycling-is-Beneficial-1024x576.png"
              session="Cycling"
              description={item.city}
              details={item.deatils}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Cycling;