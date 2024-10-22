import CarouselImage from "@components/section/CarouselImage/CarouselImage";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import Categories from "./Categories";

const Home = () => {
  const cards = Array.from({ length: 8 }, (_, index) => index);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <CarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="mt-5">
        <Container>
          <Row>
            <Categories />
          </Row>
          <Row>
            {cards.map((_, index) => (
              <Col key={index} xs="12" md="3" className="mb-4">
                <Card style={{ width: "18rem", marginBottom: "2rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://placehold.co/600x600?font=roboto"
                  />
                  <Card.Body>
                    <Card.Title>Card Title {index + 1}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
