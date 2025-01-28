import { Card } from 'react-bootstrap';
import './CardTeam.css';

function CardTeam({ name, image, description, linkedin, github }) {
  return (
    <Card className="teamCard">
      <div className="image-container">
        <img src={image} alt={`Photo of ${name}`} />
      </div>
      <Card.Body>
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text className="card-text">{description}</Card.Text>
      </Card.Body>
      <Card.Body className="social-links">
        {linkedin && (
          <Card.Link href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Card.Link>
        )}
        {github && (
          <Card.Link href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardTeam;
