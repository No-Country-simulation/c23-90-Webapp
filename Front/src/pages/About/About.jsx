import { Card, Col, Row } from 'react-bootstrap';
import styles from './About.css';
import CardTeam from './CardTeam/CardTeam';

function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Maria Angelica Palomino Jaramillo',
      image: '/Marian.jpg',
      description: 'Full Stack Developer at AMANI',
      linkedin: 'https://www.linkedin.com/in/mangelicapj/',
      github: 'https://github.com/mangelicapj',
    },
    {
      id: 2,
      name: 'Osvaldo Ramirez',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHRsMerP0aNZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718404573294?e=1743638400&v=beta&t=Rk8rw1krI5EoQ_8cBpeWxirOD2eOUKVmwLcq_hd3k7o',
      description: 'Full Stack Developer at AMANI',
      linkedin: 'https://www.linkedin.com/in/osvaldo-g-ramirez/',
      github: 'https://github.com/osvaldoRamirez97/',
    },
    {
      id: 3,
      name: 'Maximiliano Testa',
      image: 'https://ca.slack-edge.com/T02KS88FB0E-U087STAK4KA-be69c6de3c70-512',
      description: 'Full Stack Developer at AMANI',
      linkedin: 'https://www.linkedin.com/in/maximiliano-javier-testa-9b6631106/',
      github: 'https://github.com/Maxi-17',
    },
    {
      id: 4,
      name: 'Alejandro Reyes',
      image: 'https://ca.slack-edge.com/T02KS88FB0E-U079FF3DH8C-g6ea6d2ee80d-512',
      description: 'Software QA Engineer at AMANI',
      linkedin: 'https://www.linkedin.com/in/alejandro-reyes-software-qa-engineer/',
      github: '',
    },
    {
      id: 5,
      name: 'Diego Guzmán',
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQGEpJ1WF9ALQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1618757947979?e=1743638400&v=beta&t=zU7xn3278mNc3EnHYOW5u92FyAhmF1xM6re7gu7upic',
      description: 'Backend at AMANI',
      linkedin: 'https://www.linkedin.com/in/diego-guzman-cerveux/',
      github: '',
    },
  ];

  return (
    <div className={styles.aboutContainer}>
      <Card className={styles.companyCard}>
        <Row className="g-0">
          <Col md={8} className="mx-auto">
            <Card.Body className={styles.textContainer}>
              <Card.Title className={styles.text}>
                ¡AMANI: PEACE IN ACTION, UNITY IN MOTION!
              </Card.Title>
              <Card.Text className={styles.text}>
                Join AMANI and make a real impact! Discover volunteer opportunities that connect you to sustainable communities, eco-friendly projects, and life-changing experiences. Together, we create peace and unity through action. Start your journey today and be the change the world needs! As junior developers, we came together with the goal of creating more than just a website. We wanted to build a purposeful platform that would connect individuals eager to do good with projects in need of support. Thus, AMANI was born, a name that means "peace" in Swahili, reflecting our vision to create a positive impact in the world. What began as a small dream quickly evolved into a project with a profound social purpose. We decided to use React to build the frontend, aiming for a simple yet attractive interface that would allow users to explore volunteering opportunities based on their interests and location. We incorporated features such as country filters and the creation of secure volunteer profiles, making AMANI not only functional but also user-friendly. Each informational section, from "How to Join" to "Benefits," was designed to be clear and direct, ensuring the platform’s purpose was always at the forefront. AMANI became more than just an ecommerce platform—it evolved into a real connection tool. For us as developers, it’s been more than just a technical project; it’s been the opportunity to create something with a tangible impact on the world. AMANI is in its early stages and growing, initially part of the No Country project but with a much greater purpose.
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
