import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image5 from './chat.png'

function FeatureCard() {
  return (
   <>
   <div style={{color:"azure", alignItems:"center", fontSize:"3rem"}}>DISCOVER THE FEATURES</div>
    <div style={{display:"flex", flexDirection:"", justifyContent:"space-around"}}>
        <Card style={{ width: '16rem', border:"black dashed",borderRadius:"10px",background:'linear-gradient(to bottom left, #31065f 40%, #b327de 100%, #31065f 70%)', boxShadow:"1rem", margin:"1rem" }}>
      <Card.Img variant="top" src={image5}  style={{width: "14rem"}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{margin:"1rem"}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem', border:"black dashed",borderRadius:"10px",background:'linear-gradient(to bottom left, #31065f 40%, #b327de 100%, #31065f 70%)', boxShadow:"1rem", margin:"1rem" }}>
      <Card.Img variant="top" src={image5}  style={{width: "14rem"}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{margin:"1rem"}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem', border:"black dashed",borderRadius:"10px",background:'linear-gradient(to bottom left, #31065f 40%, #b327de 100%, #31065f 70%)', boxShadow:"1rem", margin:"1rem" }}>
      <Card.Img variant="top" src={image5}  style={{width: "14rem"}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{margin:"1rem"}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem', border:"black dashed",borderRadius:"10px",background:'linear-gradient(to bottom left, #31065f 40%, #b327de 100%, #31065f 70%)', boxShadow:"1rem", margin:"1rem" }}>
      <Card.Img variant="top" src={image5}  style={{width: "14rem"}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{margin:"1rem"}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    
   
    
    </div>
   </>

  );
}

export default FeatureCard;