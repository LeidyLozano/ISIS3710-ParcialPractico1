import React, { useState, useEffect } from 'react';
import Cycling from './cyclingComponent';
import { Container } from 'react-bootstrap'; // Import Container

function Homepage() {
    return (
        <Container className="mt-3">
            <Cycling />
        </Container>
        );}

export default Homepage;