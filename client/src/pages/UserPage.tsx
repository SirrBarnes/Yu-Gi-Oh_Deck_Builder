import { Button } from 'antd';
import { Avatar } from 'antd';
import BackgroundImg from '../assets/Site_Background.png';

import {
  Container,
  Row,
  Col,
  Card,

} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const backgroundStyle = {
  backgroundImage: `url('${BackgroundImg}')`,
  backgroundSize: "cover", // Ensures the image covers the entire page
  backgroundRepeat: "no-repeat", // Prevents tiling of the image
  backgroundPosition: "center", // Centers the image
  height: "100vh", // Full viewport height
  width: "100vw", // Full viewport width
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const UserPage = () => {
  return (
    <div style = {backgroundStyle}>

      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="text-center shadow-sm">
              <Avatar
                size={{ xs: 180, sm: 250, md: 300, lg: 350, xl: 400, xxl: 500 }}
                src={"https://preview.redd.it/would-this-make-exodia-viable-v0-0w9xrx32vw4c1.jpeg?width=640&crop=smart&auto=webp&s=99a27fa972b8f02aa1778367371a004e08a8b989"}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
              <Card.Body>
                <Card.Title>Sergio Torres</Card.Title>
                <Card.Text>
                  This is my Bio!
                  Let's Battle!
                </Card.Text>

                <Link to="/Search">
                  <Button >
                    Search for Cards
                  </Button>
                </Link>

              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col xs={12} sm={10} md={8} lg={6}>
            <Row className="gy-3">
              <Col xs={6}>
                <Link to="/MyCollection">
                  <Button className="w-100" size="large">
                    Card Collection
                  </Button>
                </Link>
              </Col>

              <Col xs={6}>
                <Link to="/DeckCreator">
                  <Button className="w-100" size="large">
                    Deck Creator
                  </Button>
                </Link>
              </Col>

              <Col xs={6}>
                <Link to="/MyDecks">
                  <Button className="w-100" size="large">
                    My Decks
                  </Button>
                </Link>
              </Col>

              <Col xs={6}>
                <Link to="/Settings">
                  <Button className="w-100" size="large">
                    Settings
                  </Button>
                </Link>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserPage;