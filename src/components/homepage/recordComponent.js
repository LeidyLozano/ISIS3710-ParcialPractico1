import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Record(props) {
 return (
   <Col>
     <Card className="bg-dark text-white">
       <Card.Img src={props.image} alt="Card image" />
       <Card.ImgOverlay>
         <Card.Title>{props.session} Session </Card.Title>
         <Card.Text>Recorrido al rededor de la bahía de {props.description}</Card.Text>
         <Card.Text>{props.details}</Card.Text>
       </Card.ImgOverlay>
     </Card>
   </Col>
 );
}

export default Record;