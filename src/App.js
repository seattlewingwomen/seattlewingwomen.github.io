import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import { GhostButton } from "./common/Buttons";
import LogoBar from "./common/LogoBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileList from "./common/ProfileList";
import Gapper from "./common/Gapper";
import { DescriptionText, TitleBrandText } from "./common/Text";

const HeroSection = () => {
  return (
    <Container fluid className="hero-container">
      <Row className="hero-section">
        <Col md={1} />
        <Col md={4}>
          <div className="hero-text-content">
            <TitleBrandText>
              <h1>Find Love Today</h1>
            </TitleBrandText>
            <DescriptionText>
              <p>
                Our goal is to help Seattle locals find love the fun way! No
                more dating app blues — have a friend submit a dating profile
                for you today.
              </p>
              <GhostButton>See singles in your area</GhostButton>
              <Gapper />
              <Gapper />
            </DescriptionText>
          </div>
        </Col>
        <Col md={1} />
        <Col md={6} style={{ padding: 0 }}>
          <div className="hero-image" />
        </Col>
      </Row>
    </Container>
  );
};

const SinglesSection = () => {
  return (
    <>
      <Container
        fluid
        style={{ paddingTop: "24px" }}
        className="container-white"
      >
        <Row>
          <Col md={12}>
            <DescriptionText>
              <h2>
                <b>Singles in your area:</b>
                <Gapper />
                <Gapper />
              </h2>
            </DescriptionText>

            <div className="home-profiles-list-container">
              <ProfileList />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <LogoBar />
      <HeroSection />
      <SinglesSection />
    </div>
  );
}

export default App;
