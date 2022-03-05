import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expert = ({expert}) => {
    const {name , img , expertize} = expert;
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-danger">{expertize}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Expert;