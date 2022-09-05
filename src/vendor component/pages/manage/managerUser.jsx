import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Manage() {
    return (
        <Row xs={6} md={8} className="g-8">
            {Array.from({ length: 8 }).map((_, idx) => (
                <Col xs={6} md={8}>
                    <Card>
                        <Card.Img variant="top" src="https://react.semantic-ui.com/images/avatar/large/molly.png"
                            height={200} width={200} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Manage;