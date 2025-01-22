import { Card, Col, Row } from 'react-bootstrap';
import styles from './About.css';
import CardTeam from './CardTeam/CardTeam';

function About() {
 
  const teamMembers = [
    {
      id: 1,
      name: 'Maria Angelica Palomino Jaramillo',
      image: 'https://avatars.githubusercontent.com/u/128256723?v=4',
      banner: 'https://media.licdn.com/dms/image/D4E16AQFu0Fl-BB0t3Q/profile-displaybackgroundimage-shrink_350_1400/0/1699049023012?e=1711584000&v=beta&t=67TvenofJBr9utHTO5qgu2Qls4yOwys0h-hk3Dvn_LM',
      description: 'Full Stack Developer at ANAMI',
      linkedin: 'https://www.linkedin.com/in/mangelicapj/',
      github: 'https://github.com/mangelicapj',
    },
    {
      id: 2,
      name: 'Maximiliano Testa',
      image: 'https://ca.slack-edge.com/T02KS88FB0E-U087STAK4KA-be69c6de3c70-512',
      banner: 'https://media.licdn.com/dms/image/D4E16AQFu0Fl-BB0t3Q/profile-displaybackgroundimage-shrink_350_1400/0/1699049023012?e=1711584000&v=beta&t=67TvenofJBr9utHTO5qgu2Qls4yOwys0h-hk3Dvn_LM',
      description: 'Full Stack Developer at ANAMI',
      linkedin: '',
      github: '',
    },
  ];

  return (
    <div className={styles.aboutContainer}>
      <Card className={styles.companyCard}>
        <Row className="g-0">
          <Col md={8} className="mx-auto">
            <Card.Body className={styles.textContainer}>
              <Card.Title className={styles.text}>¡AMANI: PEACE IN ACTION, UNITY IN MOTION!</Card.Title>
              <Card.Text className={styles.text}>
                Join AMANI and make a real impact! Discover volunteer opportunities that connect you to sustainable communities, eco-friendly projects, and life-changing experiences. Together, we create peace and unity through action. Start your journey today and be the change the world needs!
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <p className={styles.teamTitle}>Meet Our Team</p>
      <div className={styles.cardSection}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.cardContainer}>
            <CardTeam {...member} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
